# Tam Năng

App quản lý cuộc sống bằng tiếng Việt, gồm Tổng quan, Thu chi, Năng lượng và Thời gian, cùng Thói quen và Cài đặt. React + TypeScript + Vite, Tailwind CSS, Zustand, Dexie/IndexedDB, Recharts, @dnd-kit và Vitest. Tông xanh ngọc dịu, giao diện sáng/tối, tối ưu cho điện thoại và máy tính. Bản 1.1.0 hoàn tất Phase 6; giữ tên **Tam Năng** theo lựa chọn ban đầu.

## Mở trên máy tính này

Nhấp đúp **Mo Tam Nang.cmd**. File này bật máy chủ cục bộ ở nền và mở trình duyệt tại **http://127.0.0.1:4173**. Bản build đã nằm trong `dist/`, chỉ cần Node.js để chạy, không cần mạng, không cần hosting. Máy chủ chỉ nhận kết nối trên máy này. Muốn xem dữ liệu đã nhập, luôn dùng cùng trình duyệt và đúng địa chỉ trên; `localhost` và `127.0.0.1` là hai nơi lưu khác nhau.

## Phát triển / build lại

Cần Node.js 22.18+ (khuyên dùng Node.js 24) và pnpm (hoặc npm). Cài thư viện lần đầu cần Internet. Cấu hình Vite được nạp bằng bộ đọc TypeScript tích hợp của Node.js.

```sh
pnpm install
pnpm dev
pnpm test
pnpm build
pnpm start
```

Nếu dùng npm: `npm install`, rồi thay `pnpm` bằng `npm run` ở các lệnh còn lại. Chỉ chạy một máy chủ trên cổng 4173 cùng lúc. Sau khi đổi code, dừng máy chủ cũ hoặc build lại rồi tải lại trang. `pnpm start` phục vụ bản build, `pnpm dev` phục vụ mã nguồn đang phát triển.

Nếu cần dừng bản chạy nền, mở Task Manager, tìm tiến trình Node.js có dòng lệnh `scripts/serve.mjs` trong thư mục Tam Năng và kết thúc đúng tiến trình đó. Nếu chạy trực tiếp `pnpm start` trong terminal, nhấn Ctrl+C.

## Cách dùng

- **Thêm khoản chi:** nhập số tiền VND, chọn danh mục, ghi chú tùy chọn, cảm xúc và thời gian; bấm lưu. Chạm khoản chi trong nhật ký để sửa hoặc xóa, có xác nhận khi xóa.
- **Khoản thu:** có khung riêng trên trang Chi tiêu, hiển thị tổng thu và danh sách theo tháng đang chọn. Chọn “Thêm khoản thu”, nhập số tiền, nguồn thu, thời gian đã nhận và ghi chú tùy chọn. Chạm từng dòng để sửa hoặc xóa (có xác nhận). Có tìm kiếm và lọc nguồn Lương, Thưởng, Kinh doanh, Đầu tư, Được tặng, Khác. “Chênh lệch thu chi” là tổng thu trừ tổng chi đã ghi trong tháng, không phải số dư tài khoản. Bộ lọc danh sách không làm thay đổi tổng thu toàn tháng. Khoản thu không tự tăng ngân sách chi tiêu.
- **Nhật ký:** chọn tháng, tìm theo ghi chú/tên danh mục, lọc danh mục. Khoản chi nhóm theo ngày, mới nhất trước. Biểu đồ và số liệu luôn tính trên toàn tháng đang chọn, không phụ thuộc bộ lọc nhật ký.
- **Ngân sách:** chọn “Chỉnh ngân sách”. Ban đầu chưa có mức nào. Để trống/0 để bỏ mức. Mức ngân sách áp dụng lặp lại cho mọi tháng, kể cả các tháng cũ; chưa lưu phiên bản ngân sách riêng cho từng tháng.
- **Số tiền còn lại:** chỉ tính danh mục có đặt ngân sách; chi ở danh mục chưa đặt mức không bị coi là vượt mức.
- **Cảnh báo:** từ 80% hiện cảnh báo trực quan; trên 100% hiển thị số tiền vượt. Chọn “Bật thông báo” và tự cấp quyền trong trình duyệt để nhận thông báo hệ thống khi **vượt 80%**. Mỗi danh mục tối đa một thông báo hệ thống/tháng trên trình duyệt này. Kiểm tra sau khi lưu giao dịch hoặc thay đổi ngân sách, chỉ cho tháng hiện tại. Chỉnh giao dịch tháng cũ không tạo thông báo hiện tại. Không có tác vụ nền trên mạng. Nếu trình duyệt hoặc hệ điều hành chặn thông báo, cảnh báo trong app vẫn hoạt động.
- **Cài đặt:** bấm bánh răng trên đầu trang để sao lưu/khôi phục, xem lưu trữ, cài/cập nhật PWA, bật/tắt tự tạo thói quen và chọn Sáng/Tối/Theo thiết bị. Nút đổi giao diện cũ vẫn chuyển lần lượt theo thiết bị → sáng → tối. Các lựa chọn được nhớ trong Dexie, có bản đệm giao diện trong localStorage.
- **Tổng quan** là trang mở đầu, kết nối năng lượng, công việc, timer và ngân sách từ dữ liệu đang lưu trên thiết bị.

## Tổng quan — Phase 4

