import React from 'react'
import { useForm, ValidationError } from '@formspree/react';


export const Contacto = () => {

  const [state, handleSubmit] = useForm('maygalkg');

  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>
      <div className='contenido-contacto'>
        <div className='enlaces'>
          <p>¡Gracias por visitar mi página! Estoy encantada de que quieras ponerte en contacto conmigo. Aquí encontrarás diversas formas de hacerlo.</p>
          <ul>
            <li>Puedes explorar <a href='https://github.com/Maria-shaydrova' target='_blank'>mi perfil</a> y proyectos en <strong>GitHub</strong>. ¡Estoy encantada de compartir mi trabajo contigo!</li>
            <li>
              Para enviarme un mensaje a través de <strong>LinkedIn</strong>, puedes visitar <a href='https://linkedin.com/in/maría-shaydrova-a78772164' target='_blank'>mi perfil</a>. Estoy siempre abierta a nuevas oportunidades.
            </li>
            <li>Si prefieres comunicarte por <strong>correo electrónico</strong>, no dudes en <a href='mailto:maria.sh.06@gmail.com'>enviarme un email</a>.</li>
            <li>También puedes utilizar el <strong>formulario de contacto</strong> a continuación. Completa los campos y recibiré tu mensaje.</li>
          </ul>

          <div className='iconos'>
            <a href='https://github.com/Maria-shaydrova' target='_blank'>
              <img src={process.env.PUBLIC_URL + '/iconos/github.svg'} alt='github' />
            </a>
            <a href='https://linkedin.com/in/maría-shaydrova-a78772164' target='_blank'>
              <img src={process.env.PUBLIC_URL + '/iconos/linkedin.svg'} alt='linkedin' />
            </a>
            <a href='mailto:maria.sh.06@gmail.com'>
              <img src={process.env.PUBLIC_URL + '/iconos/email.svg'} alt='email' />
            </a>
          </div>
        </div>
        <form className='contact' onSubmit={handleSubmit}>
          {state.succeeded && <p className='mensaje'>¡Gracias por tu mensaje!</p>}
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name='nombre' />
          {/* <input type="text" placeholder="Apellidos" name='apellidos' /> */}
          <label htmlFor='email'>Email</label>
          <input type="text" name='email' />
          <label htmlFor='motivo'>Mensaje</label>
          <textarea name='motivo' />
          <button type="submit" disabled={state.submitting}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}


