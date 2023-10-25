import React from 'react';
import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';

export const Inicio = () => {
  return (
    <div className='home'>
      <div className='encabezado'>
        <h1>¡Bienvenid@! Mi nombre es <strong>María Shaydrova</strong> y soy <strong>desarrolladora web</strong> en Almería.</h1>
        <div className='foto'>
          <img src={process.env.PUBLIC_URL + '/images/perfil/perfil.png'} alt='perfil' />
        </div>
      </div>

      <div className='sobre_mi'>
        <h3>MI HISTORIA</h3>

        <p>Desde muy joven tenía claro que me dedicaría a las ciencias y tecologías (<strong>STEM</strong>) y ahora soy graduada en <strong>Ingeniería Mecánica</strong> por la Universidad de Almería.</p>

        <p>Gracias a varias personas que me han rodeado a los largo de estos años descubrí la profesión de software developer. Recordando mi experiencia de programación en la universidad y explorando las formas de aprender más sobre este oficio descubrí la educación a distancia. Esto me llevó, en 2022, a matricularme en el Grado Superior de Desarrollo de Aplicaciones Web (<strong>DAW</strong>) mientras estaba trabajando como operaria de Oficina Técnica de Producción.</p>
        <br></br>

        <h3>MI FORMACIÓN</h3>

        <p>Durante el primer año de formación he comprendido el paradigma de la Programación Orientada a Objetos (<strong>POO</strong>), concretamente en <strong>Java</strong>.</p>

        <p>He obtenido conocimientos sobre los lenguajes de marcas <strong>HTML5</strong> y <strong>XML</strong>, cómo se definen esquemas y vocabularios en XML (<strong>DTD</strong>, <strong>XML Schema</strong>), técnicas de transformación de documentos XML (<strong>XSLT</strong>, <strong>XPath</strong>) y cómo funcionan las hojas de estilos en casacada (<strong>CSS3</strong>).</p>

        <p>Otro aspecto clave en mi desarollo han sido las bases de datos. Dispongo de conocimientos para la costrucción de modelos relacionales y para la realización de operaciones CRUD. Para comprender como funciona el lenguaje SQL he tratado con gestores de bases de datos relacionales (<strong>MySQL</strong>) y objeto-relacionales (<strong>Oracle</strong>).</p>

        <p>Paralelamente al trabajo y a los estudios oficiales, he podido aprender algunos lenguajes de programación de forma autodidácta, como <strong>PHP</strong> y <strong>JavaScript</strong> junto con su framework <strong>React</strong>.</p>
        <br></br>

        <h3>ACTUALIDAD Y FUTURO</h3>
        <p>
          Me posiciono como <strong>junior front-end developer</strong> con ganas de poner en práctica los conocimientos que he adquirido durante el último año y aprender nuevas tecnologías en el entorno laboral.<br></br><br></br>
          Mi visión para el futuro es formar parte de la comunidad tecnológica, continuar con mi aprendizaje y desarollar habilidades para aportar soluciones a los retos que plantean los proyectos reales, con el fin de mejorar la expriencia de usuario, la accesibilidad y la eficiencia de las aplicaciones web.
        </p>
        <br></br>

      </div>
      <h3>Si te ha parecido interesante mi perfil y quieres hablar, <Link to="/contacto">contacta conmigo.</Link></h3>
      <br></br>
      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <div className='works'>
          <ListadoTrabajos max="2" />

        </div>
      </section>
    </div>
  )
}
