import "../../styles/Carousel.css";
import { useState, useEffect, useRef } from "react";

function Carousel() {
  const IMG_NUM = 6;
  const IMG_WIDTH = 350; // Pixels; must match "Carousel.css".
  const AUTO_TIME = 10000; // ms

  const images = [
    "/about/workbench.jpg",
    "/about/moonboard.jpg",
    "/about/sketchup.jpg",
    "/about/boardgame.jpg",
    "/about/dicebox.jpg",
    "/about/joycon.jpg",
  ];

  const carousel = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  useEffect(() => {
    scroll();
  }, [index]);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [index]);

  const scroll = () => {
    if (carousel.current) {
      carousel.current.scrollTo({
        left: IMG_WIDTH * index,
        behavior: "smooth",
      });
      startInterval();
    }
  };

  const scrollLeft = () => setIndex((prev) => (prev === 0 ? IMG_NUM - 1 : prev - 1));
  const scrollRight = () => setIndex((prev) => (prev === IMG_NUM - 1 ? 0 : prev + 1));

  const circleNavigation = (i: number) => setIndex(i);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(scrollRight, AUTO_TIME);
  };

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (!carousel.current) return;
    setIsDragging(true);
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
    scrollStart.current = carousel.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !carousel.current) return;
    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const moveX = startX.current - currentX;
    carousel.current.scrollLeft = scrollStart.current + moveX;
  };

  const handleMouseUp = () => {
    if (!carousel.current) return;
    setIsDragging(false);

    // Calculate closest index
    const newIndex = Math.round(carousel.current.scrollLeft / IMG_WIDTH);
    setIndex(newIndex);

    // Smooth scroll to snapped position
    carousel.current.scrollTo({
      left: newIndex * IMG_WIDTH,
      behavior: "smooth",
    });
  };

  return (
    <div className="menu-carousel">
      <div className="carousel-top">
        <div
          className="carousel-frame"
          ref={carousel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
        >
          <div className="carousel-cont">
            {images.map((item, i) => (
              <div key={i} style={{ width: IMG_WIDTH }}>
                <img className="carousel-img" src={item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="carousel-nav">
        <button className="scroll carousel-left" onClick={scrollLeft}>
          &#60;
        </button>
        {images.map((_, i) => (
          <button
            key={i}
            className="circle-nav"
            style={{ backgroundColor: index === i ? "#ff6054" : "#6a6e76" }}
            onClick={() => circleNavigation(i)}
          />
        ))}
        <button className="scroll carousel-right" onClick={scrollRight}>
          &#62;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
