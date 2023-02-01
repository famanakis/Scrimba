import React from "react" 

export default function Main() {
    return (
        <div className="main">
            <div className="intro">
                <h2>Farrah Mamanakis</h2>
                <h5>Frontend Developer</h5>
                <p>famanakis.website</p>
            </div>
            <div>
                <button className="btn email">
                    <i className="fa-solid fa-envelope"></i>Email</button>
                <button className="btn linkedIn">
                    <i className="fa-brands fa-linkedin"></i>LinkedIn</button>
            </div>
            <div>
                <h4>About</h4>
                <p>I am a frontend developer inerested in making attractive websites with pleasing UI design. I try to keep up with best practices and cient security needs. I enjoy learning new techology as it emerges in the ever-evolving tech/dev world. </p>
                <h4>Strengths</h4>
                <p>Attention to Detail. Knowledge of Agile/Scrum. Working with ASD. College Minor in Business Management. Accounts Management Experience.</p>
                <h4>Interests</h4>
                <p>Food expert. Classical piano. KDrama fanatic. Dance Cardio enthusiast. Beach and Lakefront fan.</p>
            </div>
        </div>
    )
}