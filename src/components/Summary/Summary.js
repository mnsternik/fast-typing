import React, { useContext, useRef, useState } from 'react';

import GameContext from '../../store/game-context';

import classes from './Summary.module.css';

const Summary = (props) => {

    const [scoreSended, setScoreSended] = useState(false); 

    const gameCtx = useContext(GameContext);
    const nameRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        setScoreSended(true); 
        saveScore(); 
        console.log(nameRef.current.value)
    }

    const saveScore = (scoreData) => {
        fetch('endpoint here', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            score: scoreData
          }),
        })
          .then((res) => res.json())
          .then((result) => console.log(result))
          .catch((err) => console.log('error'))
      }

    return (
        <div className={classes.summary}>
            <h2>Finished!</h2>
            <p>You wrote <span>{gameCtx.text.length} characters</span> in <span>{gameCtx.time} seconds </span> and made <span>{gameCtx.mistakes} mistakes!</span></p>
            {!scoreSended ? <form className={classes.save} id="save" onSubmit={submitHandler}>
                <label htmlFor="name">Your name: </label>
                <input id="name" type="string" ref={nameRef}></input>
                <button className={classes.sendBtn}>SAVE</button>
            </form> : <p>Score sended!</p>}
            <div className={classes.buttons}>
                <button onClick={props.onReplay}>TRY AGAIN</button>
                <button onClick={props.onShowMenu}>MENU</button>
            </div>

        </div>
    )
}

export default Summary;
