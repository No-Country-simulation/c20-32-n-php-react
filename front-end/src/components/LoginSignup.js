// src/components/LoginSignup.js
import React, { useState } from 'react';
import AnimatedButton2 from './AnimatedButton2';
import AnimatedButton3 from './AnimatedButton3';
// import './style1.css';
import "./style1.css";

const LoginSignup = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Crear una cuenta</h1>
          <input type="text" placeholder="Primer nombre" />
          <input type="text" placeholder="Segundo nombre" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Edad" />
          <input type="password" placeholder="Contraseña" name="pswd1" />
          <input type="password" placeholder="Confirma Contraseña" name="pswd2" />
          <button type="submit" onClick={() => alert('Función de inscripción aún no implementada')}>
            Inscribirse
          </button>
        </form>
      </div>
      <div className="form-container sign-in-container">
      <div > <a href="/"><AnimatedButton2 /></a>   </div> 
        <form action="#" id="login">
          <h1>Iniciar sesión</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>o usa tu cuenta</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Contraseña" />
          <a href="#">¿Olvidaste tu contraseña?</a>
          <button>Iniciar sesión</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>¡Bienvenido de nuevo!</h1>
            <p>Para mantenerse conectado con nosotros, inicie sesión con su información personal</p>
            <button className="ghost" id="signIn" onClick={handleSignInClick}>
              Iniciar sesión
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hola, Amigo!</h1>
            <p>Introduce tus datos personales y comienza tu viaje con nosotros.</p>
            <button className="ghost" id="signUp" onClick={handleSignUpClick}>
              Inscribirse
            </button>
            <div > <a href="/Student"><AnimatedButton3 /></a>   </div> 
          </div>
        </div>
      </div>

      
    </div>
    
  );
};

export default LoginSignup;