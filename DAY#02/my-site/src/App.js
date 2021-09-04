import React, {useState} from 'react';
import './App.css';
import imgPeoples from './images/peoples.svg';

function App() {

  const [commentary, setCommentary] = useState()
  const [allCommentaries, setAllCommentaries] = useState([])

  function comment(){
    const currentAllCommentaries = [... allCommentaries, commentary] 
    setAllCommentaries(currentAllCommentaries)
  }

  function weText(event){
    setCommentary(event.target.value)
  }
  


  return (
    <div>
    <img src={imgPeoples} alt="peoples-image" />
    <textarea onChange={weText} cols="40" rows="4"></textarea>
    <button onClick={comment}>COMENTAR</button>
    <ul>
    {allCommentaries.map((commentary) => (
      <li key={allCommentaries.indexOf(commentary)}>{commentary}</li>
    ))}
    </ul>
    </div>
  );
}

export default App;
