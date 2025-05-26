import React from 'react';
import './About.css';
import smile from '../assets/others/smile.jpg';

export default function About() {
  return (
    <div className='about-container'>
      {/* Banner con imagen y texto encima */}
      <div className='about-banner'>
        <img src={smile} alt='smile' className='about-banner-img' />
        <div className='about-banner-text'>
          <h1>UN EMPRENDIMIENTO FAMILIAR</h1>
        </div>
      </div>

      {/* Contenido debajo del banner con overlay */}
      <div className='about-overlay-content'>
        <div className='about-overlay'></div>
        <div className='about-text'>
          <hr />
          <h2>MISION/VISION</h2>
          <p>
            Nuestro proyecto nace de la necesidad y del deseo de salir adelante juntos.<br />
            Nos mueve la confianza, el compromiso y la satisfacción de nuestros clientes.<br />
            Cada trabajo lo hacemos con responsabilidad, como si fuera para nuestra propia casa.
          </p>
        </div>
      </div>
    </div>
  );
}