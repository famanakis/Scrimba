import React from 'react'

//onStartGame and StartGame are props passed from App to the Start component
function Start(props) {
    return (
        <div className={`${props.startGame ? 'none' : 'start'}`}>
            <h1>Quizzical</h1>
            <p>Let's have some fun!</p>
            {/* onStartGame is passed through props to the onClick callback in the button below*/}
            <button className="btn-start" onClick={props.onStartGame}>Start quiz</button>
        </div>
    )
}

export default Start