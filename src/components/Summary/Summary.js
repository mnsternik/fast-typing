import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../UI/Button/Button';
import useHttp from '../../hooks/useHttp';
import classes from './Summary.module.css';

const Summary = (props) => {

    const [isScoreSended, setIsScoreSended] = useState(false);
    const [isInputValueValid, setIsInputValueValid] = useState(false);
    const [isInputTouched, setIsInputToched] = useState(false);

    const textData = useSelector(state => state.text);

    const usernameRef = useRef();
    const { sendRequest: sendData } = useHttp();

    const hasInputError = isInputTouched && !isInputValueValid;
    const inputClasses = hasInputError ? `${classes.input} ${classes.inputError}` : `${classes.input}`;


    const inputBlurHandler = (event) => {
        setIsInputToched(true);
    };

    const inputChangeHandler = (event) => {
        setIsInputValueValid(event.target.value.trim() !== '')
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (!isInputValueValid) {
            return;
        }

        const scoreData = {
            name: usernameRef.current.value,
            time: textData.time,
            effectiveness: textData.effectiveness,
            wordsPerMinute: textData.wordsPerMinute,
            textLength: textData.text.length,
            mistakes: textData.mistakes
        };

        sendData({
            url: 'https://type-faster-fd0c0-default-rtdb.firebaseio.com/scores.json',
            method: 'POST',
            body: scoreData,
        }, console.log);

        setIsScoreSended(true);
    };


    return (
        <div className={classes.summary}>
            <h2>Finished!</h2>
            <div className={classes.card}>
                <p>Time: <span>{textData.time}</span>s</p>
                <p>Mistakes: <span>{textData.mistakes}</span></p>
                <p>Words per minute: <span>{textData.wordsPerMinute.toFixed()}</span></p>
                <p>Effectiveness: <span>{textData.effectiveness.toFixed(2)}%</span></p>
            </div>

            {!isScoreSended ?
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
