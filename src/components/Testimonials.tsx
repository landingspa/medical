"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Phòng khám Quang Tâm đã giúp tôi vượt qua chứng mất ngủ kéo dài. Bác sĩ rất tận tình và phương pháp điều trị hiệu quả.",
      image: "/assets/img/testimonials/testimonials-1.png",
      name: "Nguyễn Văn A",
      position: "Bệnh nhân",
    },
    {
      text: "Tôi rất hài lòng với dịch vụ tư vấn stress tại đây. Sau 3 tháng điều trị, tôi cảm thấy cuộc sống nhẹ nhàng hơn rất nhiều.",
      image: "/assets/img/testimonials/testimonials-2.png",
      name: "Trần Thị B",
      position: "Bệnh nhân",
    },
    {
      text: "Bác sĩ Quang rất chuyên nghiệp và thấu hiểu. Phòng khám có không gian yên tĩnh, thoải mái. Tôi giới thiệu cho nhiều người.",
      image: "/assets/img/testimonials/testimonials-3.png",
      name: "Lê Văn C",
      position: "Bệnh nhân",
    },
    {
      text: "Điều trị rối loạn giấc ngủ tại đây rất hiệu quả. Giờ tôi đã có thể ngủ ngon giấc mỗi đêm.",
      image: "/assets/img/testimonials/testimonials-4.png",
      name: "Phạm Thị D",
      position: "Bệnh nhân",
    },
    {
      text: "Cảm ơn phòng khám đã giúp tôi vượt qua căng thẳng trong công việc. Tôi rất biết ơn đội ngũ y bác sĩ.",
      image: "/assets/img/testimonials/testimonials-5.jpg",
      name: "Hoàng Văn E",
      position: "Bệnh nhân",
    },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Phản hồi từ bệnh nhân</h2>
        <p>Những chia sẻ từ bệnh nhân đã điều trị tại phòng khám</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  <span>{testimonial.text}</span>
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
                <img
                  src={testimonial.image}
                  className="testimonial-img"
                  alt={testimonial.name}
                />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.position}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
