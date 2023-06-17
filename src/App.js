import { useState, React } from 'react';

// estaticos
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' // or less ideally
import background from "./media/background.jpeg";

// archivos
import ControlledCarousel from './Carousel/Carousel';
import ProgressB from './Carousel/progress';

// bootstrap
// import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
        <div className='navar'>
        </div>

        
        <main className='Carousel'>
         <div className='carousel-content contenedor'>
         <div className='aviso'> 

         {/* 0a0b0b */}
         <a href='#' > <h6>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY*</h6></a>


         </div>

         <div> 
         <ControlledCarousel></ControlledCarousel>  
         </div>

         </div>
        </main>
    </div>
  );
}

export default App;
