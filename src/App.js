import './App.css';
import React, { useState } from 'react';
import Card from './Card/card';

function App() {
  let cardsList = [
    {
      id: 1,
      content: "A",
      isMatched: false,
      isFlipped: false
    },
    {
      id: 2,
      content: "A",
      isMatched: false,
      isFlipped: false
    },
    {
      id: 3,
      content: "B",
      isMatched: false,
      isFlipped: false
    },
    {
      id: 4,
      content: "B",
      isMatched: false,
      isFlipped: false
    },
    {
      id: 5,
      content: "C",
      isMatched: false,
      isFlipped: true
    },
    {
      id: 6,
      content: "C",
      isMatched: false,
      isFlipped: false
    },
    {
      id: 7,
      content: "D",
      isMatched: false,
      isFlipped: false
    },
    {
      id: 8,
      content: "D",
      isMatched: false,
      isFlipped: false
    }
  ]
  const [cards, setCards] = useState(cardsList);

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
 }
  shuffleArray(cardsList);

  function handleButtonClick(){  
    const newCardsList = [];   
    for(let i = 0; i < cardsList.length; i++)
    {
      newCardsList.push({id: Math.random(), content: cardsList[i].content, isMatched: false, isFlipped: false});
    }
  
    setCards(newCardsList)
    
  }
  
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={handleButtonClick}>New Game</button>
      <div className='card'>
        {cards.map((card)=>(<Card key={card.id} card={card} isFlipped={false} />))}
      </div>
    </div>
  );
}

export default App;
