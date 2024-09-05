// src/components/LoginSignup.js
import React, { useState, useEffect } from 'react';
import AnimatedButton2 from './AnimatedButton2';
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
// import './style1.css';
import "./style1.css";

const LoginSignup = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');
  const usenavigate=useNavigate();

  useEffect(()=>{
    sessionStorage.clear();
  },[]);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const ProceedLogin = (e) => {
    
    e.preventDefault();
    if (validate()) {
        ///implentation
        // console.log('proceed');
        fetch("http://localhost:8000/user/" + username).then((res) => {
            return res.json();
        }).then((resp) => {
            //console.log(resp)
            if (Object.keys(resp).length === 0) {
                //toast.error('Favor ingresar un username valido');
                alert('Favor ingresar un username valido')
            } else {
                if (resp.password === password) {
                    //toast.success('Exito');
                    alert("La credenciales son correctas")
                    sessionStorage.setItem('username',username);
                    sessionStorage.setItem('userrole',resp.role);
                    usenavigate('/student')
                }else{
                    //toast.error('Favor ingrese unas credenciales validas ');
                    alert('Favor ingrese unas credenciales validas ')
                }
            }
        }).catch((err) => {
            //toast.error('El login fallo debido a :' + err.message);
            alert('El login fallo debido a :' + err.message)
        });
    }
}
const validate = () => {
  console.log("llega validate")
  let result = true;

  console.log("user " +username)
  console.log("pwd  " +password)
  if (username === '' || username === null) {
    console.log("llega validate user ")
      result = false;
      //toast.warning('Favor ingresar un nombre de usuario');
      alert("Favor ingresar un nombre de usuario")
  }
  if (password === '' || password === null) {
      result = false;
      //toast.warning('Favor ingresar una contraseña');
      alert("Favor ingresar una contraseña")
  }

  console.log("res  " +result)
  return result;
}


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
        <form   onSubmit={ProceedLogin} >
          <h1>Iniciar sesión</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>o usa tu cuenta</span>          
          <input type="email" placeholder="Email" value={username} onChange={e => usernameupdate(e.target.value)}  />
          <input type="password" placeholder="Contraseña" value={password} onChange={e => passwordupdate(e.target.value)}  />
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
            
          </div>
        </div>
      </div>

      
    </div>
    
  );
};

export default LoginSignup;