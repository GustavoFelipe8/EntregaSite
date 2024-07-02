import React from 'react'
import './Principal.css'
import { Helmet } from 'react-helmet';

export default function Principal() {
  return (
    <div id='page1'>
      <Helmet>
        <title>Transportadora CHEGOU EM CASA™</title>
        <meta name="description" content="Transportadora CHEGOU EM CASA™: Sua encomenda chegando em sua casa de forma ultra veloz." />
        <meta name="keywords" content="transportadora, encomendas, entrega rápida, CHEGOU EM CASA" />
        <meta name="author" content="Transportadora CHEGOU EM CASA™" />
        <meta property="og:title" content="Transportadora CHEGOU EM CASA™" />
        <meta property="og:description" content="Sua encomenda chegando em sua casa de forma ultra veloz." />
        <meta property="og:image" content="img.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div id='container1'>
        <p><b>Transportadora CHEGOU EM CASA™: Sua encomenda chegando em sua casa de forma ultra veloz.</b></p>
        <img id='img' src='img.jpg'></img>
        <div id='contatos'>
          <p><u>Contatos</u></p>
          <p>Tel.: (xxx) xxxxx-xxxx</p>
          <p>Email: teste@unifei.edu.br</p>
        </div>
      </div>
    </div>
  )
}
