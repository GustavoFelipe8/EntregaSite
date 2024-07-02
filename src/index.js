import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import Sobre from './components/Sobre';
import Principal from './components/Principal';
import Cadastro from './components/Cadastro';

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );

