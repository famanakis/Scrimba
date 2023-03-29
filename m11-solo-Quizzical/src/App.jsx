import React from 'react'
import Start from './components/Start'
import Questions from './components/Questions'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {

  // https://opentdb.com/api.php?amount=5&type=multiple

  return (
    <main>
        <div className="blob-yellow"></div>
        <div className="blob-blue"></div>
        <Start />
        <Questions 
          question="How would one say goodbye in Spanish?"
          opt1="Adios"
          opt2="Hola"
          opt3="Au Revoir"
          opt4="Salir"
          />
        <Footer />
    </main>
  )
}

export default App
