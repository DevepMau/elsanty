import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

// Importa tus imágenes
import img1 from '../assets/slideshow/img1.jpg';
import img2 from '../assets/slideshow/img2.jpg';
import img3 from '../assets/slideshow/img3.jpg';
import img4 from '../assets/slideshow/img4.jpg';

const images = [img1, img2, img3, img4];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar imagen cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia el número si quieres otro intervalo

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index}`} className="slide-image" />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;