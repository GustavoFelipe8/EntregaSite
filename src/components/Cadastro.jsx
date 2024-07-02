import React, { useState } from 'react';
import axios from 'axios';
import "./Cadastro.css";

const url = "https://backend-entrega.vercel.app/usuario/";

function Cadastro() {
  const [cpf, setCpf] = useState('');
  const [novoUsuario, setNovoUsuario] = useState({ nome: '', cep: '', numero: '', complemento: '', produto: '' });
  const [mensagem, setMensagem] = useState('');
  const [usuarioEncontrado, setUsuarioEncontrado] = useState(null);

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
    setMensagem('');
    setUsuarioEncontrado(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoUsuario({ ...novoUsuario, [name]: value });
  };

  const handleCheckCpf = () => {
    axios.get(`${url}${cpf}`)
      .then(response => {
        if (response.data.length > 0) {
          const usuario = response.data[0];
          setUsuarioEncontrado(usuario);
          setMensagem(`CPF já cadastrado: ${usuario.nome}`);
        } else {
          setUsuarioEncontrado(null);
          setMensagem('CPF não cadastrado. Preencha os dados para cadastrar.');
        }
      })
      .catch(error => {
        console.error("Houve um erro ao buscar o usuário:", error);
        setMensagem('Erro ao buscar usuário.');
      });
  };

  const handleCadastro = () => {
    axios.post(url, { cpf, ...novoUsuario })
      .then(response => {
        setMensagem('Usuário cadastrado com sucesso!');
        setCpf('');
        setNovoUsuario({ nome: '', cep: '', numero: '', complemento: '', produto: '' });
      })
      .catch(error => {
        console.error("Houve um erro ao cadastrar o usuário:", error);
        setMensagem('Erro ao cadastrar usuário.');
      });
  };

  return (
    <div id='page3'>
      <div id='container3'>
        <h1>Verificar Usuário</h1>
        <div>
          <input type="text" placeholder="Digite o CPF" value={cpf} onChange={handleCpfChange} />
          <button onClick={handleCheckCpf}>Verificar CPF</button>
        </div>
        {mensagem && <p>{mensagem}</p>}
        {usuarioEncontrado && (
          <div>
            <h2>Informações do Usuário</h2>
            <p><b>Nome:</b> {usuarioEncontrado.nome}</p>
            <p><b>CEP:</b> {usuarioEncontrado.cep}</p>
            <p><b>Número:</b> {usuarioEncontrado.numero}</p>
            <p><b>Complemento:</b> {usuarioEncontrado.complemento}</p>
            <p><b>Produto:</b> {usuarioEncontrado.produto}</p>
          </div>
        )}
        {!usuarioEncontrado && (
          <div>
            <h2>Cadastrar Novo Usuário</h2>
            <input type="text" name="nome" placeholder="Nome" value={novoUsuario.nome} onChange={handleInputChange} />
            <input type="text" name="cep" placeholder="CEP" value={novoUsuario.cep} onChange={handleInputChange} />
            <input type="text" name="numero" placeholder="Número" value={novoUsuario.numero} onChange={handleInputChange} />
            <input type="text" name="complemento" placeholder="Complemento" value={novoUsuario.complemento} onChange={handleInputChange} />
            <input type="text" name="produto" placeholder="Produto" value={novoUsuario.produto} onChange={handleInputChange} />
            <button onClick={handleCadastro}>Cadastrar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cadastro;
