import React from 'react'
import { nanoid } from 'nanoid'
// import { shuffle } from '../shuffle.js'

// import data from '../triviaData.js'

function Question(props) {  
    
    let answers = props.content.answers
    console.log(answers)
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
                    {/* {props.content.answers} */}
                    {/* {props.content.answers.map(i => {<input value={i} className="btn-answer" />})} */}
                </div>
                <p></p>
            </div> 
        </div>
    )
}

export default Question

{/* <input value={props.content.answers} className="btn-answer" /> */}