// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './components/01principal';
import Page2 from './components/page2'; 
import Page3 from './components/page3'; 
import Page4 from './components/page4';
import Student from './components/student';
import LoginSignup from './components/LoginSignup';

 

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page4" element={<Page4 />} />
                <Route path="/Page3" element={<Page3 />} />
                <Route path="/Student" element={<Student />} />
                <Route path="/LoginSignup" element={<LoginSignup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;