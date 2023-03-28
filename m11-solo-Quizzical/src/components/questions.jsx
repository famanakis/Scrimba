import React from 'react'

function Questions(props) {
    return (
        <div className="questions">
            <h2>{props.question}</h2>
            <div className="answers">
                <button>{props.opt1}</button>
                <button>{props.opt2}</button>
                <button>{props.opt3}</button>
                <button>{props.opt4}</button>
            </div>
            <p></p>
        </div>
    )
}

export default Questions