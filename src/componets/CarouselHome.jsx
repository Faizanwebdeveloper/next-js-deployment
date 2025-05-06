'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

export default function CarouselHome({ imageUrl, heading1, heading2,para }) {
  const swiperRef = useRef(null);
  const captionRefs = useRef([]);

  const animateText = (el) => {
    if (!el) return;
    const texts = el.querySelectorAll('h1, h5, p');
    gsap.set(texts, {
      x: 0,
      scaleX: 0.5,
      opacity: 0,
      transformOrigin: 'left center',
    });
    gsap.to(texts, {
      x: 0,
      opacity: 1,
      duration: 1,
      scaleX: 1,
      ease: 'power2.out',
      stagger: 0.6,
    });
  };

  const onSwiperInit = (swiper) => {
    swiperRef.current = swiper;

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
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation
      onSwiper={onSwiperInit}
      className="home_carousel"
    >
      <SwiperSlide
        style={{
          backgroundImage: `url('${imageUrl || '/img/banner/banner1.jpg'}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '80px 0',
        }}
      >
        <div
          className="carousel-caption"
          ref={(el) => (captionRefs.current[0] = el)}
          style={{ color: 'white', textAlign: 'center' }}
        >
          <h1>{heading1}</h1>
          <h1>{heading2}</h1>
          <h5 dangerouslySetInnerHTML={{ __html: para }}/>
        </div>
      </SwiperSlide>

    </Swiper>
  );
}
