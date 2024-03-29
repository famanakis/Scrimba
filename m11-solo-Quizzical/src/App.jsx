import React, { useState, useEffect } from 'react'
import Start from './components/Start'
import Question from './components/Questions'
import Footer from './components/Footer'
import { nanoid } from 'nanoid' //unique string ID generator
import he from 'he' //formats html entities from API
import { shuffle } from './shuffle.js'

function App() {
  const [startGame, setStartGame] = useState(false) //game state is either not started or started
  const [selectedAnswer, setSelectedAnswer] = useState({}) //state of questions to determine if they have been selected or not
  const [checkAnswers, setCheckAnswers] = useState(false) //answers have either been checked (true) or are not yet checked(false)
  const [apiCallCount, setApiCallCount] = useState(1) //apiCallCount is at one 
  const [count, setCount] = useState(0) //count state keeps track of selected answers that are correct
  const [questions, setQuestions] = useState([]) //manages state of questions on page
  const [selectLevel, setSelectLevel] = useState('')
  const [selectTopic, setSelectTopic] = useState('')

//useEffect to make call to outside source OpenTriviaDB API
  useEffect(()=> {
    async function getQuestions() {
      const res = await fetch(`https://opentdb.com/api.php?amount=5&type=multiple&category=${selectTopic}&difficulty=${selectLevel}`)
      const data = await res.json()
      const triviaArr = data.results.map(item => {
        //use he to decode the data to avoid HTML entities in the text
        const decodedQuestion = he.decode(item.question)
        const decodedCorrectAnswer = he.decode(item.correct_answer)
        const decodedIncorrectAnswers = item.incorrect_answers.map(answer => he.decode(answer))
        return {
          id:nanoid(), 
          question:decodedQuestion, 
          answers:shuffle([decodedCorrectAnswer, ...decodedIncorrectAnswers]), 
          correct:decodedCorrectAnswer
         }
      })
      //setQuestions value becomes triviaArr
      setQuestions(triviaArr)
    }
      //call function getQuestions()
      startGame && getQuestions()
  }, [apiCallCount,startGame])

  //create triviaElement which is a Question component with props to pass API data from App to the component
  const triviaElement = questions.map(item => (
    <Question 
      key={item.id}
      id={item.id}
      content={item}
      correct={item.correct}
      startGame={startGame}
      handleSelected={(answer) => setSelectedAnswer({ ...selectedAnswer, [item.id]: answer })}
      selectedAnswer={selectedAnswer[item.id]}
      handleCheckAnswers={() => setCheckAnswers(true)}
      checkAnswers={checkAnswers}
      handleCount={handleCount}
    />
  ))

  //handle the level and topic selections by the user
  const handleSelectLevel = (event) => {
    setSelectLevel(event.target.value)
  }

  const handleSelectTopic = (event) => {
    setSelectTopic(event.target.value)
  }

  //callback function handleStartGames changes the state of startGame to true
  const handleStartGame = () => {
    setStartGame(true)
  }

  //to handle single ApiCall
  const handleApiCall = () => {
    setApiCallCount(prevCount => prevCount + 1)
  }

  //to start another round with the same selected topic and level
  const handlePlayAgain = () => {
    handleApiCall()
    setCheckAnswers(false)
    setCount(0)
  }

  //to go to home screen, select new topic and level, make api call
  const handleHome = () => {
    setCheckAnswers(false)
    setCount(0)
    setStartGame(false)
    handleApiCall()
  }

  // function to handle Score/Count when scores are checked
 function handleCount(numCorrect) {
    setCount(prevCount => prevCount + numCorrect)
  }

  return (
      <main>
        <div className="main-content">
          <button className={`btn-home ${startGame ? 'flex' : 'none'}`} onClick={handleHome}><i className="fa-solid fa-house"></i></button>
          <div className={startGame ? 'blob-yellow-small' : 'blob-yellow'}></div>
          <div className={startGame ? 'blob-blue-small' : 'blob-blue'}></div>

          <Start onStartGame={handleStartGame} 
            startGame={startGame}
            selectLevel = {selectLevel}
            setSelectLevel = {setSelectLevel}
            handleSelectLevel = {handleSelectLevel}
            selectTopic = {selectTopic}
            setSelectTopic = {setSelectTopic}
            handleSelectTopic = {handleSelectTopic}
          />
          
          {triviaElement}

          <Footer startGame = {startGame}
            handleCheckAnswers={() => {handleCount(count), setCheckAnswers(true)}} 
            checkAnswers={checkAnswers} 
            count={count}
            handlePlayAgain={handlePlayAgain}
          />
        </div>
        
      </main>
  )
}

export default App