- **Hôm nay:** check-in hợp lệ mới nhất trong ngày, hai điểm thể chất/tinh thần và thời gian đã trôi qua. Chưa có hoặc đã hơn 4 giờ sẽ nhắc check-in, mở lại đúng sheet sẵn có và chọn sẵn điểm lần gần nhất. Công việc tiếp theo là việc chưa xong có giờ bắt đầu từ hiện tại trở đi; nếu là việc Nặng và năng lượng chung ≤2 thì gợi ý cân nhắc việc nhẹ, không tự thay lịch. Timer dùng chung dữ liệu và đồng hồ với thanh mini.
- **Nhịp chi an toàn:** `max(0, ngân sách còn lại tháng) / số ngày còn lại`, tính cả hôm nay. Giữ quy tắc ngân sách hiện có: khoản chi thuộc danh mục chưa đặt mức không trừ vào phần ngân sách còn lại; thẻ ghi rõ khi có khoản chi ngoài mức. Tổng chi hôm nay vẫn gồm mọi danh mục. Chưa có ngân sách thì không giả thành nhịp 0; hết/vượt ngân sách thì nhịp bằng 0. Khoản thu không tự tăng ngân sách.
- **Công việc hôm nay:** hợp các việc được xếp hôm nay, hoàn thành hôm nay hoặc đang chạy, không đếm trùng. Phút tập trung được cắt theo ranh giới ngày địa phương từ từng phiên bấm giờ, gồm cả phiên đang chạy. Từ schema 4, dừng hoặc hoàn thành việc đang chạy sẽ lưu phiên và cộng `actualMin` trong cùng giao dịch. Tổng thực tế của việc cũ vẫn giữ nguyên, nhưng không tự gán số phút lịch sử không có thời điểm vào hôm nay. Xóa công việc cũng xóa các phiên của chính việc đó.
- **Tuần này:** tuần bắt đầu thứ Hai, so với cùng phần thời gian đã trôi qua của tuần trước (ví dụ đến thứ Tư 10:00 so với thứ Tư 10:00). Năng lượng tính trung bình từng ngày rồi trung bình ngày; ngày thiếu không tính là 0. Không có ghi chép kỳ trước thì hiển thị chưa có dữ liệu; mẫu số 0 không tạo Infinity/NaN.
- **Nhận xét:** tối đa 3 thẻ, ưu tiên độ rõ rồi ngày mới nhất, hòa chọn ID ổn định. “Dựa trên gì?” mở số mẫu, giai đoạn, số liệu gốc và cách tính. Bấm × ẩn cùng loại nhận xét trong đúng 168 giờ, lưu ID + thời điểm vào Dexie, kể cả khi số liệu thay đổi hoặc mở lại app. Thiếu dữ liệu sẽ nêu số bản ghi/ngày cần thêm; đủ mẫu nhưng chênh lệch nhỏ thì không cố tạo nhận xét.

Các hàm thuần ở `src/lib/insights.ts` nhận mốc `asOf` rõ ràng, không đọc đồng hồ hay DB. Dữ liệu ghép theo ngày lịch địa phương bằng helper có sẵn `localDateKey`/`parseLocalDate`; không parse ngày chỉ có YYYY-MM-DD theo UTC. So sánh liên hệ dùng 30 ngày lịch gần nhất, gồm hôm nay và bỏ tương lai; khung giờ vàng vẫn lấy 14 ngày. Ước tính thời gian dùng mọi việc hoàn thành có thực tế, kể cả bản ghi cũ không có ngày hoàn thành (được ghi rõ riêng).

| Nhận xét | Dữ liệu tối thiểu và cách đọc |
| --- | --- |
| Năng lượng & chi tiêu cảm xúc | 14 ngày có cả năng lượng và khoản chi; ít nhất 4 ngày năng lượng ≤2,5 và 4 ngày ≥3,5. So sánh trung bình tỷ trọng **số tiền** ngẫu hứng + giải tỏa trong tổng chi mỗi ngày; chỉ hiển thị khi lệch ≥5 điểm phần trăm. |
| Giấc ngủ & năng lượng ngày sau | 10 đêm khác ngày có check-in của ngày thức dậy, thuộc hai nhóm dưới 6 giờ và từ 7 giờ; cần có cả hai nhóm. Dùng lại `correlateSleepWithEnergy`, bỏ 6–<7 giờ. Hiển thị khi lệch ≥0,2/5. |
| Việc nặng trong giờ vàng | Ít nhất 3 việc Nặng hoàn thành có lịch và thực tế trong mỗi nhóm bắt đầu trong/ngoài giờ vàng. Dùng `findGoldenHours`, `goldenIntervals`, `estimateAccuracy`; so sánh tỷ lệ thực tế/ước tính khi lệch ≥10 điểm phần trăm. Tỷ lệ thấp không đồng nghĩa chất lượng cao hơn. |
| Nhịp ước tính thời gian | Ít nhất 8 việc hoàn thành có ước tính và thực tế hợp lệ; mỗi nhóm mức độ cũng cần 8 việc để tách riêng. Dùng `estimateAccuracy`; nhận diện lệch ≥10% so với tỷ lệ 1. Có thể nhận xét riêng từng mức khi tổng chung cân bằng. |
| Nhịp chi đến cuối tháng | Từ ngày 7 của tháng, có khoản chi và ngân sách. Dự phóng từng danh mục = đã chi / số ngày lịch đã qua × số ngày trong tháng. Chỉ nêu danh mục dự phóng **lớn hơn** mức đặt; cỡ mẫu là số ngày có ghi chi, tách rõ khỏi số ngày lịch đã qua. |

Mọi nhận xét đều dùng ngôn ngữ thận trọng và nêu số mẫu, không kết luận nguyên nhân. Độ rõ là quy tắc mô tả: cao khi ≥28 mẫu và độ lệch ≥35%; vừa khi ≥14 và ≥15%; còn lại là gợi ý ban đầu. So sánh hai nhóm dùng `2 × số mẫu nhóm nhỏ hơn` để tránh nhóm lớn làm tăng độ rõ giả; độ lệch dùng chênh lệch tỷ trọng/tỷ lệ, năng lượng chia cho thang 5. Đây không phải kiểm định hay mức tin cậy thống kê.

## Năng lượng — Phase 2

