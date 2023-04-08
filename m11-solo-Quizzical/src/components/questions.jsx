import React, { useEffect } from 'react'
import { nanoid } from 'nanoid'

function Question(props) { 
    const { content, selectedAnswer, checkAnswers, correct, handleSelected, id, startGame, handleCount } = props    
    const { answers, question } = content
    
    const answerBtns = answers.map((answer) =>  {

        const btnState = checkAnswers && 
                        (selectedAnswer === answer ? (selectedAnswer === correct ? 'correct' : 'wrong') : 
                                                     (answer === correct ? 'showCorrect' : 'neutral'))
        const btnClass = `btn-answer ${btnState} ${selectedAnswer === answer ? 'selected' : 'not-selected'}`     
        
        return (
            <button
                key={nanoid()}
                onClick={() => handleSelected(answer)}
                className={btnClass} 
                disabled={checkAnswers}   
            >
                {answer}
            </button>
        )
    })  

    useEffect(() => {
        if (checkAnswers) {
            if(selectedAnswer === correct) {
                handleCount(1)
            }
        }
    }, [checkAnswers])

    return (
        <div className={`questions ${startGame ? 'flex' : 'none'}`}>
            <div className="trivia-cards">
                <h2 key={id}>{question}</h2>
                <div className="answers">{answerBtns}</div>
                <p></p>
            </div> 
        </div>
    )
}

export default Question



