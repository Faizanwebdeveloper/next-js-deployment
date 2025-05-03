'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

const CarouselHome = () => {
  const swiperRef = useRef(null);
  const captionRefs = useRef([]);

  const animateText = (el) => {
    if (!el) return;
    const texts = el.querySelectorAll('h1, h5');
    // Set initial position offscreen to the left
    gsap.set(texts, { x: 0, scaleX: 0.5, opacity: 0, transformOrigin:'left center', });
    gsap.to(texts, {
      x: 0,
      opacity: 1,
      duration: 1,
      scaleX: 1,
      ease: 'power2.out',
      stagger: 0.8,
    });
  };

  const onSwiperInit = (swiper) => {
    swiperRef.current = swiper;

    // Animate the first active slide on page load
    const initialCaption = captionRefs.current[swiper.realIndex];
    animateText(initialCaption);

    swiper.on('slideChangeTransitionEnd', () => {
      const activeCaption = captionRefs.current[swiper.realIndex];
      animateText(activeCaption);
    });
  };

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      onSwiper={onSwiperInit}
      className="home_carousel"
    >
      {[1, 2].map((item, i) => (
        <SwiperSlide
          key={i}
          style={{
            backgroundImage: `url('/img/banner/banner${item}.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div
            className="carousel-caption"
            ref={(el) => (captionRefs.current[i] = el)}
          >
            <h1>EXPERIENCE OUR INDUSTRY</h1>
            <h1> DEFINING SOLUTIONS.</h1>
            <h5>
              Maxworth demonstrates an end-to-end commitment with quality products and services from the<br />
              pilot to implementation, commissioning, and after-sales
            </h5>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselHome;
