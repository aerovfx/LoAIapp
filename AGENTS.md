# LoAI Web

## Mục tiêu

Website giới thiệu LoAI dưới dạng một trải nghiệm chat AI hoàn chỉnh. Giao diện cần tạo cảm giác quen thuộc với người dùng ChatGPT/Claude nhưng có nhận diện riêng, nội dung tiếng Việt và không sao chép logo hoặc tài sản thương hiệu.

## Phạm vi

- Màn hình chat responsive với sidebar, lịch sử hội thoại và vùng soạn tin.
- Trải nghiệm demo chạy hoàn toàn ở trình duyệt, không thu thập hoặc gửi dữ liệu.
- Chế độ sáng/tối, menu mobile, prompt gợi ý và phản hồi mô phỏng.
- CTA tải desktop luôn trỏ tới GitHub Releases mới nhất.
- Triển khai tự động tại GitHub Pages project site `/LoAIapp/`.

## Tech stack

- Semantic HTML5, modern CSS và JavaScript ES2022, không framework/runtime dependency.
- GitHub Actions + GitHub Pages.
- Font hệ thống để tải nhanh và không phụ thuộc CDN.

## Design system

- Tông kem ấm và ink đậm, accent xanh lime; dark mode màu than.
- Typography rõ ràng, khoảng trắng rộng, bo góc mềm, chuyển động nhẹ.
- Tất cả control phải có focus-visible, aria label và vùng bấm tối thiểu 44px.
- Breakpoint chính: 820px; sidebar trở thành drawer trên mobile.

## Quy ước code

- CSS dùng custom properties và class kebab-case.
- JavaScript dùng `const`/`let`, hàm nhỏ và trạng thái tối thiểu.
- Không nhúng secret, analytics hoặc API key.
- Không dùng đường dẫn tuyệt đối từ domain root cho asset nội bộ.

## Chất lượng và review

- Không có lỗi console trong luồng chính.
- Hoạt động khi mở trực tiếp và khi host dưới `/LoAIapp/`.
- Tôn trọng `prefers-reduced-motion`.
- Kiểm tra keyboard navigation, mobile layout và HTML validity cơ bản trước khi phát hành.

## Git

- Commit mô tả mục đích thay đổi.
- `main` là nhánh deploy.
- Workflow Pages chỉ có quyền tối thiểu cần thiết.