- **Check-in nhanh:** nút nổi mở bottom sheet với hai thang Thể chất/Tinh thần 1–5, emoji và nút chạm lớn. Chọn sẵn điểm của lần gần nhất (chưa có thì 3/5); có thể mở rồi lưu ngay. Nhãn tác động chọn nhiều, ghi chú tối đa 200 ký tự, đều không bắt buộc. Điểm cũ được nhớ, nhãn và ghi chú bắt đầu trống. Mỗi lần lưu tạo bản ghi mới với thời gian hiện tại; không giới hạn một bản ghi/ngày. Nhật ký và biểu đồ cập nhật từ Dexie.
- **Sửa check-in đã ghi:** tại “Những nhịp trong ngày”, chọn ngày rồi chạm bản ghi để sửa điểm, nhãn và ghi chú; hoặc bấm bút chì ở “Lần check-in gần nhất”. Chọn “Lưu thay đổi” để cập nhật đúng bản ghi, giữ nguyên ID/thời điểm ban đầu, không tạo thêm check-in. Đóng sheet mà không lưu sẽ giữ dữ liệu cũ. Có thể tìm ngày cũ ngoài cửa sổ biểu đồ 28 ngày; biểu đồ vẫn giữ phạm vi tính hiện tại.
- **Giấc ngủ:** nhập ngày thức dậy và giờ ngủ/giờ dậy. `23:30 → 07:15` là 7 giờ 45 phút, tính từ tối hôm trước. Mỗi ngày thức dậy có một giấc ngủ chính; lưu lại cùng ngày cập nhật bản ghi đã có. Thẻ trên đầu tab hiển thị giấc ngủ gắn với ngày hôm nay. Hai giờ giống nhau tính là 0 và không cho lưu, không tự suy diễn thành 24 giờ.
- **Hôm nay:** hai đường thể chất/tinh thần theo thời điểm check-in, có thể nhiều điểm trong một giờ. **Theo giờ:** 24 giờ từ 0–23, trung bình trong 14 ngày gần nhất. **Theo tuần:** trung bình theo thứ Hai → Chủ nhật trong 4 tuần/28 ngày gần nhất. Giờ/thứ chưa có dữ liệu là `null`, không giả thành điểm 0.
- **Khung giờ vàng:** cần tối thiểu 5 check-in hợp lệ trong 14 ngày và có dữ liệu ở đủ 3 giờ liền nhau. Điểm chung là `(physical + mental) / 2`; chọn cửa sổ có trung bình của 3 điểm trung bình theo giờ cao nhất. Các giờ tính ngang nhau; hòa điểm chọn giờ bắt đầu sớm hơn. Có thể nối qua nửa đêm. `startHour` bao gồm, `endHour` loại trừ: `9 → 12` nghĩa là 09:00–11:59; `23 → 2` kết thúc vào ngày tiếp theo.
- **Giấc ngủ & năng lượng:** ghép `SleepLog.date` với check-in của chính ngày thức dậy đó. So sánh ngủ dưới 6 giờ với từ 7 giờ; bỏ nhóm 6–<7 giờ. Tính trung bình mỗi ngày trước rồi trung bình các ngày, để một ngày check-in nhiều lần không lấn át ngày khác. Hiển thị số ngày có dữ liệu cho mỗi nhóm; thiếu dữ liệu để trống.

Các hàm thuần có kiểu và export ở `src/lib/energy.ts`: `averageByHour`, `findGoldenHours`, `averageByWeekday`, `sleepDuration`, `correlateSleepWithEnergy`. Hai hàm trung bình nhận thêm mốc `asOf` tùy chọn; mặc định là thời điểm log hợp lệ mới nhất để kết quả thuần và tái lập được. UI luôn truyền thời gian hiện tại. Cửa sổ theo ngày lịch địa phương, gồm ngày hiện tại, loại check-in tương lai. Date-only được đọc bằng năm/tháng/ngày địa phương, không dùng `new Date('YYYY-MM-DD')` theo UTC. `sleepDuration` trả số giờ theo đồng hồ, `null` khi giờ không hợp lệ; chỉ có hai giờ nên không suy diễn thời lượng thực qua đổi giờ mùa.

### Dữ liệu mẫu chỉ cho phát triển

Chạy `pnpm dev`, mở Tổng quan, Năng lượng hoặc Thời gian → Công việc rồi chọn **Nạp dữ liệu mẫu (30 ngày)**. Sinh check-in cao hơn buổi sáng, giảm sau trưa, giấc ngủ đa dạng, 40 công việc (gồm 28 việc lịch sử cho nhận xét), tối đa 90 khoản chi và 3 danh mục ghi rõ “(mẫu)” với ngân sách riêng. Có thêm 4 thói quen mẫu: vận động sáng hằng ngày, làm việc sâu T2–T6, nhìn lại tuần vào Chủ nhật, hóa đơn ngày 1 và cuối tháng. Các thói quen mẫu chưa tự tạo Task ngay khi bấm seed; xem trước xếp lịch hoặc mở lại app khi cài đặt tự tạo đang bật. Tỷ trọng chi cảm xúc cao hơn ở ngày năng lượng thấp; thời gian việc nặng khác nhau trong/ngoài giờ vàng. Dữ liệu mẫu tạo được ít nhất 3 nhận xét ngay cả đầu tháng, thường đủ cả 5 từ ngày 7. ID cố định theo ngày/giờ; nạp lại không tạo trùng, không thay dữ liệu đã nhập hoặc thói quen đã tùy chỉnh. Công việc mẫu gặp lịch thật bị trùng sẽ gỡ lịch mẫu; việc đã xong giữ trạng thái hoàn thành. Nút và mã nạp mẫu được loại khỏi production; không tự nạp dữ liệu vào app đang sử dụng.

## Thời gian — Phase 3

