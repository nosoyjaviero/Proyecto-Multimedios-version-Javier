import './App.css';
import ColorSchemesExample from './componentes navar/navar';
import Head from './componentes navar/head';
function App() {
  return (
    <div className="App">
      <div className='navar'>
        <div className='iconos'>
          <Head></Head>
        </div>
        <div className='texto_navar'>
          <ColorSchemesExample></ColorSchemesExample>
        </div>
      </div>
      <main className='main'>
      </main>
    </div>
  );
}

export default App;
