import React from 'react'

import data from '../triviaData.js'

function Questions(props, chooseAnswer) {
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
            const correctBtn = <button key={i.correct_answer} className="correct">{{value: i.correct_answer, isSelected: false}}</button>
            const incorrectBtns = i.incorrect_answers.map(item => <button key={item} className="wrong">{{value: item, isSelected: false}}</button>)
            const answers = [correctBtn, ...incorrectBtns]
            const shuffledAnswers = shuffle(answers)

            return (
                <div>
                     <h2 key={i.question}>{i.question}</h2>
                    <div className="answers" onClick={chooseAnswer}>{shuffledAnswers}</div>
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