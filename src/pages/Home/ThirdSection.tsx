import React, { useState, useRef } from "react";

import img1 from "../../assets/slider1.png";
import img2 from "../../assets/slider2.png";
// import img3 from "../../assets/slider3.jpg";
// import img4 from "../../assets/slider4.jpg";
// import img5 from "../../assets/slider5.jpg";

const images = [
  { src: img1, alt: "img1" },
  { src: img2, alt: "img2" },
  { src: img1, alt: "img3" },
  { src: img1, alt: "img4" },
  { src: img1, alt: "img5" },
];

export default function ThirdSection() {
  const [current, setCurrent] = useState(0);

  // Количество видимых слайдов в зависимости от ширины экрана
  const getSlidesToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4; // desktop
      if (window.innerWidth >= 640) return 2; // tablet
    }
    return 1; // mobile
  };

  const [slidesToShow, setSlidesToShow] = React.useState(getSlidesToShow());

  // Сброс current при изменении slidesToShow
  React.useEffect(() => {
    const handleResize = () => {
      const newSlides = getSlidesToShow();
      setSlidesToShow(newSlides);
      setCurrent((prev) => {
        const max = images.length - newSlides;
        return Math.max(0, Math.min(prev, max));
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = images.length - slidesToShow;
  const goPrev = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const goNext = () => setCurrent((prev) => Math.min(prev + 1, maxIndex));

  // Для точек-индикаторов
  const getActiveDot = () => Math.min(current, maxIndex);

  // --- SWIPE ---
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    const delta = touchEndX.current - touchStartX.current;
    if (delta > 50) goPrev();
    if (delta < -50) goNext();
  };

  // --- Плавное перемещение слайдов ---
  // Рассчитываем ширину одного слайда (в процентах)
  const slideWidthPercent =
    slidesToShow === 4
      ? 25
      : slidesToShow === 2
      ? 50
      : 100;

  // Сдвиг контейнера слайдов
  const translateX = -(current * slideWidthPercent);

  return (
    <div className="w-full bg-black py-8">
      <div className="flex flex-col">
        {/* Слайдер */}
        <div
          className="flex flex-row items-end justify-center w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex flex-row gap-6 w-full px-2 md:px-6 lg:px-12"
            style={{
              width: `${(images.length * 100) / slidesToShow}%`,
              transform: `translateX(${translateX}%)`,
              transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {images.map((img, idx) => (
              <div
                key={img.alt + idx}
                className="flex-shrink-0 w-[100px]"
                style={{
                  maxWidth: 400,
                  maxHeight: 400,
                  width: `${150 / images.length}%`,
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Подпись и индикаторы */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mt-6 px-4">
          <div className="font-[Italiana] italic text-white text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-0 w-full text-left">
            Редкость 1 из 1
          </div>
          <div className="flex items-center gap-4">
            {/* Индикаторы (точки) */}
            <div className="flex items-center gap-2">
              {Array.from({ length: images.length - slidesToShow + 1 }).map(
                (_, i) => (
                  <span
                    key={i}
                    className={`block rounded-full transition-all duration-200 ${
                      getActiveDot() === i
                        ? "bg-white w-6 h-3"
                        : "bg-white/40 w-3 h-3"
                    }`}
                  ></span>
                )
              )}
            </div>
            {/* Кнопки */}
            <button
              onClick={goPrev}
              disabled={current === 0}
              className={`ml-4 w-14 h-14 rounded-full border border-white flex items-center justify-center text-3xl text-white transition hover:bg-white/10 disabled:opacity-40`}
            >
              &#8592;
            </button>
            <button
              onClick={goNext}
              disabled={current >= maxIndex}
              className={`w-14 h-14 rounded-full border border-white flex items-center justify-center text-3xl text-white transition hover:bg-white/10 disabled:opacity-40`}
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
