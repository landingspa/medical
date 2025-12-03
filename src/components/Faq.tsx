"use client";

import { useState } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Phòng khám có giờ làm việc như thế nào?",
      answer:
        "Phòng khám mở cửa từ Thứ 2 đến Thứ 6: 17H - 21H và Thứ 7, Chủ nhật: 8H - 21H. Bạn có thể đặt lịch trước hoặc đến trực tiếp.",
    },
    {
      question: "Tôi có cần đặt lịch trước không?",
      answer:
        "Để được phục vụ tốt nhất và tránh chờ đợi, chúng tôi khuyến khích bạn đặt lịch trước qua hotline 0913 54 54 57 hoặc form trực tuyến.",
    },
    {
      question: "Chi phí điều trị là bao nhiêu?",
      answer:
        "Chi phí khám và điều trị phụ thuộc vào tình trạng bệnh và phương pháp điều trị. Chúng tôi có nhiều gói dịch vụ với mức giá phù hợp. Vui lòng liên hệ để được tư vấn chi tiết.",
    },
    {
      question: "Có thể thanh toán bằng thẻ không?",
      answer:
        "Có, chúng tôi chấp nhận thanh toán bằng tiền mặt, thẻ ATM và chuyển khoản. Phòng khám cũng hỗ trợ trả góp với một số gói điều trị dài hạn.",
    },
    {
      question: "Thời gian điều trị kéo dài bao lâu?",
      answer:
        "Thời gian điều trị phụ thuộc vào tình trạng của từng bệnh nhân. Thông thường, một liệu trình điều trị kéo dài từ 1-3 tháng. Bác sĩ sẽ đánh giá và tư vấn cụ thể cho từng trường hợp.",
    },
    {
      question: "Phòng khám có bảo mật thông tin bệnh nhân không?",
      answer:
        "Tất nhiên. Chúng tôi cam kết bảo mật tuyệt đối mọi thông tin của bệnh nhân theo quy định của pháp luật về bảo vệ thông tin cá nhân.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Câu hỏi thường gặp</h2>
        <p>Những câu hỏi thường gặp về dịch vụ của chúng tôi</p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${
                    activeIndex === index ? "faq-active" : ""
                  }`}
                  key={index}
                >
                  <h3 onClick={() => toggleFaq(index)}>{faq.question}</h3>
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                  <i
                    className="faq-toggle bi bi-chevron-right"
                    onClick={() => toggleFaq(index)}
                  ></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
