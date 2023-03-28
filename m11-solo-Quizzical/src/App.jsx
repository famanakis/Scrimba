import React from 'react'
import Intro from './components/intro'
import Questions from './components/questions'
// import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
        <div className="blob-yellow"></div>
        <div className="blob-blue"></div>
        <Intro />
        <Questions 
          question="How would one say goodbye in Spanish?"
          opt1="Adios"
          opt2="Hola"
          opt3="Au Revoir"
          opt4="Salir"
          />
    </main>
  )
}

export default App
