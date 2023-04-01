import React from 'react'
import Start from './components/Start'
import Question from './components/Questions'
import { nanoid } from 'nanoid'
import he from 'he'
import { shuffle } from './shuffle.js'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'

function App() {
  //use state to set startGame state to false
  const [startGame, setStartGame] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState({})
  const [checkAnswers, setCheckAnswers] = useState(false)
  const [count, setCount] = useState(0)
  const [questions, setQuestions] = useState([])

//useEffect makes call to outside source OpenTriviaDB API
  useEffect(()=> {
    async function getQuestions() {
      const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      const data = await res.json()
      let triviaArr = []
      data.results.forEach(item => {
        //use he to decode the data to avoid HTML entities in the text
        const decodedQuestion = he.decode(item.question)
        const decodedCorrectAnswer = he.decode(item.correct_answer)
        const decodedIncorrectAnswers = item.incorrect_answers.map(answer => he.decode(answer))
        //push the following object with data into triviaArr
        triviaArr.push({
          id:nanoid(), 
          question:decodedQuestion, 
          answers:shuffle([decodedCorrectAnswer, ...decodedIncorrectAnswers]), 
          correct:decodedCorrectAnswer
         })
      })
      //setQuestions value becomes triviaArr
      setQuestions(triviaArr)
    }
      //call function getQuestions()
      getQuestions()
  }, [count])

  //create triviaElement which is a Question component with props to pass API data from App to the component
  const triviaElement = questions ? questions.map(item => {
    return (
      <Question 
      key={item.id}
      id={item.id}
      content={item}
      correct={item.correct}
      startGame = {startGame}
      handleSelected = {(answer) => handleSelected(item.id, answer)}
      selectedAnswer = {selectedAnswer[item.id]}
      handleCheckAnswers = {handleCheckAnswers}
      checkAnswers = {checkAnswers}
      />
      )
    }) : []


  //function handleStartGames changes the state of startGame to true
  function handleStartGame() {
    setStartGame(true)
  }

  //callback function to handle state of buttons (selected/not-selected) by each question grouping
  const handleSelected = (questionId, answer) => {
    setSelectedAnswer(prevState => ({
      ...prevState,
      [questionId]: answer,
    }))
  }

  //function to show correct answers when scores are checked
  function handleCheckAnswers() {
    setCheckAnswers(true)
    
  }

  //function to handle Score/Count when scores are checked
  function handleCount() {
    setCount()
  }

  return (
    <main>
        <div className={startGame ? 'blob-yellow-small' : 'blob-yellow'}></div>
        <div className={startGame ? 'blob-blue-small' : 'blob-blue'}></div>

        <Start onStartGame={handleStartGame} startGame = {startGame}/>
        
        {triviaElement}

        <Footer startGame = {startGame} handleCount={handleCount} handleCheckAnswers = {handleCheckAnswers} checkAnswers={checkAnswers} count={count}/>

    </main>
  )
}

export default App

