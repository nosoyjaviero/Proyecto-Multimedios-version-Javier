import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import ProgressB from './progress';

const carouselItems = [
  {
    id: 1,
    duration: 5000,
    image: require('./media/carrousel1.jpg'),
    title: 'First slide label',
  },
  {
    id: 2,
    duration: 5000,
    image: require('./media/carrousel2.jpg'),
    title: 'Second slide label',
  },
  {
    id: 3,
    duration: 5000,
    image: require('./media/carrousel3.jpg'),
    title: 'Third slide label',
  },
];

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id}>
          <img className="d-block w-100" src={item.image} alt={`Slide ${item.id}`} />

          <Carousel.Caption>
            <div className="d-flex justify-content-center">
              {carouselItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="carusel-cuadro"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    margin: idx === 0 ? '0' : '0 10px', // Aplica el margen de 10px solo a partir del segundo elemento
                  }}
                >
                  <div className="custom-div">
                    <h5>{item.title}</h5>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;





 {/* <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        
      </button> */}








// import React from 'react';
// import { ProgressBar } from 'react-bootstrap';

// function ControlledCarousel() {

//   const progressData = [
//     { label: <img src={require('./media/carrousel1.jpg')} alt="Slide 1" />, active: true },
//     { label: <img src={require('./media/carrousel1.jpg')} alt="Slide 2" />, active: true },
//     { label: <img src={require('./media/carrousel1.jpg')} alt="Slide 3" />, active: true },
//   ];


//   return (
//     <div>
//       {progressData.map((item, index) => (
//         <ProgressBar
//           key={index}
//           now={item.active ? 100 : 0}
//           label={item.label}
//         />
//       ))}
//     </div>
//   );
// }

// export default ControlledCarousel;






// import React, { useState, useEffect } from 'react';
// import { Carousel, Button } from 'react-bootstrap';

// const CarouselComponent = () => {
  // const carouselItems = [
  //   {
  //     id: 1,
  //     // title: 'Slide 1',
  //     // content: 'Content for slide 1',
  //     duration: 5000, // Tiempo de vida en milisegundos para el slide 1
  //     image: require('./media/carrousel1.jpg'), // Ruta de la imagen del slide 1
  //   },
  //   {
  //     id: 2,
  //     // // title: 'Slide 2',
  //     // content: 'Content for slide 2',
  //     duration: 5000, // Tiempo de vida en milisegundos para el slide 2
  //     image: require('./media/carrousel2.jpg'), // Ruta de la imagen del slide 2
  //   },
  //   {
  //     id: 3,
  //     // title: 'Slide 3',
  //     // content: 'Content for slide 3',
  //     duration: 5000, // Tiempo de vida en milisegundos para el slide 3
  //     image: require('./media/carrousel3.jpg'), // Ruta de la imagen del slide 3
  //   },
  // ];

//   const [index, setIndex] = useState(0);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const currentItem = carouselItems[index];
//     const interval = setInterval(() => {
//       setProgress((prevProgress) => prevProgress + (100 / currentItem.duration) * 1000);
//     }, 1000);

//     const timeout = setTimeout(() => {
//       clearInterval(interval);
//       setProgress(0);
//       setIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
//     }, currentItem.duration);

//     return () => {
//       clearInterval(interval);
//       clearTimeout(timeout);
//     };
//   }, [index]);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   const buttonStyle = {
//     background: `linear-gradient(to right, #007bff ${progress}%, transparent ${progress}%)`,
//   };

//   return (
//     <div>
//       <Carousel activeIndex={index} onSelect={handleSelect} pause={false}>
//         {carouselItems.map((item) => (
//           <Carousel.Item key={item.id} className='carousel-content'>
//             <img className="d-block w-100" src={item.image} alt={`Slide ${item.id}`} />
//             <Carousel.Caption>
//               <div className="carusel-cuadro">
//                 {/* <div>
//                   <Button disabled={progress > 0} onClick={() => handleSelect(item.id)} style={buttonStyle} />
//                 </div> */}
//                 <h5>{item.title}</h5>
//               </div>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default CarouselComponent;