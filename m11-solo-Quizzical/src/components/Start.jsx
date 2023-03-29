import React from 'react'

function Start({startGame}) {
    return (
        <div className="start">
            <h1>Quizzical</h1>
            <p>Let's have some fun!</p>
            <button className="btn-start" onClick={startGame}>Start quiz</button>
        </div>
    )
}

export default Start