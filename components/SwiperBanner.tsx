"use client";
import { useEffect, useRef, useState } from "react";

const slides = [
  { desktop: "/banners/1.png", mobile: "/banners/1.png", alt: "banner-1" },
  { desktop: "/banners/1.png", mobile: "/banners/1.png", alt: "banner-1" },
];

export default function SwiperBanner() {
  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);
  const playing = useRef(true);
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const stop = () => {
    if (timer.current !== null) {
      clearInterval(timer.current);
      timer.current = null;
    }
  };
  const play = () => {
    stop();
    timer.current = window.setInterval(() => {
      if (playing.current) next();
    }, 5000);
  };
  useEffect(() => {
    play();
    return () => stop();
  }, []);
  return (
    <section className="relative w-full">
      <div
        className="overflow-hidden relative"
        onMouseEnter={() => (playing.current = false)}
        onMouseLeave={() => (playing.current = true)}
        onTouchStart={(e) => {
          playing.current = false;
          touchStartX.current = e.touches[0].clientX;
          touchDeltaX.current = 0;
        }}
        onTouchMove={(e) => {
          if (touchStartX.current !== null) {
            touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
          }
        }}
        onTouchEnd={() => {
          if (Math.abs(touchDeltaX.current) > 50) {
            if (touchDeltaX.current < 0) {
              setIndex((i) => (i + 1) % slides.length);
            } else {
              setIndex((i) => (i - 1 + slides.length) % slides.length);
            }
          }
          playing.current = true;
          touchStartX.current = null;
          touchDeltaX.current = 0;
        }}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <picture
              key={i}
              className="swiper-click swiper-picture block w-full min-w-full shrink-0"
              style={{ width: "100%", height: "auto" }}
            >
              <source
                srcSet={s.mobile}
                media="(max-width: 800px)"
                type="image/jpeg"
                sizes="100vw"
                className="swiper-picture swiper-click"
                style={{ width: "100%", height: "auto" }}
              />
              <img
                src={s.desktop}
                width={2560}
                height={1180}
                loading="lazy"
                alt={s.alt}
                sizes="100vw"
                srcSet={`${s.desktop} 2560w`}
                className="swiper-picture swiper-click"
                style={{ width: "100%", height: "auto" }}
              />
            </picture>
          ))}
        </div>
        <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-4" style={{ height: "75%" }}>
          <div
            slot="button-prev"
            className="swiper-button-prev cursor-pointer w-8 h-8 rounded-full bg-black/40"
            onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
          />
          <div
            slot="button-next"
            className="swiper-button-next cursor-pointer w-8 h-8 rounded-full bg-black/40"
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
          />
        </div>
        <div className="swiper-pagination absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`swiper-pagination-bullet swiper-pagination-bullet-custom ${i === index ? "swiper-pagination-bullet-active" : ""} h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
