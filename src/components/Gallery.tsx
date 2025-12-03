"use client";

export default function Gallery() {
  const images = [
    "assets/img/gallery/gallery-1.jpg",
    "assets/img/gallery/gallery-2.jpg",
    "assets/img/gallery/gallery-3.jpg",
    "assets/img/gallery/gallery-4.jpg",
    "assets/img/gallery/gallery-5.jpg",
    "assets/img/gallery/gallery-6.jpg",
    "assets/img/gallery/gallery-7.jpg",
    "assets/img/gallery/gallery-8.jpg",
  ];

  return (
    <section id="gallery" className="gallery section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Thư viện ảnh</h2>
        <p>Hình ảnh về phòng khám và hoạt động của chúng tôi</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper init-swiper">
          <script
            type="application/json"
            className="swiper-config"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                loop: true,
                speed: 600,
                autoplay: { delay: 5000 },
                slidesPerView: "auto",
                centeredSlides: true,
                pagination: {
                  el: ".swiper-pagination",
                  type: "bullets",
                  clickable: true,
                },
                breakpoints: {
                  320: { slidesPerView: 1, spaceBetween: 0 },
                  768: { slidesPerView: 3, spaceBetween: 20 },
                  1200: { slidesPerView: 5, spaceBetween: 20 },
                },
              }),
            }}
          />
          <div className="swiper-wrapper align-items-center">
            {images.map((image, index) => (
              <div className="swiper-slide" key={index}>
                <a
                  className="glightbox"
                  data-gallery="images-gallery"
                  href={image}
                >
                  <img src={image} className="img-fluid" alt="" />
                </a>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
