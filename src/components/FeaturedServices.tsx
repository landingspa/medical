export default function FeaturedServices() {
  return (
    <section id="featured-services" className="featured-services section">
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-xl-3 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-heartbeat icon"></i>
              </div>
              <h4>
                <a href="" className="stretched-link">
                  Điều trị rối loạn giấc ngủ
                </a>
              </h4>
              <p>
                Chuyên sâu về các rối loạn giấc ngủ như mất ngủ, ngủ không sâu
                giấc, ngủ ngày thức đêm
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-pills icon"></i>
              </div>
              <h4>
                <a href="" className="stretched-link">
                  Điều trị Stress
                </a>
              </h4>
              <p>
                Hỗ trợ điều trị các vấn đề liên quan đến stress, lo âu, căng
                thẳng trong cuộc sống
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-thermometer icon"></i>
              </div>
              <h4>
                <a href="" className="stretched-link">
                  Khám tổng quát
                </a>
              </h4>
              <p>
                Khám sức khỏe tổng quát, tầm soát các vấn đề về sức khỏe tâm
                thần
              </p>
            </div>
          </div>

          <div
            className="col-xl-3 col-md-6 d-flex"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-dna icon"></i>
              </div>
              <h4>
                <a href="" className="stretched-link">
                  Tư vấn tâm lý
                </a>
              </h4>
              <p>
                Tư vấn tâm lý cá nhân, gia đình về các vấn đề giấc ngủ và stress
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
