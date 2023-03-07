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

  console.log(flashcards);
  const [flashcardIndex, setFlashcardIndex] = useState(0);

  const handleNextClick = () => {
    setFlashcardIndex(flashcardIndex + 1);
  }

  const handlePrevClick = () => {
    setFlashcardIndex(flashcardIndex - 1);
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
          isFlipped={false}
        />
        <div className="button-grouping">
          <button className="backButton" onClick={handlePrevClick} disabled={flashcardIndex == 0}>Prev</button>
          <button className="nextButton" onClick={handleNextClick} disabled={flashcardIndex == flashcards.length - 1}>Next</button>
        </div>
      </div> 
    </div>
  )
}

export default App