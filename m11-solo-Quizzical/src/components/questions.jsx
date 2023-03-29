import React from 'react'

function Questions(props) {
    return (
        <div className="questions">
            <h2>{props.question}</h2>
            <div className="answers">
                <button className="btn-answer">{props.opt1}</button>
                <button className="btn-answer">{props.opt2}</button>
                <button className="btn-answer">{props.opt3}</button>
                <button className="btn-answer">{props.opt4}</button>
            </div>
            <p></p>
        </div>
    )
}



export default Questions