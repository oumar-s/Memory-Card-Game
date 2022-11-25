import './App.css';
import React, { useState } from 'react';
import Card from './Card/card';
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
    isFlipped: false
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

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(cardsList);


function App() {
  
  const [cards, setCards] = useState(cardsList);
  //const [choice1, setChoice1] = useState({card: {}, choice: false})
  //const [choice2, setChoice2] = useState({card: {}, choice: false})
  let choice1 = {card: {}, choice: false};
  let choice2 = {card: {}, choice: false};


  

  function handleButtonClick(){  
    shuffleArray(cardsList);

    const newCardsList = cardsList.map(card => {
        return {...card, id: Math.random(), isFlipped: false, isMatched: false};
    })
    choice1 = {card: {}, choice: false};
    choice2 = {card: {}, choice: false};
    setCards(newCardsList);
    
    //setChoice1({card: {}, choice: false});
    //setChoice2({card: {}, choice: false});
  }

  //A function to set the player’s choices when the back of a card is clicked
  function handleChoice(card){
    if(choice1.choice === false){
      card.isFlipped = true;
      choice1 = {card: card, choice: true};
      //setChoice1({card: card, choice: true});
      return;
    }
    else if(choice2.choice === false){
      card.isFlipped = true;
      choice2 = {card: card, choice: true};
      //setChoice2({card: card, choice: true});

      //return;
    }

    if(choice1.card.content === choice2.card.content){
      choice1.card.isMatched = true;
      choice2.card.isMatched = true;
      const newCardsList = cards.map(card => {
        if(card.isMatched !== true)
          return {...card, isFlipped: false};
        else
          return card;
        });
        choice1 = {card: {}, choice: false};
        choice2 = {card: {}, choice: false};
        //setChoice1({card: {}, choice: false});
        //setChoice2({card: {}, choice: false});
        setCards(newCardsList)
        return;
    } 
    if(choice1.card.content !== choice2.card.content){
      const newCardsList = cards.map(card => {
      if(card.isMatched !== true)
        return {...card, isFlipped: false};
      else
        return card;
      });
      choice1 = {card: {}, choice: false};
      choice2 = {card: {}, choice: false};
      //setChoice1({card: {}, choice: false});
      //setChoice2({card: {}, choice: false});
      setCards(newCardsList);
    }
      
  }

  
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button onClick={handleButtonClick}>New Game</button>
      <div className='card'>
        {cards.map((card)=>(<Card key={card.id} card={card} handleChoice={handleChoice} isFlipped={false} />))}
      </div>
    </div>
  );
}

export default App;