- **Công việc:** nút nổi “Thêm công việc” mở bottom sheet; nhập tên, ước tính (15/30/60/90/120 phút hoặc tự nhập 1–1.440 phút), mức Nhẹ/Vừa/Nặng và hạn chót tùy chọn. Chưa xếp lịch sắp theo hạn chót tăng dần, rồi Nặng → Vừa → Nhẹ. Có sửa, xóa sau xác nhận, hoàn thành và bắt đầu/dừng timer. Nhóm đã xếp hiển thị ngày đang chọn; nhóm hoàn thành gồm tất cả các ngày.
- **Lịch ngày:** chọn ngày bằng nút trước/sau hoặc bộ chọn ngày; timeline dọc 06:00–23:00, khối theo thời lượng ước tính và màu mức độ. Giờ vàng tính từ check-in 14 ngày gần nhất, có nhãn và dải nền nhẹ; thiếu dữ liệu thì ẩn dải. Chọn tên việc chưa xếp rồi chạm vào ô lịch, dùng “Chọn giờ”, hoặc kéo bằng tay nắm. @dnd-kit có chuột, cảm ứng (giữ 250ms rồi kéo), bàn phím và tự cuộn. Các giờ được snap về mốc 15 phút gần nhất. Mỗi việc phải nằm trọn trong ngày và kết thúc trước/đúng hạn chót; trùng lịch sẽ báo lỗi và không lưu. Hai khối thủ công được phép tiếp giáp nhau.
- **Gợi ý xếp lịch:** dành cho hôm nay, chỉ dùng khung giờ từ hiện tại trở đi. Ưu tiên việc Nặng rồi Vừa rồi Nhẹ; hạn sớm đi trước trong cùng mức độ. Ưu tiên Nặng/Vừa trong giờ vàng, việc Nhẹ ngoài khung ưu tiên. Chưa có giờ vàng dùng buổi sáng 08:00–12:00 và thông báo rõ. Việc dài hơn giờ vàng có thể kéo dài ra ngoài nếu vừa lịch và hạn chót. Chừa tối thiểu 10 phút giữa mọi việc; do snap 15 phút, khoảng đệm thực có thể dài hơn. Việc hết hạn, quá dài hay không còn chỗ được liệt kê kèm lý do. Đây là gợi ý tham lam, không bảo đảm xếp được tối đa số việc. Chỉ lưu khi bấm **Xác nhận lưu lịch**; khi xác nhận kiểm tra lại dữ liệu mới nhất trong một giao dịch, nếu xung đột thì hủy toàn bộ. Việc đang bấm giờ không được tự xếp bằng gợi ý.
- **Timer:** chỉ một việc chạy cùng lúc, được kiểm soát bằng giao dịch IndexedDB kể cả hai cửa sổ. `startedAt` là timestamp lưu trong Dexie, không cộng dồn theo số lần tick; đóng tab/mở lại vẫn tính đúng. Dừng sẽ cộng phút đã trôi qua vào `actualMin`, giữ phần lẻ của phiên ngắn. Hoàn thành tự dừng và lưu `doneAt`. Việc chưa từng bấm giờ giữ thực tế ở trạng thái “chưa ghi”. Thanh mini tồn tại trên mọi tab trong khi chạy, có nút dừng. Phải dừng việc đang chạy trước khi bắt đầu việc khác. Xóa việc đang chạy cũng gỡ bộ đếm của việc đó.
- **Thực tế / ước tính:** trung bình `actualMin / estimateMin` của các việc hoàn thành có dữ liệu hợp lệ; 150% nghĩa là thực tế bằng 1,5 lần ước tính. Bỏ việc chưa ghi thực tế hoặc ước tính không hợp lệ, vẫn tính giá trị thực tế 0 nếu đã có bản ghi.

`src/lib/schedule.ts` chứa các hàm thuần có kiểu: `detectOverlap` (khoảng nửa mở, không tự trùng khi di chuyển cùng việc), `suggestSchedule`, `elapsedMinutes`, `estimateAccuracy` cùng helper ngày/giờ địa phương. Không có truy cập UI, đồng hồ hệ thống hay DB trong các hàm tính lịch. Các thao tác lưu/xếp lịch/timer nằm ở `src/lib/taskActions.ts`.

## Thói quen lặp lại

- Trong **Thời gian**, chuyển **Công việc / Thói quen**; không thêm tab chính. Thêm thói quen với tên, ước tính, mức độ, giờ bắt đầu, ngày bắt đầu/kết thúc và lịch hằng ngày, nhiều thứ trong tuần hoặc nhiều ngày trong tháng. Có tóm tắt trực tiếp, bật/tạm dừng, sửa và xóa. “Lưu thành thói quen” trong sheet sửa Task điền sẵn nội dung đang nhập mà không đổi Task nguồn.
- **Hạn chót** không bắt buộc: không có, cùng ngày lúc HH:mm, hoặc cuối ngày sau N ngày (N=0 là cuối ngày xảy ra). Mỗi Task nhận timestamp hạn chót thật, dùng lại cách hiển thị của Task. Ngày/giờ đều theo lịch địa phương, không cắt ngày bằng ISO/UTC. Nếu giờ định sẵn đã qua trong hôm nay, lần đó vẫn thuộc hôm nay; tuyệt đối không tạo cho ngày trước hôm nay.
- **Xếp lịch tuần này / tháng này / khoảng ngày** cho mọi thói quen đang bật, hoặc chỉ một thói quen. Luôn xem trước số Task, số ngày, đầy đủ danh sách ngày bị ảnh hưởng và cách xử lý; chỉ ghi khi xác nhận. Lúc lưu đọc lại dữ liệu trong một giao dịch: nếu lịch hoặc thói quen thay đổi thì không ghi một phần và yêu cầu xem trước lại.
- **Xung đột:** mặc định bỏ lần bị trùng; hoặc dời đến khung trống gần nhất trong cùng ngày, theo mốc 15 phút và đệm tối thiểu 10 phút (hòa khoảng cách chọn giờ sớm hơn, hết chỗ thì bỏ); hoặc vẫn tạo nhưng ở Chưa xếp lịch. Không xếp trước 06:00, kết thúc sau 23:00, sau hạn chót hay chồng Task khác. Danh sách và timeline dùng lại Task/component/timer thường; biểu tượng lặp chỉ được thêm vào, không thay hạn chót, mức độ hay thời lượng. Ô timeline nhỏ có chi tiết khi rê chuột/focus và trong sheet khi chạm; giữ nguyên kích thước khối theo ước tính.
- **Ngày trong tháng:** ngày 29/30/31 không tồn tại thì bỏ riêng tháng đó, không đẩy sang tháng sau. “Ngày cuối tháng” luôn là ngày cuối thật, gồm 29/02 năm nhuận. Chọn đồng thời 31 và cuối tháng không tạo hai Task vào cùng ngày.
- **Sửa một lần / cả chuỗi:** sửa riêng giữ Task độc lập; khóa nguồn `routineId + occurrenceDate` vẫn được giữ cùng cờ tùy chọn `routineDetached`, nên không sinh trùng và không bị lần sửa chuỗi sau ghi đè. Sửa chuỗi cập nhật các lần tương lai còn gắn chuỗi, chưa bắt đầu, chưa xong, chưa có `actualMin`; kể cả thời gian đã ghi bằng 0 cũng được bảo vệ. Lần không còn thuộc quy tắc mới được gỡ; lần xung đột được giữ ở Chưa xếp lịch và báo số lượng. Không tự tạo bù ngày mới trong thao tác sửa; dùng xem trước hoặc lần mở app kế tiếp.
- **Xóa một Task lặp:** “Chỉ ngày này” ghi `skippedDates`, không tạo lại. “Từ nay về sau” kết thúc chuỗi vào ngày trước **ngày của lần được chọn**, chỉ gỡ các lần tương lai chưa làm. Xóa thói quen có lựa chọn giữ mọi Task hoặc gỡ thêm lần tương lai chưa làm. Hoàn thành/đang bấm giờ/đã ghi thực tế/tách riêng luôn được giữ trong thao tác chuỗi. Tạm dừng chỉ ngừng tạo thêm, không tự xóa Task đã có. Task đã tách riêng vẫn dùng được các nút Task thông thường; nếu xóa riêng thì cũng ghi ngày bỏ qua.
- **Tự tạo cho 7 ngày tới khi mở app:** mặc định bật, lưu trong Dexie `settings`; công tắc nay ở **Cài đặt → Thói quen**, có đường dẫn từ màn Thói quen. Tính cả hôm nay, dùng đúng bộ sinh và chính sách bỏ trùng; chỉ thông báo số đã tạo khi lớn hơn 0. Không có tác vụ nền hoặc máy chủ Internet. Tắt/bật áp dụng ở lần mở app tiếp theo. Khóa compound duy nhất và giao dịch đảm bảo hai cửa sổ mở đồng thời không tạo trùng. Tổng quan đếm thêm thói quen đã xong / đã xếp hôm nay theo ngày xếp lịch thực tế; insights tiếp tục dùng các Task này như Task thủ công.

