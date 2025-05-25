import React from 'react'
import './Home.css';
import Nombre from '../assets/logo/nombre.png';
import ImageSlider from '../components/ImageSlider';

export default function Home() {
  return (
    <div className='home-container'>
      <div className="home-content">
        <div className="text-section">
          <img src={Nombre} alt='nombre' />
          <h1>¡A tu servicio!</h1>
          <p>Nos dedicamos al mantenimiento integral de espacios exteriores, especializados en jardinería,
             corte de césped, poda de árboles y mantenimiento general.
          </p>
        </div>
        <div className="slider-section">
          <ImageSlider />
        </div>
      </div>
      <div className='home-overlay'></div>
    </div>
  );
}
