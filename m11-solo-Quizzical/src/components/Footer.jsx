import React from "react"

function Footer(props) {
    const {startGame, checkAnswers, handleRefresh, count, handleCheckAnswers} = props

    return (
        <div className={`footer ${startGame ? 'flex' : 'none'}`}>
            <h2 className={`${checkAnswers ? 'flex' : 'none'}`}>You scored {count}/5 correct answers</h2>
            <button onClick={checkAnswers ? handleRefresh : handleCheckAnswers} className="btn-check">{checkAnswers ? 'Play Again' : 'Check Answers'}</button>
        </div>
    )
}

export default Footer