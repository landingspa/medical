export default function Appointment() {
  return (
    <section id="appointment" className="appointment section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Đặt lịch khám</h2>
        <p>Đặt lịch hẹn với bác sĩ của chúng tôi</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <form action="" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-4 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Họ và tên"
                required
              />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="tel"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Số điện thoại"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input
                type="datetime-local"
                name="date"
                className="form-control"
                id="date"
                required
              />
            </div>
            <div className="col-md-4 form-group mt-3">
              <select
                name="department"
                id="department"
                className="form-select"
                required
              >
                <option value="">Chọn chuyên khoa</option>
                <option value="Rối loạn giấc ngủ">Rối loạn giấc ngủ</option>
                <option value="Điều trị stress">Điều trị stress</option>
                <option value="Tư vấn tâm lý">Tư vấn tâm lý</option>
                <option value="Khám tổng quát">Khám tổng quát</option>
              </select>
            </div>
            <div className="col-md-4 form-group mt-3">
              <input
                type="text"
                name="doctor"
                className="form-control"
                id="doctor"
                placeholder="Bác sĩ (tùy chọn)"
              />
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows={5}
              placeholder="Ghi chú (Tùy chọn)"
            ></textarea>
          </div>
          <div className="mt-3">
            <div className="loading">Đang gửi...</div>
            <div className="error-message"></div>
            <div className="sent-message">
              Yêu cầu đặt lịch của bạn đã được gửi thành công. Chúng tôi sẽ liên
              hệ lại trong thời gian sớm nhất. Cảm ơn bạn!
            </div>
            <div className="text-center">
              <button type="submit">Đặt lịch khám</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
