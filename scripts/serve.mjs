import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const { version } = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
const port = Number(process.env.PORT ?? 4173);
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webmanifest': 'application/manifest+json', '.json': 'application/json; charset=utf-8', '.ico': 'image/x-icon', '.woff2': 'font/woff2' };
try { await stat(path.join(root, 'index.html')); }
catch { console.error('Chua co ban build. Hay chay pnpm build truoc.'); process.exit(1); }

http.createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405); res.end(); return; }
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname); }
  catch { res.writeHead(400); res.end(); return; }
  if (pathname === '/__tam_nang_health') {
    res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
    res.end(JSON.stringify({ app: 'tam-nang', version })); return;
  }
  let file = path.resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
  if (!file.startsWith(`${path.resolve(root)}${path.sep}`)) { res.writeHead(403); res.end(); return; }
  try {
    if (!(await stat(file)).isFile()) throw new Error('not file');
  } catch {
    if ((req.headers.accept ?? '').includes('text/html') && !path.extname(pathname)) file = path.join(root, 'index.html');
    else { res.writeHead(404); res.end('Not found'); return; }
  }
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] ?? 'application/octet-stream', 'Cache-Control': file.includes(`${path.sep}assets${path.sep}`) ? 'public, max-age=31536000, immutable' : 'no-cache', 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'same-origin' });
    res.end(req.method === 'HEAD' ? undefined : body);
  } catch { res.writeHead(500); res.end('Could not read file'); }
}).on('error', error => { console.error(error.code === 'EADDRINUSE' ? `Cong ${port} dang duoc su dung. Mo http://127.0.0.1:${port} neu Tam Nang da chay.` : error.message); process.exit(1); })
  .listen(port, '127.0.0.1', () => console.log(`Tam Nang dang chay: http://127.0.0.1:${port}\nNhan Ctrl+C de dung.`));
