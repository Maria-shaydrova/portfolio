import React from 'react'

export const Curriculum = () => {
  return (
    <div className='page cv'>
      <div className='curric'>
        <h1 className='heading'>Currículum</h1>
        <a href={process.env.PUBLIC_URL + '/images/perfil/CV_María_Shaydrova.pdf'} download="CV_María_Shaydrova.pdf">Descargar CV</a>
        {/* <img src={process.env.PUBLIC_URL + '/images/perfil.png'} alt='perfil' /> */}
      </div>

      <h2>Perfil profesional</h2>
      <p>Junior front-end developer con formación previa en Ingeniería Mecánica. Tomé la decisión de reorientar mi carrera profesional hacia el mundo de la programación debido a la inquietud por descubrir nuevas oportunidades y enriquecer mis habilidades.</p>
      <h2>Educación</h2>
      <ul className='educacion'>
        <li>
          <h4>Ciclo Formativo de Grado Superior: Desarrollo de Aplicaciones Web (DAW)</h4>
          <p>10/2022 - actualidad, IES Aguadulce</p>
        </li>
        <li>
          <h4>Curso en React (MERN stack) </h4>
          <p>10/2023 (40 horas), Udemy</p>
        </li>
        <li>
          <h4>Grado en Ingeniería Mecánica</h4>
          <p>09/2014 - 06/2021, Universidad de Almería</p>
        </li>
      </ul>
      <h2>Hard skills</h2>
      <ul className='hard'>
        <li>HTML5, CSS3, JavaScript, React</li>
        <li>Java, PHP, MySQL, Oracle, XML</li>
        <li>POO, diseño web</li>
      </ul>
      <h2>Soft skills</h2>
      <ul className='soft'>
        <li>Atención a los detalles, capacidad analítica, pensamiento crítico</li>
        <li>Flexibilidad, resolución de problemas, responsabilidad</li>
        <li>Gestión del tiempo, trabajo en equipo</li>
      </ul>
      <h2>Otros</h2>
      <div className='idiomas'>
        <h3>   Idiomas</h3>
        <ul>
          <li>Español | Ruso - nivel nativo</li>
          <li>Ingles - Cambridge English B1 Preliminary (PET)</li>
        </ul>
      </div>
    </div>
  )
}
