"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("mobile-nav-active");
  };

  return (
    <header
      id="header"
      className={`header sticky-top ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="d-none d-md-flex align-items-center">
            <i className="bi bi-clock me-1"></i> Thứ 2-6: 17H-21H | Thứ 7, CN:
            8H-21H
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-phone me-1"></i> Gọi ngay: 0913 54 54 57
          </div>
        </div>
      </div>

      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-end">
          <Link href="/" className="logo d-flex align-items-center me-auto">
            <img src="/assets/img/logo.png" alt="Phòng khám Quang Tâm" />
          </Link>

          <nav
            id="navmenu"
            className={`navmenu ${isMobileMenuOpen ? "mobile-nav-active" : ""}`}
          >
            <ul>
              <li>
                <Link href="#hero" className="active">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="#about">Giới thiệu</Link>
              </li>
              <li>
                <Link href="#services">Dịch vụ</Link>
              </li>
              <li>
                <Link href="#departments">Chuyên khoa</Link>
              </li>
              <li>
                <Link href="#doctors">Bác sĩ</Link>
              </li>
              <li>
                <Link href="#contact">Liên hệ</Link>
              </li>
            </ul>
            <i
              className={`mobile-nav-toggle d-xl-none bi ${
                isMobileMenuOpen ? "bi-x" : "bi-list"
              }`}
              onClick={toggleMobileMenu}
            ></i>
          </nav>

          <Link className="cta-btn" href="#appointment">
            Đặt lịch khám
          </Link>
        </div>
      </div>
    </header>
  );
}
