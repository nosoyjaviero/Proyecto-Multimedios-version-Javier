// import React from 'react'
import { useState, React } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import ProgressB from './progress';



function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>


        <img
          className="d-block w-100"
          src={require('./media/carrousel1.jpg')}
          //   src={"./media/carrousel1.jpg"}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className='carusel-cuadro '>
          <div>
              <ProgressB></ProgressB>
            </div>
            <h5 className=''>First slide label</h5>
          </div>

        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./media/carrousel2.jpg')}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className='carusel-cuadro '>
            <div>
              <ProgressB></ProgressB>
            </div>
            <h5 >Second slide label</h5>

          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./media/carrousel3.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className='carusel-cuadro '>
          <div>
              <ProgressB></ProgressB>
            </div>
            <h5 >Third slide label</h5>

          </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>




  );
}

export default ControlledCarousel;