import React from 'react';
import { ReactComponent as ListIconSearch } from '../img/search0.svg';
import { ReactComponent as ListIconCart } from '../img/cart-20.svg';
import { ReactComponent as ListIconList } from '../img/list0.svg';
import AnimatedButton2 from './AnimatedButton2';
import frame14 from '../img/frame-140.png'; 
 
import "./style.css";
import "./vars.css";


function Student() {
    return (
<div class="frame-35">
  <div class="frame-23">
    <div class="frame-3">
    <ListIconList className="list" alt="ista" />        
      <div class="logo"> <a href="/"><AnimatedButton2 /></a>  </div>
    </div>
    <div class="frame-4">
    <ListIconSearch className="search" alt="search" />   
    <ListIconCart className="search" alt="search" />   
      <div class="frame-5">
        <div class="n">N</div>
      </div>
    </div>
  </div>
  <div class="frame-21">
    <div class="frame-20">
      <div class="frame-6">
        <div class="n2">N</div>
      </div>
      <div class="nombre-del-usuario">Nombre del usuario</div>
      <div class="frame-11">
        <div class="frame-19">
          <div class="frame-56">
            <div class="frame-54">
              <div class="_04">04</div>
              <div class="cursos-inscritos">Cursos inscritos</div>
            </div>
            <div class="frame-55">
              <div class="_02">02</div>
              <div class="cursos-completados">Cursos completados</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="frame-10">
      <div class="frame-75">
        <div class="cursos-recientes">Cursos recientes</div>
        <div class="ir-a-mis-cursos">Ir a mis cursos</div>
      </div>
      <div class="frame-36">
        <img class="frame-14"    src={frame14}  alt="frame140"/>
        <div class="frame-37">
          <div class="frame-39">
            <div class="nombre-curso">#NombreCurso</div>
            <div class="autor-curso">#autor curso</div>
            <div class="completado">%completado</div>
          </div>
        </div>
      </div>
      <div class="frame-76">
        <img class="frame-14"  src={frame14}  alt="frame140"/>
        <div class="frame-37">
          <div class="frame-39">
            <div class="nombre-curso">#NombreCurso</div>
            <div class="autor-curso">#autor curso</div>
            <div class="completado">%completado</div>
          </div>
        </div>
      </div>
      <div class="frame-77">
        <img class="frame-14" src={frame14}  />
        <div class="frame-37">
          <div class="frame-39">
            <div class="nombre-curso">#NombreCurso</div>
            <div class="autor-curso">#autor curso</div>
            <div class="completado">%completado</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="frame-22">
    <div class="frame-232">
      <div class="qui-nes-somos">¿Quiénes somos?</div>
      <div class="cont-ctanos">Contáctanos</div>
      <div class="pol-ticas-de-privacidad">Políticas de privacidad</div>
    </div>
    <div class="frame-24">
      <div class="logo2">Logo</div>
      <div class="_2024">2024</div>
    </div>
  </div>
</div>

    )
}

export default Student;