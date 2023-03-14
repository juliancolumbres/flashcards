import "./Flashcard.css"
import { useState } from "react";

const Flashcard = (props) => {

    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
        props.onFlip();
    }

    return (
        <div className="card" onClick={handleClick}>
            {isFlipped ? props.answer : props.question}
        </div>
    )
}

export default Flashcard;