Hàm thuần ở `src/lib/routines.ts`: `occurrencesInRange`, `buildInstances` (không ID), `resolveConflicts` (một ngày, hai biên là timestamp như `suggestSchedule`), `describeRecurrence`. `buildRoutinePlan` phối hợp nhiều thói quen/ngày; helper ngày dùng lại `localDateKey`, `parseLocalDate`, `localTimeOnDate`; kiểm tra trùng/đệm dùng lại utilities lịch. Thao tác Dexie ở `src/lib/routineActions.ts`; các chữ ký hàm lịch và thao tác Task đã có giữ nguyên.

## PWA và dữ liệu

Bản build có manifest tiếng Việt, chế độ standalone, icon và service worker precache toàn bộ giao diện/chunk, không dùng CDN/phông chữ bên ngoài. Sau lần tải production thành công và service worker sẵn sàng, có thể mở lại và dùng các chức năng ngoại tuyến. Chưa từng mở app thì vẫn cần máy chủ cục bộ hoặc địa chỉ HTTPS để tải lần đầu. Service worker chỉ được tạo trong bản build, không phải chế độ dev.

**Máy tính:** tiếp tục dùng shortcut **Tam Nang** trên Desktop hoặc `Mo Tam Nang.cmd`. Chrome/Edge có thể cài PWA từ menu trình duyệt hoặc **Cài đặt → Cài đặt ứng dụng** khi trình duyệt phát tín hiệu cài đặt. App đã cài sẽ ẩn nút này. PWA vẫn dùng công nghệ trình duyệt và lưu dữ liệu tại cùng origin/profile; việc cài không tạo máy chủ hay đồng bộ với điện thoại.

**Android:** mở địa chỉ HTTPS trong Chrome, chọn Cài đặt ứng dụng trong app hoặc menu trình duyệt → Cài ứng dụng/Thêm vào màn hình chính. **iPhone/iPad:** mở bằng Safari → Chia sẻ → Thêm vào Màn hình chính → Thêm. App hiện thẻ hướng dẫn riêng trên iOS Safari. Dữ liệu giữa Safari và app đã cài có thể được lưu riêng tùy phiên bản/cách cài: xuất bản sao lưu trước, kiểm tra rồi nhập vào app sau khi cài. Không xóa bản cũ trước khi kiểm tra file và dữ liệu đã khôi phục.

**Cập nhật:** `registerType: 'prompt'`, không tự tải lại. Thông báo “Có phiên bản mới” chỉ hiện khi không chạy timer, không mở bottom sheet và không đang xử lý dữ liệu. Bấm **Cập nhật** mới chuyển bản. Cài đặt có nút kiểm tra phiên bản; nút áp dụng bị khóa khi timer đang chạy, và bước cuối kiểm tra lại trạng thái trong DB cùng các dialog đang mở. Khi một cửa sổ khác kích hoạt worker mới, cửa sổ này cũng không tự reload. Dữ liệu Dexie giữ nguyên qua cập nhật. Bản service worker cũ trước Phase 6 có thể hoàn tất cơ chế cập nhật cũ một lần; từ Phase 6 dùng luồng xác nhận này.

**Icon:** nguồn duy nhất `public/icon.svg`; các file đã tạo sẵn là `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon-180.png` và `tam-nang.ico` cho Windows. Đổi SVG rồi cài Sharp khi cần tái tạo (`pnpm add -D sharp`), chạy `pnpm icons` và build lại. Maskable/apple có nền đặc và vùng an toàn quanh biểu tượng. Script cũng nhận đường dẫn thư viện Sharp qua `TAM_NANG_SHARP_PATH`; không cần Sharp khi chỉ chạy app hoặc build từ icon có sẵn.

