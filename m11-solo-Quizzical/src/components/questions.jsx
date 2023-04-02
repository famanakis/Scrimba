import React from 'react'
import { nanoid } from 'nanoid'

function Question(props) {     
    const answers = props.content.answers
    const answerBtns = answers.map((answer) =>  {
        return (
            <button
                key={nanoid()}
                onClick={() => props.handleSelected(answer)}
                className={`btn-answer ${props.selectedAnswer === answer ? 'selected' : 'not-selected'} ${props.checkAnswers ? 'answered' : ''}`}
                id={props.checkAnswers ? 
                    (props.selectedAnswer === answer ? (props.selectedAnswer === props.correct ? 'correct' : 'wrong') : 'neutral') :
                    undefined}        
            >
                {answer}
            </button>
        )
    })

    // const checkCorrect = (props.checkAnswers && props.selectedAnswer === props.correct && props.handleCount())

// console.log(props.selectedAnswer)
// console.log(props.correct)
    return (
        <>
            <div className={`questions ${props.startGame ? 'flex' : 'none'}`}>
                <div className="trivia-cards">
                    <h2 key={props.id}>{props.content.question}</h2>
                    <div className="answers">{answerBtns}</div>
                    <p></p>
                </div> 
            </div>
        </>
    )
}

export default Question



