import React from 'react'
import Start from './components/Start'
import Questions from './components/Questions'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {

  //use state to set startGame state to false
  const [startGame, setStartGame] = useState(false)
  const [isSelected, setIsSelected] = useState(false)

  //function handleStartGames changes the state of startGame to true
  function handleStartGame() {
    setStartGame(true)
  }

  function handleSelectedAnswer() {
      setIsSelected(true)
      console.log('clicked')
  }

  return (
    <main>
        <div className="blob-yellow"></div>
        <div className="blob-blue"></div>

        {/**pass handleStartGame as a prop to the Start component */}
        <Start onStartGame={handleStartGame} startGame = {startGame}/>
        
        {/*pass the startGame state as a prop called startGame to the questions component */}
        <Questions startGame = {startGame}/>

          {/**pass handleStartGame as a prop to the Start component */}
        <Footer startGame = {startGame} chooseAnswer = {handleSelectedAnswer}/>

    </main>
  )
}

export default App

  // https://opentdb.com/api.php?amount=5&type=multiple