import React, { useState, useContext, useEffect, useRef } from 'react'; 

import GameContext from '../../store/game-context';
import Timer from './Timer/Timer';

import classes from './Typing.module.css'; 

const Typing = (props) => {

    const gameCtx = useContext(GameContext); 

    const [charsWritten, setCharsWritten] = useState(0); 
    const [isFinished, setIsFinished] = useState(false); 

    const textarea = useRef(); 

    useEffect(() => {
        textarea.current.focus();
        return () => gameCtx.getMistakesHandler(0);
    }, [])

    const textChangeHandler = (event) => {
        const userText = event.target.value; 
        setCharsWritten(userText.length); 
        if (userText.length === gameCtx.text.length || userText.length > gameCtx.text.length) {
            textarea.current.readOnly = true;
            countMistakes(userText); 
            setIsFinished(true); 
            props.onEndTyping(); 
        }
    }

    const countMistakes = (userTxt) => {
        const userText = userTxt.split(''); 
        const orgText = gameCtx.text.split(''); 
        orgText.forEach((char, i) => {
            if (char !== userText[i]) gameCtx.getMistakesHandler(m => m + 1)
        })
    }

    return (
        <div className={classes.typing}>
            {!isFinished && <Timer />}
            <p><span className={classes.typing__item}>CHARACTERS LEFT: </span>{charsWritten}/{gameCtx.text.length ? gameCtx.text.length : 0 }</p>
            <textarea onChange={textChangeHandler} ref={textarea}/>
        </div>
    )
}

export default Typing; 