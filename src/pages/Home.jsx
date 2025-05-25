import React from 'react'
import './Home.css';
import ImageSlider from '../components/ImageSlider';

export default function Home() {
  return (
    <div className='home-container'>
      <div className="home-content">
        <div className="text-section">
          <h1>Nombre del Emprendimiento</h1>
          <p>Tu lema o frase inspiradora aquí</p>
        </div>
        <div className="slider-section">
          <ImageSlider />
        </div>
      </div>
      <div className='overlay'></div>
    </div>
  );
}
