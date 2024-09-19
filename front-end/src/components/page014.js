// components/Page2.js
import React from 'react';
import './menustyles3.css'; 
import thesisRafiki from '../img/thesis-rafiki.png'; 

 

export default function Page014() {
    return (
<div>
  
<div className="frame">
      <div className="div">
        <div className="div-2">
          
        </div>
        <div className="div-3">     
          <div className="div-wrapper">       
                  
          </div>
        </div>
      </div>
      <div className="div-4">
        <div className="div-5">
          <img className="thesis-rafiki" alt="Thesis rafiki" src={thesisRafiki}/>           
          
       </div>
      
 
      </div>
      <div className="div-15">
    
        <div className="div-16">
        <span className="text-wrapper-14">Cursoteka.</span>
          <div className="text-wrapper-18">2024</div>
        </div>
      </div>
    </div>     

<nav>
  <ul>
    <li><a href="#0">Gestion de Usuarios</a>
        <ul>
            <li><a href="#0">Personas</a></li>
            <li><a href="#0">Usuarios</a></li>
            <li><a href="#0">Estudiantes</a></li>
            <li><a href="#0">Instructores</a></li>           
        </ul>
    </li>     
    <li><a href="#0">Estudiantes</a>
        <ul>
        <li><a href="#0">Inscripcion</a></li>
        <li><a href="#0">Buscar Cursos</a></li>
        <li><a href="#0">Pasar Cursos</a></li>
        </ul>
    </li>
    <li><a href="#0">Instructores</a>
        <ul>
        <li><a href="#0">Materiales</a></li>    
        <li><a href="#0">Cursos</a></li>
        </ul>
    </li>
    <li><a href="#0">Configuracion</a>
        <ul>
        <li><a href="#0">Parametros</a></li>    
        </ul>
    </li>
    <li><a href="#0">Acerca</a>
        <ul>
        <li><a href="#0">Ayuda</a></li>
        <li><hr className="menu-separator" /></li>
        <li><a href="#0">Acerca de Cursoteka</a></li>
        </ul>
    </li>    
    </ul>
</nav>      

</div>
);}
 