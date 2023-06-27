import './App.css';
import ColorSchemesExample from './componentes navar/navar';
import Head from './componentes navar/head';
import Down_navbar from './down navbar/down_navabar';
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
         <div className='aviso center'> 
         <a href='#' > <h6>ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY*</h6></a>


         </div>

         <div> 
         <ControlledCarousel></ControlledCarousel>
        </div>

         </div>
      </main>
      <div className='end'>
        <Down_navbar></Down_navbar>
      </div>
    </div>
  )
}

export default App;
