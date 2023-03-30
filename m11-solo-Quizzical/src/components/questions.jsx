import React from 'react'

import data from '../triviaData.js'

function Questions(props) {
    //Fisher-Yates shuffle
    function shuffle(arr) {
        var i = arr.length, j, temp;
        while(--i > 0){
            j = Math.floor(Math.random()*(i+1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr
        }

        const triviaCards = data.map(i => {
            const correctBtn = <button className="correct">{i.correct_answer}</button>
            const incorrectBtns = i.incorrect_answers.map(item => <button className="wrong">{item}</button>)
            const answers = [correctBtn, ...incorrectBtns]
            const shuffledAnswers = shuffle(answers)
            return (
                <div key={i.question}>
                     <h2>{i.question}</h2>
                    <div className="answers">{shuffledAnswers}</div>
                </div> 
            )
        })                 

    return (
        <div className={`questions ${props.startGame ? 'flex' : 'none'}`}>
            {triviaCards}
            <p></p>
        </div>
    )
}

export default Questions