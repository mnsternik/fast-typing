import React, { useContext, useRef, useState } from 'react';

import GameContext from '../../store/game-context';

import Button from '../../UI/Button/Button';

import useHttp from '../../hooks/useHttp';

import classes from './Summary.module.css';

const Summary = (props) => {

    const [scoreSended, setScoreSended] = useState(false);
    const [isInputValueValid, setIsInputValueValid] = useState(false);
    const [isInputTouched, setIsInputToched] = useState(false);

    const gameCtx = useContext(GameContext);
    const usernameRef = useRef();
    const { sendRequest: sendData } = useHttp();

    const hasInputError = isInputTouched && !isInputValueValid;
    const inputClasses = hasInputError ? `${classes.input} ${classes.inputError}` : `${classes.input}`;

    const inputBlurHandler = (event) => {
        setIsInputToched(true);
    }

    const inputChangeHandler = (event) => {
        setIsInputValueValid(event.target.value.trim() !== '')
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!isInputValueValid) {
            return
        }
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
            <div className={classes.card}>
                <p>Time: <span>{gameCtx.time}</span>s</p>
                <p>Mistakes: <span>{gameCtx.mistakes}</span></p>
                <p>Words per minute: <span>{((gameCtx.textData.text.split(' ').length / gameCtx.time) * 60).toFixed()}</span></p>
                <p>Effectiveness: <span>{(((gameCtx.textData.text.length - gameCtx.mistakes) / gameCtx.textData.text.length) * 100).toFixed(2)}</span></p>
            </div>

            {!scoreSended ?
                <form className={classes.save} id="save" onSubmit={submitHandler}>
                    <label htmlFor="name">Your name: </label>
                    <input
                        id="name"
                        type="string"
                        className={inputClasses}
                        ref={usernameRef}
                        onBlur={inputBlurHandler}
                        onChange={inputChangeHandler}
                    />
                    <div className={classes.buttons}>
                        <Button onClick={props.onShowMenu}>Cancel</Button>
                        <button className={classes.sendBtn}>SAVE</button>
                    </div>
                </form>

                : <p>Score saved!</p>}
        </div>
    )
};

export default Summary;
