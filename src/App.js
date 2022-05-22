import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characterData, setCharacterData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
      .then(res => {
        console.log(res.data)
        setCharacterData(res.data);
      })
      .catch(err => console.error(err));
  }, [])

 
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characterData && characterData.map((character, index) => <Character  key={index} card={character.name} gender={character.gender} height={character.height} mass={character.mass} hairColor={character.hair_color} />)}
      <footer>
        <p>
          {/* empty paragraph for spacing... */}
        </p>
      </footer>
    </div>

  );
}

export default App;
