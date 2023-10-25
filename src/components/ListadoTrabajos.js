import React from 'react'
import { trabajos } from '../data/trabajos';
import { Link } from 'react-router-dom';

export const ListadoTrabajos = ({max}) => {
  return (

    <section className='works' >
      {
        trabajos.slice(0, max).map(trabajo => {
          return(
          <article key={trabajo.id} className='work-item'>
            <div className='mask'>
              <img src={"images/proyectos/"+ trabajo.id + ".png"} alt='trabajo.id'/>
            </div>
            <span>{trabajo.categorias}</span>
            <h2 className='title'><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
            <h3>{trabajo.tecnologias}</h3>
          </article>
        );
        })
      }
    </section>


  )
}
