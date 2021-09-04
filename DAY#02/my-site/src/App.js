import React from 'react';
import './App.css';
import imgPeoples from './images/peoples.svg';

function App() {
  return (
    <div class="reactApp">
    <img src={imgPeoples} alt="imagem-pessoas" />
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <button>COMENTAR</button>
    </div>
  );
}

export default App;
