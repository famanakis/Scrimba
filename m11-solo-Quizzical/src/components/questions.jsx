import React from 'react'
import { nanoid } from 'nanoid'

function Question(props) {     
    const answers = props.content.answers
    const answerBtns = answers.map((answer) => (
      <button
        key={nanoid()}
        onClick={() => props.handleSelected(answer)}
        className={`btn-answer ${props.selectedAnswer === answer ? 'selected' : 'not-selected'}`}
      >
        {answer}
      </button>
    ))
  
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



