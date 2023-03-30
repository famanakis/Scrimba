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
            const correctAnswer = <button key={i.correct_answer} className="correct btn-answer">{i.correct_answer}</button>
            const incorrectAnswers = i.incorrect_answers.map(item => <button key={item} className="wrong btn-answer">{item}</button>)
            const answers = [correctAnswer, ...incorrectAnswers]
            const shuffledAnswers = shuffle(answers)

            return (
                <div className="trivia-cards">
                    <h2 key={i.question}>{i.question}</h2>
                    <div className="answers">{shuffledAnswers}</div>
                    <p></p>
                </div> 
            )
        })                 

    return (
        <div className={`questions ${props.startGame ? 'flex' : 'none'}`}>
            {triviaCards}
            <button className="btn-check">Check answers</button>
        </div>
    )
}

export default Questions