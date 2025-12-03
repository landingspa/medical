export default function Services() {
  const services = [
    {
      icon: "fas fa-heartbeat",
      title: "Điều trị mất ngủ",
      description:
        "Điều trị các trường hợp mất ngủ mãn tính, khó ngủ, thức giấc nhiều lần trong đêm",
    },
    {
      icon: "fas fa-pills",
      title: "Điều trị Stress",
      description:
        "Hỗ trợ điều trị stress, lo âu, căng thẳng do áp lực công việc và cuộc sống",
    },
    {
      icon: "fas fa-hospital-user",
      title: "Khám tổng quát",
      description:
        "Khám sức khỏe tổng quát, tầm soát các vấn đề về sức khỏe tâm thần",
    },
    {
      icon: "fas fa-dna",
      title: "Rối loạn nhịp sinh học",
      description:
        "Điều trị rối loạn nhịp sinh học, ngủ ngày thức đêm, mất cân bằng giấc ngủ",
    },
    {
      icon: "fas fa-wheelchair",
      title: "Điều trị thuốc",
      description: "Kê đơn và theo dõi điều trị bằng thuốc an toàn, hiệu quả",
    },
    {
      icon: "fas fa-notes-medical",
      title: "Tư vấn tâm lý",
      description:
        "Tư vấn tâm lý cá nhân, gia đình về các vấn đề giấc ngủ và stress",
    },
  ];

  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Dịch vụ</h2>
        <p>Các dịch vụ chăm sóc sức khỏe chuyên nghiệp của chúng tôi</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="service-item position-relative">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>{service.title}</h3>
                </a>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
