"use client";

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      <div
        id="hero-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-inner">
          <div className="carousel-item">
            <img src="assets/img/hero-carousel/hero-carousel-1.jpg" alt="" />
            <div className="container">
              <h2>PHÒNG KHÁM QUANG TÂM</h2>
              <p>
                Chuyên điều trị rối loạn giấc ngủ và stress - Bác sĩ CKII Nguyễn
                Văn Quang
              </p>
              <a href="#about" className="btn-get-started">
                Tìm hiểu thêm
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <img src="assets/img/hero-carousel/hero-carousel-2.jpg" alt="" />
            <div className="container">
              <h2>CHUYÊN KHOA RỐI LOẠN GIẤC NGỦ</h2>
              <p>
                Điều trị mất ngủ, khó ngủ, ngủ không sâu giấc với phương pháp
                hiện đại
              </p>
              <a href="#about" className="btn-get-started">
                Tìm hiểu thêm
              </a>
            </div>
          </div>

          <div className="carousel-item active">
            <img src="assets/img/hero-carousel/hero-carousel-3.jpg" alt="" />
            <div className="container">
              <h2>ĐIỀU TRỊ STRESS HIỆU QUẢ</h2>
              <p>Giảm căng thẳng, lo âu, nâng cao chất lượng cuộc sống</p>
              <a href="#about" className="btn-get-started">
                Tìm hiểu thêm
              </a>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          ></span>
        </a>

        <a
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          ></span>
        </a>

        <ol className="carousel-indicators">
          <li
            data-bs-target="#hero-carousel"
            data-bs-slide-to="0"
            className=""
          ></li>
          <li
            data-bs-target="#hero-carousel"
            data-bs-slide-to="1"
            className=""
          ></li>
          <li
            data-bs-target="#hero-carousel"
            data-bs-slide-to="2"
            className="active"
            aria-current="true"
          ></li>
        </ol>
      </div>
    </section>
  );
}
