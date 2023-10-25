import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Inicio} from '../components/Inicio';
import {Portafolio} from '../components/Portafolio';
import {Curriculum} from '../components/Curriculum';
import {Contacto} from '../components/Contacto';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Proyecto } from '../components/Proyecto';

export const MisRutas = () => {
  return (
    <BrowserRouter>

        {/* HEADER Y NAVEGACION */}
        <HeaderNav />

        {/* CONTENIDO CENTRAL */}
        <section className='content' >
            <Routes>
                <Route path='portfolio/' element={<Navigate to='/inicio' />}></Route>
                <Route path='/inicio' element={<Inicio />}></Route>
                <Route path='/portafolio' element={<Portafolio />}></Route>
                <Route path='/curriculum' element={<Curriculum />}></Route>
                <Route path='/contacto' element={<Contacto />}></Route>
                <Route path='/proyecto/:id' element={<Proyecto />}></Route>

                <Route path='*' element={
                  <div className='page'>
                    <h1 className='heading'>Error 404</h1>
                  </div>
                }></Route>
            </Routes>
        </section>
        

        {/* FOOTER */}
        <Footer />
    </BrowserRouter>
  )
}
