import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to={"/inicio"}>
            <span>M</span>
            <h3>María Shaydrova</h3>
            </Link>
        </div>

        <nav>
            <ul>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Sobre mi</NavLink>
                </li>
                <li>
                    <NavLink to="/portafolio" className={({isActive}) => isActive ? "active" : ""}>Proyectos</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum" className={({isActive}) => isActive ? "active" : ""}>CV</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
