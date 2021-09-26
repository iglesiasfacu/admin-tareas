import React from 'react';
import './App.css';
import Formulario from './components/Formulario';

function App() {
  return (
    <>
      <h1>Administra tus proyectos</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario/>
          </div>

          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
