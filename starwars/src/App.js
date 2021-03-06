import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [char, setChar] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character`)
    .then((res) => {
      console.log("Character Res: ", res.data);
      setChar(res.data.results);
    })
    .catch((err) => {
      console.log("Character Error Occurred: ", err);
    })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="Content">
        {char.map(char => {
          return (
            <Character key={char.id} name={char.name} image={char.image} status={char.status} 
            species={char.species} gender={char.gender}/>);
        })}
      </div>
    </div>
  );
}

export default App;
