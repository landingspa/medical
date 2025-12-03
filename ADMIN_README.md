# Hệ thống Admin - Medical Project

## Thông tin đăng nhập

- **URL**: http://localhost:3000/admin/login
- **Username**: `admin`
- **Password**: `Admin@2025`

## Tính năng đã triển khai

### Authentication

- ✅ Login/Logout với NextAuth.js
- ✅ Session management
- ✅ Protected routes với middleware
- ✅ Password hashing với bcryptjs

### Dashboard

- ✅ Trang dashboard tổng quan
- ✅ Thống kê tổng quan:
  - Hero Slides, Services, Departments, Doctors
  - Appointments (theo status: Pending, Confirmed, Completed, Cancelled)
  - Testimonials, Gallery Images
  - Contact Messages (Total, Unread)

### Quản lý Appointments

- ✅ Xem danh sách appointments
- ✅ Filter theo status
- ✅ Cập nhật status (Pending, Confirmed, Completed, Cancelled)
- ✅ Xem thông tin chi tiết bệnh nhân

### Quản lý Contact Messages

- ✅ Xem danh sách tin nhắn
- ✅ Đánh dấu đã đọc/chưa đọc
- ✅ Xem chi tiết tin nhắn
- ✅ Highlight tin nhắn mới chưa đọc

### Layout & Navigation

- ✅ Admin layout với sidebar navigation
- ✅ Top navigation với user info
- ✅ Menu các module:
  - Dashboard
  - Hero Slides
  - About
  - Stats
  - Features
  - Services
  - Departments
  - Doctors
  - Appointments ✅
  - Testimonials
  - Gallery
  - Pricing
  - FAQs
  - Contact Info
  - Contact Messages ✅
  - Site Settings

## Cấu trúc thư mục

```
src/
├── app/
│   ├── admin/
│   │   ├── appointments/
│   │   │   └── page.tsx          # ✅ Quản lý appointments
│   │   ├── contact-messages/
│   │   │   └── page.tsx          # ✅ Quản lý messages
│   │   ├── dashboard/
│   │   │   └── page.tsx          # ✅ Dashboard tổng quan
│   │   ├── login/
│   │   │   └── page.tsx          # ✅ Login page
│   │   └── layout.tsx            # ✅ Admin layout
│   └── api/
│       ├── auth/
│       │   └── [...nextauth]/
│       │       └── route.ts      # ✅ NextAuth config
│       └── admin/
│           ├── stats/
│           │   └── route.ts      # ✅ Stats API
│           ├── appointments/
│           │   ├── route.ts      # ✅ List appointments
│           │   └── [id]/
│           │       └── route.ts  # ✅ Update appointment
│           └── contact-messages/
│               ├── route.ts      # ✅ List messages
│               └── [id]/
│                   └── route.ts  # ✅ Update message
├── components/
│   └── Providers.tsx             # ✅ SessionProvider wrapper
├── lib/
│   ├── auth.ts                   # ✅ NextAuth configuration
│   └── prisma.ts                 # Prisma client
└── middleware.ts                 # ✅ Route protection

prisma/
├── schema.prisma                 # ✅ Added Admin model
└── seed.ts                       # ✅ Added admin user seed
```

## Cách sử dụng

### 1. Start development server

```bash
npm run dev
```

### 2. Truy cập admin panel

- Mở trình duyệt: http://localhost:3000/admin/login
- Đăng nhập với credentials trên

### 3. Quản lý dữ liệu

- Dashboard: Xem tổng quan thống kê
- Appointments: Quản lý và cập nhật trạng thái lịch hẹn
- Contact Messages: Đọc và quản lý tin nhắn từ khách hàng

## API Routes

### Authentication

- `GET/POST /api/auth/[...nextauth]` - NextAuth endpoints

### Admin Stats

- `GET /api/admin/stats` - Lấy thống kê tổng quan

### Appointments

- `GET /api/admin/appointments` - Lấy danh sách appointments
- `PATCH /api/admin/appointments/[id]` - Cập nhật appointment

### Contact Messages

- `GET /api/admin/contact-messages` - Lấy danh sách messages
- `PATCH /api/admin/contact-messages/[id]` - Đánh dấu đã đọc

## Security

- ✅ Password được hash với bcryptjs (10 salt rounds)
- ✅ Protected routes với NextAuth middleware
- ✅ Session-based authentication với JWT
- ✅ API routes được bảo vệ với session check

## Môi trường

### Environment Variables (.env)

```env
DATABASE_URL="your-postgres-connection-string"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

## Ghi chú

- Các trang quản lý cho các model khác (Doctors, Departments, Services, etc.) có thể được phát triển thêm với cùng pattern như Appointments và Contact Messages
- Hiện tại đã implement 2 module quan trọng nhất: Appointments và Contact Messages
- Layout và navigation đã sẵn sàng cho tất cả các module

## Next Steps (Tùy chọn)

Nếu cần phát triển thêm:

1. CRUD operations cho các model còn lại (Doctors, Departments, Services, etc.)
2. Upload và quản lý hình ảnh (Gallery, Doctor images, etc.)
3. Rich text editor cho content fields
4. Export data (CSV, Excel)
5. Advanced filtering và search
6. Pagination cho danh sách lớn
7. Bulk actions (Delete multiple, Update multiple)
8. Activity logs và audit trail
