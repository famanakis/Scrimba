import React from 'react'

function Start() {

    function startGame() {
        console.log('clicked')
        document.getElementsByClassName('.start').style.display = "none"
        document.getElementsByClassName('.questions').style.display = "flex"
    }

    return (
        <div className="start">
            <h1>Quizzical</h1>
            <p>Let's have some fun!</p>
            <button className="btn-start" onClick={startGame}>Start quiz</button>
        </div>
    )
}

export default Start