Toàn bộ dữ liệu nằm ở IndexedDB trong trình duyệt, tên `tam-nang`, schema 5, gồm 10 bảng: `energyLogs`, `sleepLogs`, `tasks`, `expenses`, `categories`, `incomes`, `insightDismissals`, `focusSessions`, `routines`, `settings`. Schema 2 thêm `incomes`; schema 3 thêm index `startedAt`, `doneAt` cho tasks và chuẩn hóa sentinel null của hai trường mới; schema 4 thêm hai bảng ẩn nhận xét và phiên tập trung. Schema 5 thêm routines/settings và index duy nhất `[routineId+occurrenceDate]`; các trường Task mới đều tùy chọn, migration 4→5 không sửa bất kỳ Task cũ nào. Phase 6 dùng thêm các key trong bảng settings đã có nên **không tăng schema**, không sửa Task hay các hàm nghiệp vụ cũ. Không tài khoản, không phân tích sử dụng, không đồng bộ, không gửi giao dịch lên máy chủ. Chỉ có giao diện tĩnh được tải từ địa chỉ app.

### Sao lưu và khôi phục

**Xuất dữ liệu** chụp nhất quán mọi bảng qua `db.tables` trong giao dịch chỉ đọc; kể cả khoản thu, phiên tập trung, timer đang chạy, thói quen, ngày bỏ qua, nhận xét đã ẩn và cài đặt. Tên file dùng ngày/giờ địa phương: `tam-nang-backup-YYYY-MM-DD-HHmm.json`. Trên thiết bị di động, thử chia sẻ file qua Web Share để lưu vào Tệp/Drive, nếu không hỗ trợ thì tải xuống. Hủy hộp chia sẻ không chuyển sang tải và không đổi `lastBackupAt`. Mốc sao lưu chỉ ghi sau khi trình duyệt nhận lệnh tải/chia sẻ thành công; trình duyệt không xác nhận được file cuối cùng đã nằm trên đĩa, vì vậy hãy kiểm tra nơi đã chọn lưu. File JSON không mã hóa, do người dùng tự giữ.

```json
{
  "app": "tam-nang",
  "schemaVersion": 5,
  "exportedAt": "2026-11-16T02:00:00.000Z",
  "counts": { "energyLogs": 0, "tasks": 0 },
  "data": { "energyLogs": [], "tasks": [] }
}
```

Ví dụ rút gọn trên chỉ minh họa định dạng; file thật phải có đủ 10 bảng và counts tương ứng, kể cả bảng rỗng. JSON giữ mọi trường có dữ liệu; các thuộc tính JavaScript có giá trị `undefined` được bỏ theo chuẩn JSON.

**Nhập dữ liệu** đọc và kiểm tra toàn file trước khi ghi: app/version, bảng/counts/ID, kiểu từng trường, ngày/giờ, số tiền, thang năng lượng, quy tắc lặp và cài đặt. Báo lỗi theo bảng + dòng, không sửa dữ liệu. Bản xem trước hiển thị thời điểm xuất, số bản ghi trong file/trên máy và cảnh báo. Bắt buộc tự chọn một chế độ, ban đầu không chọn sẵn:

- **Thay thế toàn bộ:** dùng dữ liệu file thay dữ liệu hiện có trong tất cả bảng.
- **Gộp:** thêm ID mới. ID trùng chỉ thay khi **cả hai** có mốc so sánh hợp lệ và bản nhập mới hơn: ưu tiên `updatedAt`, nếu thiếu dùng `timestamp`. Bằng nhau hoặc thiếu mốc thì giữ bản trên máy; không dùng `createdAt`, ngày ngủ hoặc ngày xảy ra làm thời điểm chỉnh sửa. Task cũ không có `updatedAt` vì vậy được giữ khi trùng ID. Gộp không tự sửa lịch chồng giờ.

Trước cả hai chế độ, app xuất thêm một file chứa dữ liệu hiện tại, trừ khi mọi bảng đều rỗng; hủy chia sẻ sẽ hủy nhập. Bước ghi nằm trong **một giao dịch** bao phủ mọi bảng; lỗi ghi giữa chừng rollback toàn bộ. Nếu dữ liệu ở cửa sổ khác thay đổi trong lúc lưu file, không ghi và yêu cầu xem trước/sao lưu lại. Mốc của file an toàn đã xuất thành công có thể được giữ kể cả khi nhập sau đó thất bại. Khóa thói quen `[routineId+occurrenceDate]` luôn chỉ giữ một Task; chế độ gộp ưu tiên lần đã có trên máy, báo số bản trùng bị bỏ. Nếu gộp gây hai timer đang chạy thì từ chối, yêu cầu dừng timer hoặc kiểm tra file. Bộ đếm được khôi phục tiếp tục tính từ `startedAt` gốc, gồm cả thời gian app đóng. Sau nhập, Zustand lấy lại theme/dấu thông báo từ DB, các truy vấn cập nhật ngay, không reload trang.

**Xóa toàn bộ dữ liệu** có hai bước, mặc định đề nghị xuất trước, bước cuối phải nhập `XÓA`. Xóa trong một giao dịch rồi khôi phục 7 danh mục ban đầu và các lựa chọn mặc định; không tự đưa dữ liệu mẫu vào. Cần file sao lưu để lấy lại dữ liệu đã xóa.

**Chính sách version/migration:** `schemaVersion` luôn bằng Dexie `db.verno`, khác với version ứng dụng trong package.json. Mỗi lần tăng Dexie version phải thêm bước nâng cấp DB, bước chuyển file trong `src/lib/backup.ts`, danh sách bảng lịch sử và validator cho bảng/trường mới, kèm tests bảo toàn dữ liệu. File mới hơn app bị từ chối bằng tiếng Việt. Chuỗi file cũ hiện có: 1→2 thêm incomes rỗng; 2→3 chuẩn hóa Task startedAt/doneAt null thành không có trường; 3→4 thêm insightDismissals/focusSessions rỗng; 4→5 thêm routines/settings rỗng. Chuyển đổi trên bản sao trong bộ nhớ trước khi nhập, không tự bịa lịch sử. Xuất tự nhận bảng tương lai qua `db.tables`; nhập chỉ nhận bảng có validator và migration tương ứng.

