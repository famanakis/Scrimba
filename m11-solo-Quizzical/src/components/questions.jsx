import React from 'react'
import { nanoid } from 'nanoid'

function Question(props) { 
    const { content, selectedAnswer, checkAnswers, correct, handleSelected, id, startGame } = props    
    const { answers, question } = content
    
    const answerBtns = answers.map((answer) =>  {
        const btnClass = `btn-answer ${selectedAnswer === answer ? 'selected' : 'not-selected'} ${checkAnswers ? 'answered' : ''}`
        const btnId = checkAnswers ? 
                        (selectedAnswer === answer ? (selectedAnswer === correct ? 'correct' : 'wrong') : 'neutral') :
                        undefined

        // if checkAnswers is true then --- if selectedAnswer is correct then add to count else nothing
        // if(checkAnswers && selectedAnswer === correct) {
        //     props.handleCount()
        // }

        return (
            <button
                key={nanoid()}
                onClick={() => handleSelected(answer)}
                className={btnClass}
                id={btnId}   
                disabled={checkAnswers ? true : false}     
            >
                {answer}
            </button>
        )
    })

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



