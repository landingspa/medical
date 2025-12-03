export default function Pricing() {
  return (
    <section id="pricing" className="pricing section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Bảng giá</h2>
        <p>Các gói dịch vụ của Phòng khám Quang Tâm</p>
      </div>

      <div className="container">
        <div className="row gy-3">
          <div
            className="col-xl-3 col-lg-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="pricing-item">
              <h3>Khám cơ bản</h3>
              <h4>
                <sup>đ</sup>200.000<span> / lần</span>
              </h4>
              <ul>
                <li>Khám và tư vấn</li>
                <li>Đánh giá tình trạng</li>
                <li>Kê đơn thuốc cơ bản</li>
                <li className="na">Theo dõi định kỳ</li>
                <li className="na">Tư vấn chuyên sâu</li>
              </ul>
              <div className="btn-wrap">
                <a href="#appointment" className="btn-buy">
                  Đặt lịch
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="pricing-item featured">
              <h3>Gói điều trị</h3>
              <h4>
                <sup>đ</sup>500.000<span> / tháng</span>
              </h4>
              <ul>
                <li>Khám và tư vấn</li>
                <li>Đánh giá tình trạng</li>
                <li>Kê đơn thuốc</li>
                <li>Theo dõi định kỳ</li>
                <li className="na">Tư vấn chuyên sâu</li>
              </ul>
              <div className="btn-wrap">
                <a href="#appointment" className="btn-buy">
                  Đặt lịch
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="pricing-item">
              <h3>Gói chăm sóc</h3>
              <h4>
                <sup>đ</sup>800.000<span> / tháng</span>
              </h4>
              <ul>
                <li>Khám và tư vấn</li>
                <li>Đánh giá tình trạng</li>
                <li>Kê đơn thuốc</li>
                <li>Theo dõi định kỳ</li>
                <li>Tư vấn chuyên sâu</li>
              </ul>
              <div className="btn-wrap">
                <a href="#appointment" className="btn-buy">
                  Đặt lịch
                </a>
              </div>
            </div>
          </div>

          <div
            className="col-xl-3 col-lg-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="pricing-item">
              <span className="advanced">Ưu đãi</span>
              <h3>Gói VIP</h3>
              <h4>
                <sup>đ</sup>1.500.000<span> / tháng</span>
              </h4>
              <ul>
                <li>Khám và tư vấn ưu tiên</li>
                <li>Đánh giá chuyên sâu</li>
                <li>Kê đơn thuốc cao cấp</li>
                <li>Theo dõi 24/7</li>
                <li>Tư vấn chuyên sâu</li>
              </ul>
              <div className="btn-wrap">
                <a href="#appointment" className="btn-buy">
                  Đặt lịch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
