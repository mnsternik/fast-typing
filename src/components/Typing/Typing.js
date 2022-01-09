import React, { useState, useContext } from 'react'; 

import GameContext from '../../store/game-context';
import Timer from './Timer/Timer';

import classes from './Typing.module.css'; 

const Typing = (props) => {

    const gameCtx = useContext(GameContext); 

    const [charsWritten, setCharsWritten] = useState(0); 
    const [finished, setFinished] = useState(false); 

    const textChangeHandler = (event) => {
        const userText = event.target.value; 
        setCharsWritten(userText.length); 
        if (userText.length === gameCtx.text.length) {
            setFinished(true); 
            calculateScore(userText); 
            props.onEndTyping(); 
        }
    }

    const calculateScore = (userTxt) => {
        let mistakes = 0; 
        const userText = userTxt.split(''); 
        const orgText = gameCtx.text.split(''); 
        orgText.forEach((char, i) => {
            if (char !== userText[i]) mistakes += 1;  
        })
        gameCtx.getMistakesHandler(mistakes); 
    }

    return (
        <div className={classes.typing}>
            {!finished && <Timer />}
            <p>{`Characters left: ${charsWritten}/${gameCtx.text.length}`}</p>
            <textarea onChange={textChangeHandler}/>
        </div>
    )
}

export default Typing; 