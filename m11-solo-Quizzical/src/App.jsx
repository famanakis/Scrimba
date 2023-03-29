import React from 'react'
import Start from './components/Start'
import Questions from './components/Questions'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {

  //use state to set startGame state to false
  const [startGame, setStartGame] = useState(false)
  //function handle place on button, so when clicked the state of startGame becomes true
  function handleStartGame() {
    setStartGame(true)
  }

  // https://opentdb.com/api.php?amount=5&type=multiple

  return (
    <main>
        <div className="blob-yellow"></div>
        <div className="blob-blue"></div>
        {/**pass handleStartGame as a prop to the Start component */}
        <Start onStartGame={handleStartGame} startGame = {startGame}/>
        {/*pass the startGame state as a prop called startGame to the questions component */}
        <Questions 
          startGame = {startGame}
          question="How would one say goodbye in Spanish?"
          opt1="Adios"
          opt2="Hola"
          opt3="Au Revoir"
          opt4="Salir"
          />
          {/**pass handleStartGame as a prop to the Start component */}
        <Footer startGame = {startGame} />
    </main>
  )
}

export default App
