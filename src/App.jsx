import './App.css';
import { useState } from "react";

import facts from "./facts.jsx";
import Flashcard from "./components/Flashcard.jsx";

const flashcards = [];
flashcards.push({
  "question": "Start!",
  "answer": "Press the next button to view the next flashcard."
})
for (const fact of facts) {
  flashcards.push(fact);
}

const App = () => {

  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [cardIsFlipped, setCardIsFlipped] = useState(false);
  const [guess, setGuess] = useState("");
  const [guessIsCorrect, setGuessIsCorrect] = useState(false);
  const [hasGuessed, setHasGuessed] = useState(true);
  
  const firstCardIsShown = flashcardIndex == 0; 

  const inputClass = hasGuessed ? (guessIsCorrect ? "correct" : "incorrect") : {}; 

  const handleNextClick = () => {
    setFlashcardIndex(flashcardIndex + 1);
    setGuess("");
    setHasGuessed(false);
  }

  const handlePrevClick = () => {
    setFlashcardIndex(flashcardIndex - 1);
    setGuess("");
    setHasGuessed(false);
  }

  const handleFlip = () => {
    setCardIsFlipped(!cardIsFlipped);
    console.log("flipped");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasGuessed(true);
    if (guess === flashcards[flashcardIndex].answer) {
      setGuessIsCorrect(true);
    }
    else {
      setGuessIsCorrect(false);
    }
    console.log(inputClass);
  }

  return (
    <div className="App">
      <div className="header"> 
        <h1>NBA Flashcards!</h1>
        <p>How big of an NBA fan are you? Test your knowledge here!</p>
        <p>{facts.length} flashcards</p>
      </div>
      <div className="body">
        <Flashcard 
          question={flashcards[flashcardIndex].question} 
          answer={flashcards[flashcardIndex].answer}
          onFlip={handleFlip}
        />
        <div className="guess-container" hidden={cardIsFlipped || firstCardIsShown}>
          <form onSubmit={handleSubmit}>
            <label>Guess </label>
            <input className={inputClass} type="text" value={guess} onChange={(e) => setGuess(e.target.value)}></input>
            <button>Submit</button>
          </form>
        </div>
        <div className="button-grouping">
          <button className="backButton" onClick={handlePrevClick} disabled={flashcardIndex == 0}>Prev</button>
          <button className="nextButton" onClick={handleNextClick} disabled={flashcardIndex == flashcards.length - 1}>Next</button>
        </div>
      </div> 
    </div>
  )
}

export default App