### Lưu trữ, nhắc sao lưu và phục hồi lỗi

Lần đầu mở app thử `navigator.storage.persist()` và lưu kết quả; Cài đặt hiển thị trạng thái hiện tại cùng usage/quota ước tính khi API hỗ trợ. Quyền này do trình duyệt quyết định và không mang theo từ file sao lưu; khi mở Cài đặt kiểm tra lại quyền thực tế trên thiết bị. Nếu không được cấp, có thể thử lại và app vẫn dùng được. Quyền bảo vệ không ngăn người dùng tự xóa dữ liệu trang web, không thay file sao lưu. Trình duyệt riêng tư không phù hợp để lưu lâu dài.

Tổng quan nhắc khi chưa có sao lưu hoặc đã **hơn 14 × 24 giờ**; ẩn nhắc trong 3 ngày khi bấm đóng. Theme, dấu đã thông báo, cài đặt thói quen, lastBackupAt và thời điểm ẩn nhắc có trong backup. Biên ngày đặt tên file vẫn theo giờ địa phương.

Lỗi mở/nâng cấp DB, cửa sổ khác chặn nâng cấp hoặc hết quota có thông báo tiếng Việt. Error boundary cho phép thử lại và **Xuất dữ liệu**; nếu mở DB thông thường lỗi, đường cứu dữ liệu thử mở schema đang có mà không yêu cầu nâng cấp. Chỉ xuất được khi trình duyệt còn cho phép đọc DB, không cam kết cứu được khi quyền lưu trữ bị chặn hoàn toàn. Không tự xóa DB để chữa lỗi. Timer luôn tính từ timestamp trong Dexie, cập nhật khi focus/visibility/pageshow và sau khi máy ngủ.

### Build và triển khai tùy chọn

Dùng tại máy tính này không cần hosting. Muốn mở độc lập trên điện thoại hoặc nhiều thiết bị: triển khai thư mục **dist** lên **một địa chỉ HTTPS cố định**; dữ liệu vẫn chỉ nằm trên từng thiết bị, muốn chuyển thì xuất/nhập. `127.0.0.1` trên điện thoại là chính điện thoại, không phải máy tính này.

Vercel/Netlify/Cloudflare Pages: import repo, framework Vite, install `pnpm install --frozen-lockfile`, build `pnpm build`, output `dist`; chọn Node 24 hoặc ít nhất 22.18. Vercel/Netlify dùng project root là thư mục chứa package.json; Cloudflare Pages đặt tương tự Build command/Build output directory. Phục vụ ở root `/` như manifest/scope hiện tại, không đặt dưới thư mục con nếu chưa chỉnh cấu hình. HTTPS cần cho PWA/service worker/Web Share/lưu trữ bền; loopback `http://127.0.0.1` được trình duyệt coi là nguồn tin cậy để dùng trên máy này. Đổi domain/protocol/port hoặc profile sẽ tạo vùng lưu riêng: xuất trước khi chuyển. Không triển khai tự động trong Phase 6.

