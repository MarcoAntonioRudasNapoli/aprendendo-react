import React, { useState } from 'react'

import './App.css';
import backgroundImage from './assets/background.jpg'

import Header from './components/Header'
/*
  * Componente
  * Propriedade
  * Estado e Imutabilidade
*/

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  /*
    useState retorna um array com duas posições
    1. VAriável com o seu  valor inicial
    2. Função para atualizarmos eesse valor
  */

  function handleAddProject(){
    //projects.push(`Novo projeto ${Date.now()}`);
    
    setProjects([...projects, `Novo projeto ${Date.now()}`])
  }

  return (
  <>
    <Header title="Projects"/>
    <img width={500} src={backgroundImage} alt=""/>
    <ul>
      {projects.map(project => <li key={project}>{project}</li>)}
    </ul>

    <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
  </>
  );
}

export default App;
