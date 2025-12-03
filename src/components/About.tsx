export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Giới thiệu</h2>
        <p>Phòng khám Quang Tâm - Địa chỉ tin cậy cho sức khỏe tâm thần</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 position-relative align-self-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src="assets/img/about.png" className="img-fluid" alt="" />
            <a
              href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
              className="glightbox pulsating-play-btn"
            ></a>
          </div>
          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Phòng khám chuyên khoa Rối loạn giấc ngủ và Stress</h3>
            <p className="fst-italic">
              Với đội ngũ bác sĩ giàu kinh nghiệm và trang thiết bị hiện đại,
              chúng tôi cam kết mang đến dịch vụ chăm sóc sức khỏe tâm thần tốt
              nhất.
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-all"></i>{" "}
                <span>Đội ngũ bác sĩ chuyên môn cao, tận tâm với nghề</span>
              </li>
              <li>
                <i className="bi bi-check2-all"></i>{" "}
                <span>
                  Trang thiết bị hiện đại, phương pháp điều trị tiên tiến
                </span>
              </li>
              <li>
                <i className="bi bi-check2-all"></i>{" "}
                <span>
                  Tư vấn chuyên sâu, theo dõi sát sao quá trình điều trị. Cam
                  kết mang đến hiệu quả điều trị tốt nhất cho bệnh nhân.
                </span>
              </li>
            </ul>
            <p>
              Phòng khám Quang Tâm luôn đặt lợi ích của bệnh nhân lên hàng đầu.
              Chúng tôi sử dụng các phương pháp điều trị hiện đại, an toàn và
              hiệu quả, giúp bệnh nhân nhanh chóng khôi phục và cải thiện chất
              lượng cuộc sống.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
