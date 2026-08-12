# LoAI

Giao diện giới thiệu LoAI — một trải nghiệm chat AI hiện đại, responsive và chạy hoàn toàn trên GitHub Pages.

## Xem cục bộ

Không cần cài dependency:

```bash
python3 -m http.server 4173
```

Mở `http://localhost:4173`.

## Triển khai GitHub Pages

1. Đẩy code lên nhánh `main` của `aerovfx/LoAIapp`.
2. Vào **Settings → Pages → Build and deployment**.
3. Chọn **GitHub Actions** làm Source.
4. Workflow sẽ tự xuất bản tại <https://aerovfx.github.io/LoAIapp/>.

## Desktop release

Các nút **Tải ứng dụng** trỏ đến:

<https://github.com/aerovfx/LoAIapp/releases/latest>

Tạo một GitHub Release và đính kèm bộ cài `.dmg`, `.exe` hoặc `.AppImage`; website sẽ tự dẫn tới release mới nhất mà không cần đổi mã nguồn.

## Quyền riêng tư

Đây là frontend demo. Nội dung nhập vào không được gửi lên máy chủ hay lưu trữ.
