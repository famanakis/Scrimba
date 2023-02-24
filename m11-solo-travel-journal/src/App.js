import React from "react"
import Header from "./components/Header.js"
import Main from "./components/Main.js"
import Footer from "./components/Footer.js"
import {data} from "./data.js"

//console.log(data)

export default function App() {
    const cardInfo = data.map((card)=>{
        return (
            <Main 
                key={card.id}
                {...card}
            />
        )
    })
    return (
        <div>
        <Header />
        {cardInfo}
        <Footer />
        </div>
    )
}
