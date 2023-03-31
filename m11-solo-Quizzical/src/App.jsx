import React from 'react'
import Start from './components/Start'
import Questions from './components/Questions'
import { nanoid } from 'nanoid'
import { shuffle } from './shuffle.js'
// model.id = nanoid()
import { useState, useEffect } from 'react'

function App() {

  //use state to set startGame state to false
  const [startGame, setStartGame] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [count, setCount] = useState(0)
  const [questions, setQuestions] = useState([])

  useEffect(()=> {
    async function getQuestions() {
      const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      const data = await res.json()
      let triviaArr = []
      data.results.forEach(item => {
        triviaArr.push({id:nanoid(), question:item.question, answers:shuffle([item.correctAnswer, ...item.incorrectAnswers]), correct:item.correct_answer, selected:null, checked:false})
      })
      setQuestions(triviaArr)
    }
      getQuestions()
  }, [count])

  const triviaElement = questions ? questions.map(item => {
    return (<Question 
              key={item.id}
              id={item.id}
              content={item}
              />)
    }) : []


  //function handleStartGames changes the state of startGame to true
  function handleStartGame() {
    setStartGame(true)
  }

  return (
    <main>
        <div className="blob-yellow"></div>
        <div className="blob-blue"></div>

        <Start onStartGame={handleStartGame} startGame = {startGame}/>
       
        <Questions startGame = {startGame}/>

    </main>
  )
}

export default App

  // https://opentdb.com/api.php?amount=5&type=multiple