import React, { useEffect } from 'react'

//onStartGame and StartGame are props passed from App to the Start component
function Start(props) {
    const {startGame, onStartGame, selectTopic, setSelectTopic, selectLevel, setSelectLevel, handleSelectTopic, handleSelectLevel} = props

    useEffect(() => {
        if(!startGame) {
          setSelectTopic('')
          setSelectLevel('')
        }
      }, [startGame])

    return (
        <div className={`${startGame ? 'none' : 'start'}`}>
            <h1>Quizzical</h1>
            <p>Let's have some fun!</p>
            <label htmlFor="topic-select">Pick your Topic</label>
            <select id="topic-select" className="input-select" value={selectTopic} onChange={handleSelectTopic}>
                <option value="">All Topics</option>
                <option value="9">General Knowledge</option>
                <option value="10">Books</option>
                <option value="11">Film</option>
                <option value="12">Music</option>
                <option value="13">Musicals & Theatres</option>
                <option value="14">Television</option>
                <option value="15">Video Games</option>
                <option value="16">Board Games</option>
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
                <option value="29">Comics</option>
                <option value="30">Science: Gadgets</option>
                <option value="31">Japanese Anime & Manga</option>
                <option value="32">Cartoon & Animations</option>
            </select>
            <label htmlFor="level-select">Pick your Challenge Level</label>
            <select id="level-select" className="input-select" value={selectLevel} onChange={handleSelectLevel}>
                <option value="">All Levels</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            {/* onStartGame is passed through props to the onClick callback in the button below*/}
            <button className="btn-start" onClick={onStartGame}>Start quiz</button>
        </div>
    )
}

export default Start