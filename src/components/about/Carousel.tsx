import "../../styles/Carousel.css";
import { useState, useEffect, useRef } from "react";

function Carousel() {
  const IMG_NUM = 6;
  const IMG_WIDTH = 350; //pixels; Value must match "Carousel.css".
  const AUTO_TIME = 10000; //ms

  let imgIndex = [];
  for (let i = 0; i < IMG_NUM; i++) {
    imgIndex[i] = IMG_WIDTH * i;
  }

  const carousel = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [index, setIndex] = useState(0);

  const images = [
    "/about/workbench.jpg",
    "/about/moonboard.jpg",
    "/about/sketchup.jpg",
    "/about/boardgame.jpg",
    "/about/dicebox.jpg",
    "/about/joycon.jpg",
  ];

  useEffect(() => {
    scroll();
  }, [index]);

  //Resets scroll timer upon manually scrolling.
  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [index]);

  const scroll = () => {
    if (carousel.current) {
      carousel.current.scrollTo({
        left: imgIndex[index],
        behavior: "smooth",
      });
      startInterval();
    }
  };

  const scrollLeft = () => {
    index === 0 ? setIndex(IMG_NUM - 1) : setIndex(index - 1);
    scroll();
  };

  const scrollRight = () => {
    index === IMG_NUM - 1 ? setIndex(0) : setIndex(index + 1);
    scroll();
  };

  const circleNavigation = (i: number) => {
    setIndex(i);
    scroll();
  };

  const startInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      scrollRight();
    }, AUTO_TIME);
  };

  return (
    <div className="menu-carousel">
      <div className="carousel-top">
        <div className="carousel-frame" ref={carousel}>
          <div className="carousel-cont">
            {images.map((item, i) => {
              return (
                <div key={i}>
                  <img className="carousel-img" src={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="carousel-nav">
        <button className="scroll carousel-left" onClick={scrollLeft}>
          &#60;
        </button>
        {imgIndex.map((_, i) => (
          <button
            key={i}
            className="circle-nav"
            style={{
              backgroundColor: index === i ? "#ff6054" : "#6a6e76",
            }}
            onClick={() => circleNavigation(i)}
          ></button>
        ))}
        <button className="scroll carousel-right" onClick={scrollRight}>
          &#62;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
