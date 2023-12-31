import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressB() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0; // Reinicia el progreso a 0 una vez que alcanza el 100%
        }
        return prevProgress + (100 / 50); // Incremento para alcanzar el 100% en 4 segundos (50 incrementos)
      });
    }, 100); // Intervalo de 100 ms (0.1 segundos)

    return () => {
      clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    };
  }, []);

  const progressBarStyle = {
    height: '3px', // Ajusta la altura del ProgressBar según tus necesidades
  };

  return <ProgressBar now={progress} style={progressBarStyle} />;
}

export default ProgressB;
