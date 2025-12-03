"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Hero() {
  const slides = [
    {
      image: "/assets/img/hero-carousel/hero-carousel-1.png",
      title: "PHÒNG KHÁM QUANG TÂM",
      description:
        "Chuyên điều trị rối loạn giấc ngủ và stress - Bác sĩ CKII Nguyễn Văn Quang",
    },
    {
      image: "/assets/img/hero-carousel/hero-carousel-2.png",
      title: "CHUYÊN KHOA RỐI LOẠN GIẤC NGỦ",
      description:
        "Điều trị mất ngủ, khó ngủ, ngủ không sâu giấc với phương pháp hiện đại",
    },
    {
      image: "/assets/img/hero-carousel/hero-carousel-3.png",
      title: "ĐIỀU TRỊ STRESS HIỆU QUẢ",
      description: "Giảm căng thẳng, lo âu, nâng cao chất lượng cuộc sống",
    },
  ];

  return (
    <section id="hero" className="hero section">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="hero-carousel"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image} alt={slide.title} />
            <div className="container">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <a href="#about" className="btn-get-started">
                Tìm hiểu thêm
              </a>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev">
          <i className="bi bi-chevron-left"></i>
        </div>
        <div className="swiper-button-next">
          <i className="bi bi-chevron-right"></i>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
}
