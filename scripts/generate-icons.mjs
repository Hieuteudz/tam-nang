import { createRequire } from 'node:module';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const require = createRequire(import.meta.url);
let sharp;
try { sharp = require(process.env.TAM_NANG_SHARP_PATH || 'sharp'); }
catch { throw new Error('Cần Sharp để tạo lại icon: pnpm add -D sharp, rồi chạy pnpm icons. PNG đã tạo sẵn không cần Sharp khi build/chạy app.'); }
const publicDir = new URL('../public/', import.meta.url), svg = await readFile(new URL('icon.svg', publicDir));
for (const size of [192, 512]) await sharp(svg).resize(size, size).png().toFile(fileURLToPath(new URL(`icon-${size}.png`, publicDir)));
await sharp(svg).resize(512, 512).flatten({ background: '#377968' }).png().toFile(fileURLToPath(new URL('icon-maskable-512.png', publicDir)));
await sharp(svg).resize(180, 180).flatten({ background: '#377968' }).png().toFile(fileURLToPath(new URL('apple-touch-icon-180.png', publicDir)));
const png = await sharp(svg).resize(192, 192).png().toBuffer(), header = Buffer.alloc(22);
header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4); header[6] = 192; header[7] = 192; header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12); header.writeUInt32LE(png.length, 14); header.writeUInt32LE(22, 18);
await writeFile(new URL('tam-nang.ico', publicDir), Buffer.concat([header, png]));
console.log('Created 192, 512, maskable 512, apple-touch 180 and desktop ICO from public/icon.svg.');
