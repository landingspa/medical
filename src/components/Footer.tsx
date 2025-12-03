import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link href="/" className="logo d-flex align-items-center">
              <span className="sitename">Phòng khám Quang Tâm</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>SN 100, Thôn Khuê, Song Mai</p>
              <p>TP. Bắc Giang</p>
              <p className="mt-3">
                <strong>Điện thoại:</strong> <span>0913 54 54 57</span>
              </p>
              <p>
                <strong>Email:</strong> <span>phongkhamquangtam@gmail.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Liên kết</h4>
            <ul>
              <li>
                <a href="#hero">Trang chủ</a>
              </li>
              <li>
                <a href="#about">Giới thiệu</a>
              </li>
              <li>
                <a href="#services">Dịch vụ</a>
              </li>
              <li>
                <a href="#contact">Liên hệ</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 footer-links">
            <h4>Dịch vụ</h4>
            <ul>
              <li>
                <a href="#">Điều trị rối loạn giấc ngủ</a>
              </li>
              <li>
                <a href="#">Điều trị stress</a>
              </li>
              <li>
                <a href="#">Tư vấn sức khỏe tâm thần</a>
              </li>
              <li>
                <a href="#">Khám tổng quát</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 footer-links">
            <h4>Giờ làm việc</h4>
            <ul>
              <li>Thứ 2 - Thứ 6: 17H - 21H</li>
              <li>Thứ 7, Chủ nhật: 8H - 21H</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">Phòng khám Quang Tâm</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}
