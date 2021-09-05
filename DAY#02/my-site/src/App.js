import React, {useState} from 'react';
import './App.css';
import imgPeoples from './images/peoples.svg';

function App() {

  const [commentary, setCommentary] = useState()
  const [allCommentaries, setAllCommentaries] = useState([])

  function comment(){
    const currentAllCommentaries = [... allCommentaries, commentary] 
    setAllCommentaries(currentAllCommentaries)
    let weTextArea = document.querySelector('textarea')
    weTextArea.value= ""
    setCommentary("")
  }
  
  function text(event){
    if (event.code === "Enter"){
      comment()
      let weTextArea = document.querySelector('textarea')
      weTextArea.value = ""
      setCommentary("")
    }else{
      setCommentary(event.target.value)
    }
  }



  return (
    <div>
    <h1 class="title">Comente Aqui !!!</h1>
    <img src={imgPeoples} alt="peoples-image" />
    <textarea onChange={text} onKeyUp={text} cols="40" rows="8"></textarea>
    <button onClick={comment}>COMENTAR</button>
    <ul>
    {allCommentaries.map((commentary) => (
        <li class="item" key={allCommentaries.indexOf(commentary)}>{commentary}</li>
    ))}
    </ul>
    </div>
  );
}

export default App;
