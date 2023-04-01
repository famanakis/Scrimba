import React from "react"

function Footer(props) {

    return (
        <div className={`footer ${props.startGame ? 'flex' : 'none'}`}>
            <h2 className={`${props.checkAnswers ? 'flex' : 'none'}`}>You scored {props.count}/5 correct answers</h2>
            <button onClick={props.checkAnswers ? props.handleRefresh : props.handleCheckAnswers} className="btn-check">{props.checkAnswers ? 'Play Again' : 'Check Answers'}</button>
        </div>
    )
}

export default Footer