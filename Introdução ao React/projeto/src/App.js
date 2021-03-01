import React, { useState, useEffect } from 'react'
//import api from './services/api';

import './App.css';

import Header from './components/Header'
/*
  * Componente
  * Propriedade
  * Estado e Imutabilidade
*/

function App() {
  const [projects, setProjects] = useState([]); /* Dentro da array deve conter objetos, e não strings*/
  /*
    useState retorna um array com duas posições
    1. VAriável com o seu  valor inicial
    2. Função para atualizarmos eesse valor
  */

  /*useEffect(() => {
    api.get('rota').then(response => {
    setProjects(response.data);
    })
  }, [])*/

  /*
    useEffect dispara um função na exibição
    1. Qual função eu quero disparar?
    2. Quando disparar? (array de dependências => quando vazio executa quando o componente é exibido em tela)
  */
  
  async function handleAddProject(){
    //projects.push(`Novo projeto ${Date.now()}`);
    
    setProjects([...projects, `Novo projeto ${Date.now()}`]) //comentaria se tivesse uma api

    /*const response = await api.post('rota',{
      title: `Novo projeto ${Date.now()}`,
      owner: "Diego Fernandes"*/
    //}) /*podemos fazer uma nova requisição*/
    /*const project = response.data;

    setProjects(...projects, project)*/
  /*
    Ao invés de usar projects na key, podemos utilizar o id da API
  */
  return (
  <>
    <Header title="Projects"/>
  
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)} 
      </ul>

    <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
  </>
  );
}

export default App;
