/* filepath: d:\Andhika Fajar Prayoga Intern Juli 2025\purwadaksina\src\app\page.tsx */
'use client';
import Image from "next/image";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import { useState, useEffect, useRef } from "react";
import './index.css';
import { useCountUp } from "./js/index";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      img: '/assets/images/header.jpg',
      caption: 'Rumah Modern',
    },
    {
      img: '/assets/images/rumah-klasik-eropa.jpg',
      caption: 'Rumah Gaya Eropa',
    },
    {
      img: '/assets/images/rumah-industrial.jpg',
      caption: 'Rumah Industrial',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const tahun = useCountUp(10, 1200);
  const hunian = useCountUp(879, 1200);
  const penghargaan = useCountUp(20, 1200);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
            <div className="hero-left">
            <div className="hero-text-content">
              <h1 className="hero-title">
              Rumah Modern <span className="highlight">Terbaik</span><br />
              Menanti Anda
              </h1>
              <p className="hero-description">
              Bangun hunian istimewa yang dirancang untuk gaya hidup modern.
              Kami siap membantu Anda membangun rumah impian yang sesuai keinginan.
              </p>
              <div className="hero-cta">
              <button className="btn-cta-primary">
                Jelajahi Rumah
              </button>
              <button className="btn-cta-secondary">
                Konsultasi Gratis
              </button>
              </div>
            </div>
            </div>
          
          <div className="hero-right">
            <div className="carousel-container">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${slide.img})` }}
                >
                  {index === currentSlide && (
                    <div className="carousel-caption">
                      {slide.caption}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="carousel-dots">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="about-left">
              <p className="about-intro">
                Selama lebih dari 10 tahun kami telah membantu Anda membuat hunian mewah terbaik
              </p>
              <div className="about-image-container">
                <img 
                  src="/assets/images/Model-Rumah-Tropis.jpg" 
                  alt="Modern House" 
                  className="about-image"
                />
              </div>
            </div>
            
            <div className="about-right">
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">{tahun}+</div>
                  <div className="stat-label">Tahun<br />Pengalaman</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{hunian}</div>
                  <div className="stat-label">Hunian<br />Tersewa</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{penghargaan}</div>
                  <div className="stat-label">Penghargaan<br />Diraih</div>
                </div>
              </div>
              <div className="about-info">
                <div><strong>Mengapa Harus Perusahaan Kami? </strong></div>
                <p className="about-description">
                 Perusahaan kami didedikasikan untuk berinovasi dalam industri properti mewah, menawarkan pengalaman baru yang luar biasa melalui jaringan global agen-agen luar biasa.
                </p>
                <p className="about-description">
                  Dengan jaringan rumah dijual di seluruh dunia, situs web kami memungkinkan Anda mencari daftar properti secara global, dan mencakup inventaris besar rumah mewah untuk dijual, termasuk rumah, kondominium, townhome, villa, dan banyak lagi.
                </p>
                <button className="btn-learn-more">Pelajari lebih lanjut</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="spacer"></div>
      <Footer />
    </>
  );
}