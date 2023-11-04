import React, { useState } from 'react';
import './App.css'; 

import TablaSencilla from './TablaSencilla';
import Gallery from './Gallery';
import DynamicForm from './DynamicForm';
import Menu from './Menu';

const galleryImages = [
  { url: '/images/1.jpg' },
  { url: '/images/2.jpg' },
  { url: '/images/3.jpg' },
];

const formFields = [
  { label: 'Nombre', name: 'nombre', type: 'text' },
  { label: 'Correo electrónico', name: 'email', type: 'email' },
  
];



function App() {
  const [currentComponent, setCurrentComponent] = useState(null);

  return (
    <div className="App">
      <h1>Aplicación de React con Vite</h1>
      <Menu setComponent={setCurrentComponent} />

      {currentComponent === 'TablaSencilla' && <TablaSencilla />}
      {currentComponent === 'Gallery' && <Gallery images={galleryImages} />}

      {currentComponent === 'DynamicForm' && <DynamicForm fields={formFields} />}

    </div>
  );
}

export default App;
