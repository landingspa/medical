export default function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="call-to-action section accent-background"
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="col-xl-10">
            <div className="text-center">
              <h3>Cần hỗ trợ khẩn cấp? Liên hệ ngay!</h3>
              <p>
                Đội ngũ bác sĩ của chúng tôi luôn sẵn sàng hỗ trợ bạn. Đặt lịch
                hẹn ngay hôm nay để được tư vấn và điều trị kịp thời.
              </p>
              <a className="cta-btn" href="#appointment">
                Đặt lịch khám
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
