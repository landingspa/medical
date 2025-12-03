export default function Features() {
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="row justify-content-around gy-4">
          <div
            className="features-image col-lg-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src="assets/img/features.png" alt="" />
          </div>

          <div
            className="col-lg-5 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Dịch vụ chăm sóc sức khỏe chuyên nghiệp</h3>
            <p>
              Chúng tôi cam kết mang đến dịch vụ chăm sóc sức khỏe tâm thần tốt
              nhất với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị hiện
              đại.
            </p>

            <div
              className="icon-box d-flex position-relative"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="fa-solid fa-hand-holding-medical flex-shrink-0"></i>
              <div>
                <h4>
                  <a href="" className="stretched-link">
                    Điều trị chuyên sâu
                  </a>
                </h4>
                <p>
                  Phương pháp điều trị hiện đại, an toàn và hiệu quả cao cho các
                  vấn đề về giấc ngủ
                </p>
              </div>
            </div>

            <div
              className="icon-box d-flex position-relative"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="fa-solid fa-suitcase-medical flex-shrink-0"></i>
              <div>
                <h4>
                  <a href="" className="stretched-link">
                    Trang thiết bị hiện đại
                  </a>
                </h4>
                <p>
                  Trang bị đầy đủ các thiết bị y tế tiên tiến phục vụ cho việc
                  chẩn đoán và điều trị
                </p>
              </div>
            </div>

            <div
              className="icon-box d-flex position-relative"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i className="fa-solid fa-staff-snake flex-shrink-0"></i>
              <div>
                <h4>
                  <a href="" className="stretched-link">
                    Đội ngũ chuyên nghiệp
                  </a>
                </h4>
                <p>
                  Bác sĩ chuyên khoa II cùng đội ngũ y tá giàu kinh nghiệm, tận
                  tâm với nghề
                </p>
              </div>
            </div>

            <div
              className="icon-box d-flex position-relative"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <i className="fa-solid fa-lungs flex-shrink-0"></i>
              <div>
                <h4>
                  <a href="" className="stretched-link">
                    Theo dõi sát sao
                  </a>
                </h4>
                <p>
                  Hệ thống theo dõi và chăm sóc bệnh nhân sau điều trị chu đáo
                  và kịp thời
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
