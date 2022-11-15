import './App.css';
import React, { useState } from 'react';
import Card from './Card/card';

function App() {
  const cardsList = [
    {
      id: 1,
      content: "A",
      isMatched: false
    },
    {
      id: 2,
      content: "A",
      isMatched: false
    },
    {
      id: 3,
      content: "B",
      isMatched: false
    },
    {
      id: 4,
      content: "B",
      isMatched: false
    },
    {
      id: 5,
      content: "C",
      isMatched: false
    },
    {
      id: 6,
      content: "C",
      isMatched: false
    },
    {
      id: 7,
      content: "D",
      isMatched: false
    },
    {
      id: 8,
      content: "D",
      isMatched: false
    }
  ]

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
 }
  shuffleArray(cardsList);

  const [cards, setCards] = useState(cardsList)
  
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button>New Game</button>
      <div className='card'>
        {cards.map((card,idx)=>(<Card key={card.id} card={card}/>))}
      </div>
    </div>
  );
}

export default App;
