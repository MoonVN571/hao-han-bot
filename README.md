# Dự án: djs-v13-base
> Nói đơn giản hơn thì đây sẽ là dự án giúp cho các bạn mới code sẽ dùng base handler này để code tiếp các command riêng mình hoặc có thể code theo mình.

## Yêu cầu

1. Cách tạo bot **[Guide](https://polowis.home.blog/2019/01/21/huong-dan-tao-bot-tren-discord-p1/)**
2. Node.js v16 trở lên
## Setup bot

- Copy hoặc Đổi tên `example.env` thành `.env` và điền các thông tin vào:
- Trong phần baseHandler, nếu bạn muốn set server riêng, thì phải đổi lại guild id server của bạn.

**Lưu ý:** Không để lộ token bot chính, có thể dùng bot phụ, nếu có lỡ push github thì discord sẽ báo với bạn, hãy truy cập vào trang bot để đổi lại token tránh rủi ro cho sau này.


```env
  TOKEN=<Token bot của bạn>
```

## Cài thư viện và chạy bot test
Bạn cần setup bot trước qua lệnh shell:
```
npm i
```
để tiến hành cài đặt thư viện của bot

Cách chạy bot:
```
node .
```
