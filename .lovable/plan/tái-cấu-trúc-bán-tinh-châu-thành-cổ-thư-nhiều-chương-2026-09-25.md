# Tái cấu trúc Bán Tinh Châu thành cổ thư nhiều chương

## Mục tiêu
Chuyển trang cuộn dài hiện tại thành một trang chủ cô đọng và sáu trang con độc lập, cùng dùng hệ điều hướng như mục lục cổ thư.

## Phạm vi thực hiện
- Tạo khung trang dùng chung theo hướng **Celestial Archive Spread**: cột mục lục bên trái, vùng nội dung lớn bên phải, chữ Hán dọc mờ, phù văn và con dấu son nhỏ.
- Giữ bảng màu Nguyệt Sương `#090C12`, `#172434`, `#81929D`, `#D8D0BD`; chỉ bổ sung son đỏ rất tiết chế.
- Dùng Lora cho tiêu đề và Nunito Sans cho nội dung để hiển thị tiếng Việt đầy đủ.
- Rút gọn trang chủ thành bìa cổ thư, lời dẫn và các lối vào chương.
- Tạo các trang con: **Thiên hạ**, **Thế lực**, **Nhân vật**, **Địa đồ**, **Biên niên**; mục Trang chủ luôn có trong menu.
- Phân bổ lại toàn bộ nội dung hiện có vào đúng trang; giữ tương tác chọn vùng, mở hồ sơ nhân vật và điểm địa danh.
- Thêm tiêu đề và mô tả chia sẻ riêng cho từng trang.
- Thiết kế menu thu gọn cho màn hình nhỏ, đảm bảo chuyển trang hoạt động đầy đủ.

## Chi tiết kỹ thuật
- Dùng route riêng cho `/thien-ha`, `/the-luc`, `/nhan-vat`, `/dia-do`, `/bien-nien`.
- Tách dữ liệu nội dung và khung giao diện dùng chung để tránh lặp lại.
- Dùng hiệu ứng chuyển cảnh nhẹ như lật trang/mực hiện, đồng thời tôn trọng chế độ giảm chuyển động.
- Kiểm tra trực tiếp luồng chuyển trang, menu di động, hồ sơ nhân vật và trạng thái tải font.
