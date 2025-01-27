import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slider({ slides, interval = 4000, controls = true, indicators = true }) {

  return (
    <Carousel controls={controls} indicators={indicators} interval={interval}>
      {slides.map((slide) => (
        <Carousel.Item key={slide.id}>
          {/*Will show img if available*/}
          {slide.img && <img src={slide.img} alt="Slide image" className="d-block w-100" />}
          
          <div className="carousel-caption">
            {slide.num && <p>{slide.num}</p>}
            {slide.text && <p>{slide.text}</p>}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
