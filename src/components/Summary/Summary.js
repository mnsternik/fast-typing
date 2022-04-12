import React, { useContext, useRef, useState } from 'react';

import GameContext from '../../store/game-context';

import useHttp from '../../hooks/useHttp';

import classes from './Summary.module.css';

const Summary = (props) => {

    const [scoreSended, setScoreSended] = useState(false);

    const gameCtx = useContext(GameContext);
    const nameRef = useRef();

    const { sendRequest: sendData } = useHttp();

    const submitHandler = (event) => {
        event.preventDefault();
        const scoreData = {
            name: nameRef.current.value,
            time: gameCtx.time,
            wordsPerMinute: (gameCtx.text.split(' ').length / gameCtx.time) * 60,
            textLength: gameCtx.text.length,
            mistakes: gameCtx.mistakes
        }
        sendData({
            url: 'https://type-faster-fd0c0-default-rtdb.firebaseio.com/scores.json',
            method: 'POST',
            body: scoreData,
        }, console.log);
        setScoreSended(true);
    };

    return (
        <div className={classes.summary}>
            <h2>Finished!</h2>
            <p>You wrote <span>{gameCtx.text.length} characters</span> in <span>{gameCtx.time} seconds </span> and made <span>{gameCtx.mistakes} mistakes!</span></p>
            {!scoreSended ?
                <form className={classes.save} id="save" onSubmit={submitHandler}>
                    <label htmlFor="name">Your name: </label>
                    <input id="name" type="string" ref={nameRef}></input>
                    <button className={classes.sendBtn}>SAVE</button>
                </form>
                :<p>Score sended!</p>}
            <div className={classes.buttons}>
                <button onClick={props.onReplay}>TRY AGAIN</button>
                <button onClick={props.onShowMenu}>MENU</button>
            </div>

        </div>
    )
};

export default Summary;
