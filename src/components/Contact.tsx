export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Liên hệ</h2>
        <p>Liên hệ với chúng tôi để được tư vấn</p>
      </div>

      <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
        <iframe
          style={{ border: 0, width: "100%", height: "400px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5!2d106.2!3d21.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE4JzAwLjAiTiAxMDbCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2s!4v1234567890"
          frameBorder="0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Địa chỉ</h3>
                <p>
                  SN 100, Thôn Khuê, Song Mai
                  <br />
                  TP. Bắc Giang
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Điện thoại</h3>
                <p>0913 54 54 57</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email</h3>
                <p>phongkhamquangtam@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <i className="bi bi-clock flex-shrink-0"></i>
              <div>
                <h3>Giờ làm việc</h3>
                <p>
                  Thứ 2 - Thứ 6: 17H - 21H
                  <br />
                  Thứ 7, Chủ nhật: 8H - 21H
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          action=""
          method="post"
          className="php-email-form"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <div className="row gy-4">
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Họ và tên"
                required
              />
            </div>

            <div className="col-md-6">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Tiêu đề"
                required
              />
            </div>

            <div className="col-md-12">
              <textarea
                className="form-control"
                name="message"
                rows={6}
                placeholder="Nội dung"
                required
              ></textarea>
            </div>

            <div className="col-md-12 text-center">
              <div className="loading">Đang gửi...</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Tin nhắn của bạn đã được gửi. Cảm ơn bạn!
              </div>

              <button type="submit">Gửi tin nhắn</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
