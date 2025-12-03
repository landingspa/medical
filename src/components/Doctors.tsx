export default function Doctors() {
  return (
    <section id="doctors" className="doctors section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Đội ngũ bác sĩ</h2>
        <p>Bác sĩ chuyên môn cao, tận tâm với nghề</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="team-member">
              <div className="member-img">
                <img
                  src="/assets/img/doctors/doctor-1.jpg"
                  className="img-fluid"
                  alt="BS CKII Nguyễn Văn Quang"
                />
                <div className="social">
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
              <div className="member-info">
                <h4>BS CKII Nguyễn Văn Quang</h4>
                <span>Chuyên khoa II - Rối loạn giấc ngủ và Stress</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="team-member">
              <div className="member-img">
                <img
                  src="/assets/img/doctors/doctor-2.jpg"
                  className="img-fluid"
                  alt="Bác sĩ"
                />
                <div className="social">
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
              <div className="member-info">
                <h4>BS Nguyễn Thị Lan</h4>
                <span>Bác sĩ Tâm lý</span>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="team-member">
              <div className="member-img">
                <img
                  src="/assets/img/doctors/doctor-3.jpg"
                  className="img-fluid"
                  alt="Bác sĩ"
                />
                <div className="social">
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
              <div className="member-info">
                <h4>BS Trần Văn Minh</h4>
                <span>Bác sĩ Đa khoa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
