import React, { useState, useContext, useEffect, useRef } from 'react'; 

import GameContext from '../../store/game-context';
import Timer from './Timer/Timer';
import Button from '../../UI/Button/Button';

import classes from './Typing.module.css'; 

const Typing = (props) => {

    const gameCtx = useContext(GameContext); 

    const [charsWritten, setCharsWritten] = useState(0); 
    const [isFinished, setIsFinished] = useState(false);
    const textarea = useRef(); 

    useEffect(() => {
        textarea.current.scrollIntoView() 
        textarea.current.focus();
        return (() => {
            gameCtx.getTimeHandler(0); 
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const textChangeHandler = (event) => {
        const userText = event.target.value; 
        setCharsWritten(userText.length); 
        if (userText.length >= gameCtx.textData.text.length) {
            finishTyping(userText); 
        }
    };

    const finishTyping = (text) => {
        textarea.current.readOnly = true;
        setIsFinished(true); 
        countMistakes(text); 
        props.onEndTyping(); 
    };

    const countMistakes = (userTxt) => {
        const userText = userTxt.split(''); 
        const orgText = gameCtx.textData.text.split(''); 
        orgText.forEach((char, i) => {
            if (char !== userText[i]) {
                gameCtx.getMistakesHandler(m => m + 1);
            }
        })
    };

    return (
        <div className={classes.typing}>
            {!isFinished && <Timer />}
            <p><span className={classes.typing__item}>CHARACTERS LEFT: </span>{charsWritten}/{gameCtx.textData.text ? gameCtx.textData.text.length : 0 }</p>
            <textarea onChange={textChangeHandler} ref={textarea}/>
            <Button onClick={props.onShowMenu} className={classes.menuBtn}>BACK</Button>
        </div>
    )
};

export default Typing; 