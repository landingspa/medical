export default function Stats() {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="fas fa-user-md flex-shrink-0"></i>
              <div>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="5"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  5
                </span>
                <p>Bác sĩ</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="far fa-hospital flex-shrink-0"></i>
              <div>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="3"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  3
                </span>
                <p>Chuyên khoa</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="fas fa-flask flex-shrink-0"></i>
              <div>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="10"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  10+
                </span>
                <p>Năm kinh nghiệm</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item d-flex align-items-center w-100 h-100">
              <i className="fas fa-award flex-shrink-0"></i>
              <div>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1000"
                  data-purecounter-duration="1"
                  className="purecounter"
                >
                  1000+
                </span>
                <p>Bệnh nhân</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
