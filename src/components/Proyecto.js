import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {
  const [proyecto, setProyecto] = useState({});
  const [capturaAmpliada, setCapturaAmpliada] = useState(null);
  const params = useParams();

  useEffect(() => {
    let proyecto = trabajos.find(trabajo => trabajo.id === params.id);
    setProyecto(proyecto);
  }, [params.id]);

  const mostrarCapturaAmpliada = (urlCaptura) => {
    setCapturaAmpliada(urlCaptura);
  };

  return (
    <div className='page page-work'>
      <div className='superior'>
        <div className='datos'>
          <h1 className='heading'>{proyecto.nombre}</h1>
          <p className='tecnologias'>{proyecto.tecnologias}</p>
          <h2 className='subtitulo'>{proyecto.subtitulo}</h2>
          <a href={'https://' + proyecto.url} target='_blank' rel="noopener noreferrer">Ir al proyecto</a>
        </div>
        <div className='mask'>
          <img src={"/images/proyectos/" + proyecto.id + ".png"} alt={proyecto.id} />
        </div>
      </div>
      <p className='descripcion'>{proyecto.descripcion}</p>
      <h2 className='visualizacion'>Visualización:</h2>
      <div className='capturas'>
        <img
          src={"/images/capturas/captura1-" + proyecto.id + ".png"}
          alt={proyecto.id}
          onClick={() => mostrarCapturaAmpliada("/images/capturas/captura1-" + proyecto.id + ".png")}
        />
        <img
          src={"/images/capturas/captura2-" + proyecto.id + ".png"}
          alt={proyecto.id}
          onClick={() => mostrarCapturaAmpliada("/images/capturas/captura2-" + proyecto.id + ".png")}
        />
        <img
          src={"/images/capturas/captura3-" + proyecto.id + ".png"}
          alt={proyecto.id}
          onClick={() => mostrarCapturaAmpliada("/images/capturas/captura3-" + proyecto.id + ".png")}
        />
      </div>

      {capturaAmpliada && (
        <div className='modal-background' onClick={() => setCapturaAmpliada(null)}>
          <div className='modal-content'>
            <img src={capturaAmpliada} alt='Captura Ampliada' />
          </div>
        </div>
      )}

    </div>
  );
};
