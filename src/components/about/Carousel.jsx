import { useState, useEffect, useRef } from "react";
import "../../styles/Carousel.css";

function Carousel() {
  const IMG_NUM = 6;
  const IMG_WIDTH = 500; //pixels; Value must match "Carousel.css".
  const AUTO_TIME = 10000; //ms

  let imgIndex = [];
  for (let i = 0; i < IMG_NUM; i++) {
    imgIndex[i] = IMG_WIDTH * i;
  }

  const carousel = useRef(null);
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  const images = [
    "/about/workbench.jpg",
    "/about/sketchup.png",
    "/about/boardgame.jpg",
    "/about/3dprint_1.jpg",
    "/about/3dprint_2.jpg",
    "/about/3dprint_3.jpg",
  ];

  useEffect(() => {
    scroll();
  }, [index]);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [index]);

  const scroll = () => {
    carousel.current.scrollTo({
      left: imgIndex[index],
      behavior: "smooth",
    });
    startInterval();
  };

  const scrollLeft = () => {
    index === 0 ? setIndex(IMG_NUM - 1) : setIndex(index - 1);
    scroll();
  };

  const scrollRight = () => {
    index === IMG_NUM - 1 ? setIndex(0) : setIndex(index + 1);
    scroll();
  };

  const circleNavigation = (i) => {
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
        <button className="scroll carousel-left" onClick={scrollLeft}>
          &#60;
        </button>
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
        <button className="scroll carousel-right" onClick={scrollRight}>
          &#62;
        </button>
      </div>

      <div className="carousel-nav">
        {imgIndex.map((_, i) => (
          <button
            key={i}
            className="circle-nav"
            style={{
              backgroundColor: index === i ? "#ff6054" : "#223552",
            }}
            onClick={() => circleNavigation(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
