import React, { useState } from 'react';

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const handleZoom = () => {
    // Implementa la lógica para mostrar la imagen ampliada en un dialog HTML5.
  };

  return (
    <div className="w3-container">
      <button onClick={handlePrev}>Anterior</button>
      <img src={images[currentIndex]} alt="Imagen" onClick={handleZoom} />
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
};

export default Gallery;
