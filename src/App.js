import React from 'react';
import ColorSchemesExample from './componentes navar/navar';
import Head from './componentes navar/head';
import Down_navbar from './down navbar/down_navabar';
import CardsComponent from './carts/cards';
import 'bootstrap/dist/css/bootstrap.min.css'; // or less ideally

import background from "./media/background.jpeg";
import ControlledCarousel from './Carousel/Carousel';

import './App.css';



import {
  BrowserRouter as Router, Switch, Route, Link

} from "react-router-dom";

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
      <Router>

        <Switch>

          <main className='main contenedor' style={{ backgroundColor: '#000000' }}>
            <Route path="/" exact>
              <div className='carousel-content' style={{ backgroundColor: '#0a0b0b' }}>
                <div className="aviso center" style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>
                  <Link to="/" className="white-link">
                    ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY
                  </Link>
                </div>

                <div className='' style={{ width: '100%' }}>
                  <ControlledCarousel></ControlledCarousel>
                </div>
              </div>

              <div className="cartas" style={{ backgroundColor: '#0a0b0b', paddingTop: '25px' }}>
                <CardsComponent></CardsComponent>
              </div>
            </Route>

            <Route path="/contacto">

              {/* Iserta funcionalidad adicional starling aqui y cambiar nombre de ruta*/}


            </Route>

          </main>





        </Switch>




      </Router>

      <div className='end'>
        <Down_navbar></Down_navbar>
      </div>
    </div>
  );
}

export default App;
