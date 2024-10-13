// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Principal from './components/01principal';
import Principal_Configuracion from './components/00principal_conf';
import Student from './components/student';
import LoginSignup from './components/LoginSignup';
import LoginSignupAdmin from './components/LoginSignupAdm';
import Persona from './components/persona';
import Usuario from './components/usuario';
import CursoMD1 from './components/cursoMD1';

 

function App() {
    return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page4" element={<Page4 />} />
                <Route path="/Page3" element={<Page3 />} />
                <Route path="/Student" element={<Student />} />
                <Route path="/LoginSignup" element={<LoginSignup />} />
                <Route path="/Principal_Configuracion" element={<Principal_Configuracion />} />
                <Route path="/Page014" element={<Page014 />} />
                <Route path="/LoginSignupAdmin" element={<LoginSignupAdmin />} />
                <Route path="/Persona" element={<Persona />} />
                <Route path="/Usuario" element={<Usuario />} />
                <Route path="/CursoMD1" element={<CursoMD1 />} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;