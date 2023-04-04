import React from "react"

function Footer(props) {
    const {startGame, checkAnswers, count, handleCheckAnswers, handlePlayAgain} = props
    
    return (
        <div className={`${startGame ? 'flex' : 'none'}`}>
            <div className="footer">
                <h2 className={`${checkAnswers ? 'flex' : 'none'}`}>You scored {count}/5 correct answers</h2>
                <button 
                    onClick={checkAnswers ? handlePlayAgain : handleCheckAnswers} 
                    className="btn-check">
                    {checkAnswers ? 'Play Again' : 'Check Answers'}
                </button>
            </div>
        </div>
    )
}

export default Footer
