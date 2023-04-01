import React from "react"

function Footer(props) {

    return (
        <div className={`footer ${props.startGame ? 'flex' : 'none'}`}>
            <p className={`${props.checkAnswers ? 'flex' : 'none'}`}>You scored 3/5 answers</p>
            <button onClick={props.checkAnswers ? props.handleCheckAnswers : props.handleCheckAnswers} className="btn-check">{props.checkAnswers ? 'Play Again' : 'Check Answers'}</button>
        </div>
    )
}

export default Footer