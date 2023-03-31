import React from 'react'
import Start from './components/Start'
import Questions from './components/Questions'
import { nanoid } from 'nanoid'
// model.id = nanoid()
import { useState, useEffect } from 'react'

function App() {

  //use state to set startGame state to false
  const [startGame, setStartGame] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)


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