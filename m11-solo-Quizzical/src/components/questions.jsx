import React from 'react'
import { nanoid } from 'nanoid'


function Question(props) {  
    
    let answers = props.content.answers
    const answerBtns = answers.map(answer => {
        return (
            <button key={nanoid()} className="btn-answer">{answer}</button>
        )  
    })

    return (
        <div className={`questions ${props.startGame ? 'flex' : 'none'}`}>
            <div className="trivia-cards">
                <h2 key={props.id}>{props.content.question}</h2>
                <div className="answers">
                    {answerBtns}
                </div>
                <p></p>
            </div> 
        </div>
    )
}

export default Question

