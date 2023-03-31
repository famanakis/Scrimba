import React from "react"

function Footer(props) {
    return (
        <div className={`footer ${props.startGame ? 'flex' : 'none'}`}>
            <button className="btn-check">Check answers</button>
        </div>
    )
}

export default Footer