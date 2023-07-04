import React from 'react';
import ColorSchemesExample from './componentes navar/navar';
import Head from './componentes navar/head';
import Down_navbar from './down navbar/down_navabar';
import CardsComponent from './carts/cards';
import 'bootstrap/dist/css/bootstrap.min.css'; // or less ideally
import './App.css';
import background from "./media/background.jpeg";
import ControlledCarousel from './Carousel/Carousel';
import ProgressB from './Carousel/progress';
import Carousel from 'react-bootstrap/Carousel';

function App() {
  return (
    <div className="App background-page" style={{ backgroundImage: `url(${background})` }}>
      <div className='navar'>
        <div className='iconos'>
          <Head></Head>
        </div>
        <div className='texto_navar'>
          <ColorSchemesExample></ColorSchemesExample>
        </div>
      </div>

      <main className='main contenedor' style={{ backgroundColor:'#000000'}}>
        <div className='carousel-content' style={{ backgroundColor: '#0a0b0b', paddingTop: '25px' }}>
          <div className="aviso center" style={{ textDecoration: 'none' }}>
            <a href='#'><h6>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY</h6></a>
          </div>

          <div className='' style={{ width:'100%' }}>
            <ControlledCarousel></ControlledCarousel>
          </div>
        </div>

        <div className="cartas">
          <CardsComponent></CardsComponent>
        </div>
      </main>

      <div className='end'>
        <Down_navbar></Down_navbar>
      </div>
    </div>
  );
}

export default App;
