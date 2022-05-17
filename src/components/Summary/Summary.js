import React, { useContext, useRef, useState } from 'react';

import GameContext from '../../store/game-context';

import Button from '../../UI/Button/Button';

import useHttp from '../../hooks/useHttp';

import classes from './Summary.module.css';

const Summary = (props) => {

    const [scoreSended, setScoreSended] = useState(false);

    const gameCtx = useContext(GameContext);
    const usernameRef = useRef();

    const { sendRequest: sendData } = useHttp();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(gameCtx);
        const scoreData = {
            name: usernameRef.current.value,
            time: gameCtx.time,
            effectiveness: ((gameCtx.textData.text.length - gameCtx.mistakes) / gameCtx.textData.text.length) * 100,
            wordsPerMinute: (gameCtx.textData.text.split(' ').length / gameCtx.time) * 60,
            textLength: gameCtx.textData.text.length,
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
            <p>You wrote <span>{gameCtx.textData.text.length} characters</span> in <span>{gameCtx.time} seconds </span> and made <span>{gameCtx.mistakes} mistakes!</span></p>
            {!scoreSended ?
                <form className={classes.save} id="save" onSubmit={submitHandler}>
                    <label htmlFor="name">Your name: </label>
                    <input id="name" type="string" ref={usernameRef}></input>
                    <button className={classes.sendBtn}>SAVE</button>
                </form>
                :<p>Score saved!</p>}
            <div className={classes.buttons}>
                <Button onClick={props.onShowMenu}>MENU</Button>
            </div>

        </div>
    )
};

export default Summary;