Hướng dẫn chính thức: [Vite static deploy](https://vite.dev/guide/static-deploy), [React PWA prompt](https://vite-pwa-org.netlify.app/frameworks/react.html), [StorageManager](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager).

### Kích thước production và khả năng truy cập

Bản 1.1.0 (Vite báo KB thập phân, gzip ước tính): entry **72,27 KB / 24,18 KB gzip**, React/framework **227,41 / 70,70 KB**, storage **101,06 / 33,11 KB**, CSS **90,27 / 17,13 KB**. Recharts **276,90 / 70,21 KB** và gói phụ thuộc dùng chung với màn Thời gian **135,79 / 46,07 KB** tải sau. Chunk theo màn: Tổng quan 28,59 / 9,75 KB, Năng lượng 19,93 / 6,70 KB, Chi tiêu 38,29 / 11,05 KB, Thời gian 92,73 / 28,16 KB, Cài đặt 18,50 / 6,14 KB. Các màn tải bằng React.lazy/Suspense; HTML/entry và các import tĩnh của Tổng quan không import/preload Recharts. React tách riêng để helper React DOM dùng chung không kéo cả thư viện biểu đồ vào entry. Service worker vẫn tải trước các chunk để mọi màn dùng được ngoại tuyến: giảm JS thực thi ban đầu, không giảm tổng dung lượng precache (~1,11 MiB / 34 mục).

Nút biểu tượng có tên đọc được, bottom sheet giữ focus Tab/Shift+Tab và trả focus khi đóng, hỗ trợ Escape như trước. Nút thao tác có vùng chạm tối thiểu 44px; ô 15 phút/tay nắm trong khối timeline giữ tỷ lệ thời lượng hiện có, có nút Chọn giờ/Đổi giờ lớn để thao tác tương đương. Thanh tab/timer giữ safe-area-bottom. Tăng tương phản chữ phụ/cảnh báo và chữ huy hiệu trong theme sáng, giữ nội dung và nhóm màu Nhẹ/Vừa/Nặng; theme tối giữ cùng phong cách.

## Kiểm thử

`pnpm test`: kiểm thử thu chi, năng lượng, migration, lịch, timer và seed, cùng mọi hàm nhận xét/Tổng quan. Bao gồm dưới/đúng ngưỡng mẫu, dữ liệu rỗng/đồng nhất/hòa, ngày địa phương quanh nửa đêm/đổi tháng, mẫu số 0, nhịp chi ngày cuối tháng 28/29/30/31 ngày, cắt phiên tập trung qua nửa đêm và hết hạn ẩn đúng 7 ngày. Có kiểm tra dữ liệu mẫu tạo ≥3 nhận xét. Các hàm mới được kiểm tra với `TZ=Asia/Bangkok` và `TZ=America/New_York`. `pnpm build` kiểm tra TypeScript rồi build production/PWA.

Thói quen có kiểm thử ngày/tháng/năm nhuận 2028, lệch múi giờ (`TZ=Asia/Ho_Chi_Minh`, `TZ=America/Los_Angeles`), ba chính sách xung đột, hạn chót, hết chỗ, sinh lặp/đồng thời, xác nhận bản xem trước đã cũ, sửa riêng/chuỗi, bảo vệ lịch sử, skippedDates, migration giữ nguyên Task cũ, metric Tổng quan và seed 4 thói quen. Thêm kiểm thử render React phía máy chủ cho Task thủ công và Task từ thói quen qua cùng danh sách, sheet, timeline và bản gợi ý: hạn chót, màu/nhãn mức độ, ước tính, thực tế và các nút cũ còn nguyên. Các bài kiểm thử sắp xếp, trùng lịch, `suggestSchedule`, timer và insights cũ không chỉnh sửa. Chỉ cập nhật hai kỳ vọng schema trong `db.test.ts` (8→10 bảng và version 4→5), vì thêm bảng/version là thay đổi được yêu cầu; các kiểm tra bảo toàn dữ liệu ở đó vẫn giữ nguyên.

Phase 6 giữ nguyên **mọi file test cũ**. Tests mới kiểm tra roundtrip mọi bảng bằng fake-indexeddb, table list động, validation từng model và dòng lỗi, file sai/app mới, migration 1→5, gộp theo mốc thời gian, trùng compound, lỗi ghi thật giữa transaction và rollback, nhiều timer, thay đổi đồng thời, safety export/hủy chia sẻ/fallback tải xuống/mốc sao lưu, reset, nhắc 13/14/15 ngày, cổng an toàn cập nhật và quyền/quota lưu trữ. Full suite: **253/253 passed**; 46 bài mới về an toàn dữ liệu cũng qua dưới `TZ=America/Los_Angeles`. TypeScript và build production qua; bundle không có seed. Đối chiếu hash với trước Phase 6 xác nhận 25 file kiểm thử/nghiệp vụ/component Task được bảo vệ không thay đổi.

### Checklist QA thủ công

Thực hiện với profile/địa chỉ thử riêng và dữ liệu mẫu, không thử xóa trên dữ liệu thật chưa sao lưu.

- [ ] Desktop: shortcut mở đúng `127.0.0.1:4173`; đủ bốn tab và bánh răng, không tạo tab mới; các tính năng cũ vẫn dùng được.
- [ ] Xuất file đủ 10 bảng, có khoản thu/timer/thói quen/phiên tập trung; tên file đúng giờ địa phương. Kiểm tra file đã tải xong.
- [ ] Nhập file sai app/mới version/JSON hỏng: báo lỗi, dữ liệu không đổi. Bản đúng có preview counts và bắt buộc chọn Gộp/Thay thế.
- [ ] Mỗi lần nhập xuất file an toàn trước; hủy chia sẻ thì dừng nhập; restore theme/cài đặt cập nhật ngay, không reload. Gộp lại không nhân đôi Task thói quen.
- [ ] Xóa: hai bước, chưa nhập `XÓA` thì nút khóa, có tùy chọn xuất trước; đóng sheet không xóa. Chỉ thử xóa thật khi có backup để khôi phục.
- [ ] Storage: quyền được cấp/từ chối/không hỗ trợ có lời giải thích; usage/quota khi có. Nhắc backup biến mất 3 ngày khi đóng.
- [ ] Timer: bắt đầu, tải lại, đóng/mở tab, đưa app nền hoặc cho máy ngủ rồi quay lại; thời gian tính từ mốc ban đầu, dừng cộng vào thực tế.
- [ ] PWA update: mở bản A, build/deploy bản B; kiểm tra phiên bản mới khi timer đang chạy hoặc sheet mở: không reload; dừng/đóng rồi bấm Cập nhật mới đổi bản. Dữ liệu vẫn giữ.
- [ ] Offline: sau khi service worker sẵn sàng, ngắt máy chủ thử hoặc tắt mạng; tải lại, mở cả bốn tab/Cài đặt và thêm/sửa dữ liệu, backup JSON vẫn dùng được.
- [ ] Theme sáng/tối/theo thiết bị; màn nhỏ 390px, không tràn ngang, nút dễ chạm, Tab/Shift+Tab không ra khỏi sheet, Escape đóng và focus quay lại; tab/timer không che vùng an toàn.
- [ ] Android thật: cài/khởi chạy standalone, xoay màn hình, tắt mạng, chia sẻ file → Files/Drive, hủy chia sẻ và nhập lại.
- [ ] iOS/iPadOS thật: thấy hướng dẫn Safari, cài màn hình chính, xuất/nhập giữa Safari và app, kiểm tra riêng vùng lưu và Web Share, safe-area trên máy có tai thỏ.

Kiểm tra desktop trình duyệt đã làm trên địa chỉ QA tách riêng: export/replace/merge và bỏ 1 lần thói quen trùng, file sai app, focus trap, bảo vệ hai bước xóa, timer qua reload, cập nhật hai bản có chặn timer/sheet. Tắt hẳn máy chủ QA rồi reload, mở biểu đồ Năng lượng/Chi tiêu, sửa check-in, xem Task và xuất lại đủ bảng thành công; khoản thu và phút timer còn nguyên. Màn 390×844 không tràn ngang; các nút Cài đặt đều ≥44px và có nhãn. Các cặp chữ phụ/nút chính/cảnh báo kiểm tra trong hai theme đều có tương phản ≥5,13:1. Android/iOS thiết bị thật vẫn cần làm theo checklist, không suy diễn từ giả lập kích thước màn hình.

Tài liệu triển khai: [Vite](https://vite.dev/guide/), [Tailwind + Vite](https://tailwindcss.com/docs/installation/using-vite), [Dexie + React](https://dexie.org/docs/Tutorial/React), [Vite PWA](https://vite-pwa-org.netlify.app/guide/).

Kéo thả và migration: [@dnd-kit Touch sensor](https://dndkit.com/legacy/api-documentation/sensors/touch/), [useDroppable](https://dndkit.com/legacy/api-documentation/droppable/), [Dexie Version.upgrade](https://dexie.org/docs/Version/Version.upgrade()).
