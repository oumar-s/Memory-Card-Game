import './App.css';
import Card from './Card/card';

function App() {

  const cards = [
    {
      id: 1,
      content: "A",
      isMatched: false
    },
    {
      id: 1,
      content: "A",
      isMatched: false
    },
    {
      id: 1,
      content: "B",
      isMatched: false
    },
    {
      id: 1,
      content: "B",
      isMatched: false
    },
    {
      id: 1,
      content: "C",
      isMatched: false
    },
    {
      id: 1,
      content: "C",
      isMatched: false
    },
    {
      id: 1,
      content: "D",
      isMatched: false
    },
    {
      id: 1,
      content: "D",
      isMatched: false
    }
  ]
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <button>New Game</button>
      {cards.map((card,idx)=>(<Card key={card.id} card={card}/>))}
    </div>
  );
}

export default App;
