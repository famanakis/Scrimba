import {quotes} from "./quotes.js"

const random = [Math.floor(Math.random()*quotes.length)]
const randomQuote = quotes[random]

function runQuote() {
    document.getElementById("quote-container").innerHTML =
        `<a href="https://scrimba.com/learn/frontend" class="quote" target="_blank">
            <blockquote>${randomQuote.quote}</blockquote>
            <h2 class="quote-author">- ${randomQuote.author}</h2>
        </a>`
    }

runQuote()


