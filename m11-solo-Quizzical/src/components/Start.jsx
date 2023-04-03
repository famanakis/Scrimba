import React, { useEffect } from 'react'

//onStartGame and StartGame are props passed from App to the Start component
function Start(props) {

    useEffect(() => {
        if(!props.startGame) {
          props.setSelectTopic('')
          props.setSelectLevel('')
        }
      }, [props.startGame])

    return (
        <div className={`${props.startGame ? 'none' : 'start'}`}>
            <h1>Quizzical</h1>
            <p>Let's have some fun!</p>
            <label htmlFor="topic-select">Pick your Topic</label>
            <select id="topic-select" className="input-select" value={props.selectTopic} onChange={props.handleSelectTopic}>
                <option value="">--Please choose an option--</option>
                <option value="9">General Knowledge</option>
                <option value="10">Entertainment: Books</option>
                <option value="11">Entertainment: Film</option>
                <option value="12">Entertainment: Music</option>
                <option value="13">Entertainment: Musicals & Theatres</option>
                <option value="14">Entertainment: Television</option>
                <option value="15">Entertainment: Video Games</option>
                <option value="16">Entertainment: Board Games</option>
                <option value="17">Science & Nature</option>
                <option value="18">Science: Computers</option>
                <option value="19">Science: Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Entertainment: Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">Entertainment: Japanese Anime & Manga</option>
                <option value="32">Entertainment: Cartoon & Animations</option>
            </select>
            <label htmlFor="level-select">Pick your Challenge Level</label>
            <select id="level-select" className="input-select" value={props.selectLevel} onChange={props.handleSelectLevel}>
                <option value="">--Please choose an option--</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            {/* onStartGame is passed through props to the onClick callback in the button below*/}
            <button className="btn-start" onClick={props.onStartGame}>Start quiz</button>
        </div>
    )
}

export default Start