"use client";

import { useState } from "react";

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/assets/img/gallery/gallery.png",
    "/assets/img/gallery/gallery.png",
    "/assets/img/gallery/gallery.png",
    "/assets/img/gallery/gallery.png",
    "/assets/img/gallery/gallery.png",
    "/assets/img/gallery/gallery.png",
    "/assets/img/gallery/gallery.png",
    "/assets/img/gallery/gallery.png",
  ];

  const openLightbox = (image: string, index: number) => {
    setCurrentImage(image);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage("");
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex]);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setCurrentImage(images[newIndex]);
  };

  return (
    <>
      <section id="gallery" className="gallery section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Thư viện ảnh</h2>
          <p>Hình ảnh về phòng khám và hoạt động của chúng tôi</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => openLightbox(image, index)}
                data-aos="zoom-in"
                data-aos-delay={100 * (index % 4)}
              >
                <img
                  src={image}
                  className="img-fluid"
                  alt={`Gallery ${index + 1}`}
                />
                <div className="gallery-overlay">
                  <i className="bi bi-zoom-in"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="bi bi-x"></i>
            </button>
            <button className="lightbox-prev" onClick={prevImage}>
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className="lightbox-next" onClick={nextImage}>
              <i className="bi bi-chevron-right"></i>
            </button>
            <img src={currentImage} alt="Gallery" />
            <div className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
