import React from 'react'

function Footer( {startGame} ) {
    return (
        <div className={`footer ${startGame ? 'flex' : 'none'}`}>
            <button className="btn-check">Check answers</button>
        </div>
    )
}

export default Footer