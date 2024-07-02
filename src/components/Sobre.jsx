import React from 'react'
import './Sobre.css'

export default function Sobre() {
  return (
    <div id="page2">
    <div id="container2">
      <div>
        <p>Na Transportadora CHEGOU EM CASA™, nossa missão é oferecer soluções de transporte de alta qualidade que atendam às necessidades de nossos clientes com eficiência, segurança e pontualidade. Com anos de experiência no setor, nos destacamos pela confiabilidade e pelo compromisso em garantir que cada carga chegue ao seu destino em perfeito estado.</p>
        <p>Fundada em 2024, a Transportadora CHEGOU EM CASA™ começou com um objetivo simples: revolucionar o setor de logística e transporte com um serviço diferenciado e personalizado. Desde então, crescemos e nos adaptamos às novas tecnologias e demandas do mercado, sempre mantendo a excelência no atendimento ao cliente.</p>
      </div>
      <div>
        <p>O presente site foi desenvolvido por Gustavo Felipe Ferreira Soares (<a href='/'>Contato</a>)</p>
        <h1>Explicação do Projeto:</h1>
        <ul>
          <li>Banco de Dados:</li>
          <p>O banco de dados foi implementado seguindo a estrutura <b>[Id (serial, chave primária), CPF, Nome, CEP, Complemento (opcional), Código do Produto]</b>, o qual armazena, principalmente, informações da pessoa, o endereço e informações do produto.</p>
          <li>API:</li>
          <p>A API foi desenvolvida com o intuito de buscar no banco de dados as informações do cliente e do produto, além de editar as informações de um cliente específico ou adicionar novos clientes.</p>
        </ul>
      </div>
    </div>
    </div>
  )
}
