import React from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css"

export default function Menu() {
  return (
    <header>
      <nav id='menu'>
        <ul>
          <li><Link to="/"><img id="logomenu" src="LogoSite.png"></img></Link></li>
          <div>
            <li><Link to="/"> Início </Link> </li>
            <li><Link to="/sobre"> Sobre </Link> </li>
            <li><Link to="/cadastro"> Cadastro </Link> </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}