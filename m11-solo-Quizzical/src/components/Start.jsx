import React from 'react'

//onStartGame and StartGame are props passed from App to the Start component
function Start({onStartGame, startGame}) {
    return (
        <div className={`start ${startGame ? 'none' : 'block'}`}>
            <h1>Quizzical</h1>
            <p>Let's have some fun!</p>
            {/* onStartGame is passed through props to the onClick callback in the button below*/}
            <button className="btn-start" onClick={onStartGame}>Start quiz</button>
        </div>
    )
}

export default Start