import React from 'react'
import { shuffle } from '../shuffle.js';

import data from '../triviaData.js'

function Questions(props) {
    //Fisher-Yates shuffle
    // function shuffle(arr) {
    //     var i = arr.length, j, temp;
    //     while(--i > 0){
    //         j = Math.floor(Math.random()*(i+1));
    //         temp = arr[j];
    //         arr[j] = arr[i];
    //         arr[i] = temp;
    //     }
    //     return arr
    //     }

        const triviaCards = data.map(i => {
            const correctAnswer = {value: i.correct_answer, isSelected: false}
            const incorrectAnswers = i.incorrect_answers.map(item => {return {value: item, isSelected: false}})
            const answers = [correctAnswer, ...incorrectAnswers]
            const shuffledAnswers = shuffle(answers)

            return (
                <div className="trivia-cards">
                    <h2 key={i.question}>{i.question}</h2>
                    <div className="answers">
                        {shuffledAnswers.map(answer => {
                            return <button key={answer.value} className="btn-answer">{answer.value}</button>
                        })}
                    </div>
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