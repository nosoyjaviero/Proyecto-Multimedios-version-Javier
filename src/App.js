import './App.css';
import ColorSchemesExample from './componentes navar/navar';
import Head from './componentes navar/head';
// estaticos
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' // or less ideally
import background from "./media/background.jpeg";

// archivos
import ControlledCarousel from './Carousel/Carousel';

// bootstrap
// import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <div className='navar'>
        <div className='iconos'>
          <Head></Head>
        </div>
        <div className='texto_navar'>
          <ColorSchemesExample></ColorSchemesExample>
        </div>
      </div>
      <main className='Carousel'>
        <div className='carousel-content contenedor'>
          <ControlledCarousel></ControlledCarousel>
        </div>
      </main>

    </div>
  )
}

export default App;
