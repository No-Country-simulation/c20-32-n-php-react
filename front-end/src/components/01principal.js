// components/Page1.js
import React from 'react';
import { Cart21 } from "../icons/Cart21";
import { List1 } from "../icons/List1";
import { Person } from "../icons/Person";
import { Search2 } from "../icons/Search2";
import { StarFill } from "../icons/StarFill";
import thesisRafiki from '../img/thesis-rafiki.png'; 
import AnimatedButton from './AnimatedButton';

import "../style.css";

function Principal() {
    return (
      <div className="frame">
      <div className="div">
        <div className="div-2">
          <List1 className="icon-instance-node" />
          <div className="text-wrapper">Logo</div>
        </div>
        <div className="div-3">
          <Search2 className="icon-instance-node" color="black" />
          <Cart21 className="icon-instance-node" color="black" />
          <div className="div-wrapper">
          <div > <a href="/LoginSignup"><AnimatedButton /></a>   </div> 
                  
          </div>
        </div>
      </div>
      <div className="div-4">
        <div className="div-5">
          <img className="thesis-rafiki" alt="Thesis rafiki" src={thesisRafiki}/>           
          <p className="aprende-a-tu-ritmo">
            Aprende a tu ritmo con lecciones prácticas&nbsp;&nbsp;sumérgete en una comunidad de estudiantes creativos
            como tú, y lleva tus ideas al siguiente nivel. ¡Empieza hoy y descubre todo lo que puedes lograr
          </p>
          <div className="div-6">
            <p className="p">Busca aquí el curso que deseas aprender</p>
            <Search2 className="icon-instance-node-2" color="#090073" />
          </div>
        </div>
        <div className="text-wrapper-3">Todos los cursos</div>
        <div className="div-7">
          <div className="frame-wrapper">
            <div className="div-wrapper-2">
              <div className="text-wrapper-4">%Descuento</div>
            </div>
          </div>
          <div className="div-8">
            <div className="div-7">
              <div className="text-wrapper-5">Titulo del curso</div>
              <div className="div-9">
                <div className="text-wrapper-6">#Nombreautor</div>
                <p className="text-wrapper-7">
                  Texto descriptivo del curso texto descriptivo del curso Texto descriptivo del curso texto descriptivo
                  del curso Máximo 3 líneas de la descripción del curso...
                </p>
                <div className="div-10">
                  <div className="div-11">
                    <Person className="person-5" color="#090073" />
                    <div className="text-wrapper-8">N° estudiantes</div>
                  </div>
                  <div className="div-11">
                    <StarFill className="icon-instance-node-2" color="#090073" />
                    <div className="text-wrapper-8">Valoración</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-9">$Valor</div>
            <div className="div-12">
              <div className="cart-wrapper">
                <Cart21 className="icon-instance-node" color="#090073" />
              </div>
              <div className="div-wrapper-3">
                <div className="text-wrapper-10">Comprar ahora</div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-7">
          <div className="frame-wrapper">
            <div className="div-wrapper-2">
              <div className="text-wrapper-4">%Descuento</div>
            </div>
          </div>
          <div className="div-8">
            <div className="div-7">
              <div className="text-wrapper-5">Titulo del curso</div>
              <div className="div-9">
                <div className="text-wrapper-6">#Nombreautor</div>
                <p className="text-wrapper-7">
                  Texto descriptivo del curso texto descriptivo del curso Texto descriptivo del curso texto descriptivo
                  del curso Máximo 3 líneas de la descripción del curso...
                </p>
                <div className="div-10">
                  <div className="div-11">
                    <Person className="person-5" color="#090073" />
                    <div className="text-wrapper-8">N° estudiantes</div>
                  </div>
                  <div className="div-11">
                    <StarFill className="icon-instance-node-2" color="#090073" />
                    <div className="text-wrapper-8">Valoración</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-9">$Valor</div>
            <div className="div-12">
              <div className="cart-wrapper">
                <Cart21 className="icon-instance-node" color="#090073" />
              </div>
              <div className="div-wrapper-3">
                <div className="text-wrapper-10">Comprar ahora</div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-7">
          <div className="frame-wrapper">
            <div className="div-wrapper-2">
              <div className="text-wrapper-4">%Descuento</div>
            </div>
          </div>
          <div className="div-8">
            <div className="div-7">
              <div className="text-wrapper-5">Titulo del curso</div>
              <div className="div-9">
                <div className="text-wrapper-6">#Nombreautor</div>
                <p className="text-wrapper-7">
                  Texto descriptivo del curso texto descriptivo del curso Texto descriptivo del curso texto descriptivo
                  del curso Máximo 3 líneas de la descripción del curso...
                </p>
                <div className="div-10">
                  <div className="div-11">
                    <Person className="person-5" color="#090073" />
                    <div className="text-wrapper-8">N° estudiantes</div>
                  </div>
                  <div className="div-11">
                    <StarFill className="icon-instance-node-2" color="#090073" />
                    <div className="text-wrapper-8">Valoración</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-9">$Valor</div>
            <div className="div-12">
              <div className="cart-wrapper">
                <Cart21 className="icon-instance-node" color="#090073" />
              </div>
              <div className="div-wrapper-3">
                <div className="text-wrapper-10">Comprar ahora</div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-7">
          <div className="frame-wrapper">
            <div className="div-wrapper-2">
              <div className="text-wrapper-4">%Descuento</div>
            </div>
          </div>
          <div className="div-8">
            <div className="div-7">
              <div className="text-wrapper-5">Titulo del curso</div>
              <div className="div-9">
                <div className="text-wrapper-6">#Nombreautor</div>
                <p className="text-wrapper-7">
                  Texto descriptivo del curso texto descriptivo del curso Texto descriptivo del curso texto descriptivo
                  del curso Máximo 3 líneas de la descripción del curso...
                </p>
                <div className="div-10">
                  <div className="div-11">
                    <Person className="person-5" color="#090073" />
                    <div className="text-wrapper-8">N° estudiantes</div>
                  </div>
                  <div className="div-11">
                    <StarFill className="icon-instance-node-2" color="#090073" />
                    <div className="text-wrapper-8">Valoración</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-9">$Valor</div>
            <div className="div-12">
              <div className="cart-wrapper">
                <Cart21 className="icon-instance-node" color="#090073" />
              </div>
              <div className="div-wrapper-3">
                <div className="text-wrapper-10">Comprar ahora</div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-7">
          <div className="frame-wrapper">
            <div className="div-wrapper-2">
              <div className="text-wrapper-4">%Descuento</div>
            </div>
          </div>
          <div className="div-8">
            <div className="div-7">
              <div className="text-wrapper-5">Titulo del curso</div>
              <div className="div-9">
                <div className="text-wrapper-6">#Nombreautor</div>
                <p className="text-wrapper-7">
                  Texto descriptivo del curso texto descriptivo del curso Texto descriptivo del curso texto descriptivo
                  del curso Máximo 3 líneas de la descripción del curso...
                </p>
                <div className="div-10">
                  <div className="div-11">
                    <Person className="person-5" color="#090073" />
                    <div className="text-wrapper-8">N° estudiantes</div>
                  </div>
                  <div className="div-11">
                    <StarFill className="icon-instance-node-2" color="#090073" />
                    <div className="text-wrapper-8">Valoración</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-9">$Valor</div>
            <div className="div-12">
              <div className="cart-wrapper">
                <Cart21 className="icon-instance-node" color="#090073" />
              </div>
              <div className="div-wrapper-3">
                <div className="text-wrapper-10">Comprar ahora</div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-9">
          <div className="text-wrapper-11">Categorías</div>
          <div className="div-13">
            <div className="div-wrapper-4">
              <div className="text-wrapper-12">Modelado y animación 3D</div>
            </div>
            <div className="div-wrapper-4">
              <div className="text-wrapper-12">Arquitectura digital</div>
            </div>
            <div className="div-wrapper-4">
              <div className="text-wrapper-12">Productividad y software</div>
            </div>
            <div className="div-wrapper-4">
              <div className="text-wrapper-12">Desarrollo web&nbsp;&nbsp;y mobile</div>
            </div>
          </div>
        </div>
        <div className="div-9">
          <div className="div-14" />
          <div className="text-wrapper-13">Conviértete en instructor</div>
          <p className="instructores-de-todo">
            <span className="span">Instructores de todo el mundo enseñan a millones de estudiantes en </span>
            <span className="text-wrapper-14">Udemy.</span>
            <span className="span">
              {" "}
              Proporcionamos las herramientas y las habilidades para que enseñes lo que te apasiona.
            </span>
          </p>
        </div>
      </div>
      <div className="div-15">
        <div className="div-7">
          <div className="text-wrapper-15">¿Quiénes somos?</div>
          <div className="text-wrapper-16">Contáctanos</div>
          <div className="text-wrapper-16">Políticas de privacidad</div>
        </div>
        <div className="div-16">
          <div className="text-wrapper-17">Logo</div>
          <div className="text-wrapper-18">2024</div>
        </div>
      </div>
    </div>      
    
    );
}

export default Principal;