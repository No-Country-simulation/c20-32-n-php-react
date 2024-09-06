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

  const [nombres, nameupdate] = useState('');
  const [paterno, paternoupdate] = useState('');
  const [email, emailupdate] = useState('');
  const [fechanac, fechanacupdate] = useState('');
  const [passwd, passwdupdate] = useState('');
  const [passwd1, passwd1update] = useState('');

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
 
  const ProceedInscribir = (f) => {
    let str_aux=""
    let str_json_user=""

    f.preventDefault();
    if (validate_incripcion()) {

      let reg_persona = {          
        "nombres": nombres,
        "paterno": paterno,     
        "fecha_nacimiento": fechanac,
        "id_usuario_reg": "1",
      } ;

      let reg_usuario = {        
        "nombre_usuario": email,
        "email": email,
        "password": passwd, 
         "id_persona": "11",   
         "id_usuario_reg": 1,    
        "rol": "estudiante"
    } ;      

      str_json_user=JSON.stringify(reg_usuario)
      str_aux=JSON.stringify(reg_persona)

      console.log(str_aux)

      
      //console.log(regobj);
      fetch("http://192.168.1.10/u/api/persona/", {
          method: "POST",
          headers: { 'content-type': 'application/json' },
          body: str_aux
      }).then((res) => {
          //toast.success('Registrado correctamente.')
         

          fetch("http://192.168.1.10/u/api/usuario/", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: str_json_user
          }).then((res) => {
            //toast.success('Registrado correctamente.')
            alert('Registrado correctamente.')
            usenavigate('/student');
          }).catch((err) => {
            //toast.error('Fallo :' + err.message);
            alert('Fallo al registrar usuario:' + err.message)
          });   

      }).catch((err) => {
          //toast.error('Fallo :' + err.message);
          alert('Fallo al registrar persona:' + err.message)
      });     
      
      
    }

  }


  const ProceedLogin = (e) => {
    e.preventDefault();
    
    if (validate()) {
      //fetch("http://localhost:8000/usuario") // Fetch all users  json-server --watch db.json --port 8000
      //fetch("http://192.168.1.11/t/api/usuario/") // Fetch all users xammp windos 10
      fetch("http://192.168.1.10/u/api/usuario/") // Fetch all users ubuntu 22 linux 
        .then((res) => res.json())
        .then((data) => {
          // Buscar el usuario por `nombre_usuario`
          const user = data.find((u) => u.nombre_usuario === username);
          if (!user) {
            alert('Usuario no encontrado. Favor ingresar un nombre de usuario válido.');
          } else {
            // Verificar la contraseña
            if (user.password === password) {
              alert('Credenciales correctas');
              sessionStorage.setItem('username', username);
              sessionStorage.setItem('userrole', user.rol);
              usenavigate('/student');
            } else {
              alert('Contraseña incorrecta. Favor ingresar unas credenciales válidas.');
            }
          }
        })
        .catch((err) => {
          alert('El login falló debido a: ' + err.message);
        });
    }
  };
  
const validate_incripcion= () => {
  let result = true;
  console.log("llega validate")
  console.log("user " +nombres)
  if (nombres === '' || nombres === null) {
    console.log("llega validate nombres ")
      result = false;
      //toast.warning('Favor ingresar un nombre de usuario');
      alert("Favor ingresar un nombre")
  } 
  console.log("user " +paterno)
  if (paterno === '' || paterno === null) {
    console.log("llega validate paterno ")
      result = false;
      //toast.warning('Favor ingresar un nombre de usuario');
      alert("Favor ingresar un apellido paterno")
  }   
  console.log("user " +email)
  if (email === '' || email === null) {
    console.log("llega validate email ")
      result = false;
      //toast.warning('Favor ingresar un nombre de usuario');
      alert("Favor ingresar un email")
  }    
    
  if (passwd === '' || passwd === null) {
    console.log("llega validate passwd ")
      result = false;
      //toast.warning('Favor ingresar un nombre de usuario');
      alert("Favor ingresar una contraseña")
  }     
  if (passwd1 === '' || passwd1 === null) {
    console.log("llega validate passwd1 ")
      result = false;
      //toast.warning('Favor ingresar un nombre de usuario');
      alert("Favor ingresar la segunda contraseña")

  }  else{
    if(passwd!=passwd1 && result ){
      result = false;
      alert("Las contraseñas deben coincidir ")
    }

  }

  return result;
}
  
const validate = () => {
  //
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
        <form onSubmit={ProceedInscribir} >
          <h1>Crear una cuenta</h1>
          <input  value={nombres} placeholder="Primer nombre" onChange={e => nameupdate(e.target.value)}  />
          <input  value={paterno} placeholder="Segundo nombre" onChange={e => paternoupdate(e.target.value)}  />
          <input value={email} type="email" placeholder="Email" onChange={e => emailupdate(e.target.value)}  />
          <input value={fechanac} type="date" placeholder="Fecha Nacimiento" onChange={e => fechanacupdate(e.target.value)}  />
          <input value={passwd} type="password" placeholder="Contraseña" name="pswd1" onChange={e => passwdupdate(e.target.value)}  />
          <input value={passwd1} type="password" placeholder="Confirma Contraseña" name="pswd2" onChange={e => passwd1update(e.target.value)}  />
          <button  >            Inscribirse           </button>
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
          <input  placeholder="Email" value={username} onChange={e => usernameupdate(e.target.value)}  />
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