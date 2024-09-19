// src/components/LoginSignup.js
import React, { useState, useEffect } from 'react';
import AnimatedButton2 from './AnimatedButton2';
import { toast } from "react-toastify";
import {useNavigate } from "react-router-dom";
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
 
  function validarEmail(email) {
    // Expresión regular básica para validar correos electrónicos
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function validarContrasena(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d).+$/;
    if (regex.test(password)) {
        return true;
    } else {
        return " debe contener al menos una mayúscula y un número.";
    }
  }  

 
 
  const ProceedInscribir = async (f) => {    

    f.preventDefault();
    if (validate_incripcion()) {
      // 1. Create the "persona" object
      const reg_persona = {
        nombres: nombres,
        paterno: paterno,
        fecha_nacimiento: fechanac,
        id_usuario_reg: 1, // Replace with actual registration user ID if applicable
      };

      try {
        // 2. Send POST request to create persona and retrieve ID
        const personaResponse = await fetch("https://cursotekaba.zeabur.app/api/persona/", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(reg_persona),
        });

        console.log(personaResponse)

        if (!personaResponse.ok) {
		      alert('Fallo al insertar Persona: ' + personaResponse.statusText);
          throw new Error('Persona creation failed: ' + personaResponse.statusText);
        }
        const createdPersona = await personaResponse.json();
		
        console.log("datos res "+createdPersona)

        let obj_res = JSON.parse(createdPersona);

        /*
        console.log("obj res "+obj_res)
        console.log("obj res id "+obj_res.id_nueva_persona)
                */
        console.log("obj res id "+obj_res.id_nueva_persona)
        console.log("obj res op "+obj_res.resultado)


        const personaId     = obj_res.id_nueva_persona;
        const str_res_cons  = obj_res.resultado;

        if(str_res_cons==="success" && personaId!==""){
      
          // 4. Create the "usuario" object with the retrieved ID
          const reg_usuario = {
            nombre_usuario: email,
            email: email,
            password: passwd,
            id_persona: personaId, 
            id_usuario_reg: 1, 
            rol: 'estudiante',
          };
 
          let str_json_user=JSON.stringify(reg_usuario);

          console.log(str_json_user);
          
          const usuarioResponse = await fetch("https://cursotekaba.zeabur.app/api/usuario/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: str_json_user
          });

          if (!usuarioResponse.ok) {
            alert('Fallo al insertar Usuario : ' + usuarioResponse.statusText);
            throw new Error('Usuario creation failed: ' + usuarioResponse.statusText);
          }

          //toast.success('Registrado correctamente.');
          alert("Estudiante registrado correctamente")
          usenavigate('/student'); 

      }
      } catch (error) {
        console.error('Error:', error);
        toast.error('Fallo al registrar: ' + error.message);
      }
    }
};


  const ProceedLogin = (e) => {
    e.preventDefault();
    
    if (validate()) {
      //fetch("http://localhost:8000/usuario") // Fetch all users  json-server --watch db.json --port 8000
      //fetch("http://192.168.1.11/t/api/usuario/") // Fetch all users xammp windos 10
      fetch("https://cursotekaba.zeabur.app/api/usuario/") // Fetch all users ubuntu 22 linux 
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
      
      //toast.warning('Favor ingresar un nombre de usuario');
      alert("Favor ingresar un nombre")
      return false;
  } 
  else{
    if (nombres.length <=2) {
      
      alert("El nombre no puede ser menor o igual que 2 ");
      return false;
    }
    else{
      if (nombres.length >=80) {
        result = false;
        alert("El nombre no puede ser mayor  que 80 ");
        return false;
      }
    }
  }
  console.log("user " +paterno)
  if (paterno === '' || paterno === null  ) {
    console.log("llega validate paterno ")
      result = false;
      //toast.warning('Favor ingresar un nombre de usuario');
      alert("Favor ingresar un apellido paterno");
      return false;
  }   
  else{
    if (paterno.length <=2) {
      result = false;
      alert("El apellido paterno no puede ser menor o igual que 2 ");
      return false;
    }
    else{
      if (paterno.length >=80) {
        result = false;
        alert("El apellido paterno no puede ser mayor  que 80 ");
        return false;
      }
    }

  }

  console.log("user " +email)
  if (email === '' || email === null  ) {
    console.log("llega validate email ")
      result = false;
      //toast.warning('Favor ingresar un nombre de usuario');
      alert("Favor ingresar un email")
      return false;
  }    
  else{
    if (email.length <=5) {
      result = false;
      alert("El email no puede ser menor o igual que 5 ");
      return false;
    }else{
      if (email.length >=250) {
        result = false;
        alert("El email  no puede ser mayor  que 250 ");
        return false;
      }
    }

  }  

  if (!validarEmail(email)  && result) {
    alert("El correo electrónico no es válido");   
    return false; 
  }   
    
  if (passwd === '' || passwd === null  ) {
    console.log("llega validate passwd ")
      result = false;
      //toast.warning('Favor ingresar un nombre de usuario');
      alert("Favor ingresar una contraseña")
      return false;
  }     
  if (passwd1 === '' || passwd1 === null  ) {
    console.log("llega validate passwd1 ")
      result = false;
      //toast.warning('Favor ingresar un nombre de usuario');
      alert("Favor ingresar la segunda contraseña")
      return false;

  }  else{
    if(passwd!==passwd1 && result   ){
      result = false;
      alert("Las contraseñas deben coincidir ")
      return false;
    }

    if (passwd.length <=4) {
      result = false;
      alert("La contraseña no puede ser menor o igual que 5 ");
      return false;
    }else{
      if (email.length >=250) {
        result = false;
        alert("a contraseña no puede ser mayor  que 250 ");
        return false;
      }
    }    

  }   

  const mensaje = validarContrasena(passwd);

  if (mensaje !== true) {    
    result = false;
    console.log("La contraseña es inválida pues "+mensaje);
    alert("La contraseña es inválida pues "+mensaje)
    return false;
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
      return false;
  }
  if (password === '' || password === null) {
      result = false;
      //toast.warning('Favor ingresar una contraseña');
      alert("Favor ingresar una contraseña")
  }

  console.log("res  " +result)
  return result;
}


  return (    <div>
    <div><a href="/"><AnimatedButton2 /></a>  </div>
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container" >  
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" /> 

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
      
        <form   onSubmit={ProceedLogin} >
          <h1>Iniciar sesión</h1>
          <div className="social-container">
            <a href="https://www.facebook.com/" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.google.com/" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="https://www.linkedin.com/" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>o usa tu cuenta</span>          
          <input  placeholder="Email" value={username} onChange={e => usernameupdate(e.target.value)}  />
          <input type="password" placeholder="Contraseña" value={password} onChange={e => passwordupdate(e.target.value)}  />
          <a href="/Page3">¿Olvidaste tu contraseña?</a>
          <button>Iniciar sesión</button>
        </form>
      </div>
      <div className="overlay-container">
     
        <div className="overlay">
          <div className="overlay-panel overlay-left">
           
            <h1>¡Bienvenido de </h1>
              <h1>nuevo!</h1>
            <p>Para mantenerse conectado con nosotros,    inicie sesión con su información personal</p>
            <button className="ghost" id="signIn" onClick={handleSignInClick}>
              Iniciar sesión
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hola, Amigo!</h1>
            <p align="center" >Introduce tus datos personales y comienza tu viaje con nosotros.</p>
            <button className="ghost" id="signUp" onClick={handleSignUpClick}>
              Inscribirse
            </button>
            
          </div>
        </div>
      </div>

      
    </div>
    </div>
  );
};

export default LoginSignup;