import React from 'react'
import './About.css';
import smile from '../assets/others/smile.jpg';

export default function About() {
  return (
    <div className='about-container'>
      <div className="about-content">
        <h1>SOBRE NOSOTROS:</h1>
        <hr />
        <p className="about-intro">
          Somos un emprendimiento familiar dedicado a servicios de jardinería, limpieza y mantenimiento general del hogar.
        </p>
        <img src={smile} alt='smile'></img>
        <p>
          Lo que más nos motiva es forjar un lazo de confianza con nuestros clientes, que nos sientan como parte de su familia, 
          alguien en quien confiar cuando necesitan algo. Además, nos encanta dejar los espacios bonitos y presentables.
        </p>
        <p>
          Nuestros valores fundamentales son la confianza, honestidad, puntualidad, prolijidad y compromiso. Siempre buscamos que cada cliente quede satisfecho con nuestro trabajo.
        </p>
      </div>
      <div className='about-overlay'></div>
    </div>
  )
}
