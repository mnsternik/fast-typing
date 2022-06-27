import React, { useState, useEffect, useRef } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

import { textActions } from '../../store/text';
import Timer from './Timer/Timer';
import Button from '../../UI/Button/Button';

import classes from './Typing.module.css'; 

const Typing = (props) => {

    const [charsWritten, setCharsWritten] = useState(0); 
    const [isFinished, setIsFinished] = useState(false);
    const textData = useSelector(state => state.text);  
    const dispatch = useDispatch();
    const textarea = useRef(); 

    useEffect(() => {
        textarea.current.scrollIntoView() 
        textarea.current.focus();
        return (() => {
            dispatch(textActions.setMistakes(0)); 
        })
    }, [dispatch]);

    const textChangeHandler = (event) => {
        const userText = event.target.value; 
        setCharsWritten(userText.length); 
        if (userText.length >= textData.text.length) {
            finishTyping(userText.slice(0, textData.text.length)); //limits userText length to orginal text length 
        }
    };

    const finishTyping = (text) => {
        textarea.current.readOnly = true;
        setIsFinished(true); 
        countMistakes(text); 
        props.onEndTyping(); 
    };

    const countMistakes = (userTxt) => {
        const userText = userTxt.split(' '); 
        const orgText = textData.text.split(' '); 
        let mistakes = 0; 
        orgText.forEach((word, i) => {
            if (word !== userText[i]) {
                mistakes++; 
                dispatch(textActions.setMistakes(mistakes));
            }
        })
    };

    return (
        <div className={classes.typing}>
            {!isFinished && <Timer />}
            <p><span className={classes.typing__item}>CHARACTERS: </span>{charsWritten}/{textData.text.length}</p>
            <textarea onChange={textChangeHandler} ref={textarea}/>
            <Button onClick={props.onShowMenu} className={classes.menuBtn}>BACK</Button>
        </div>
    )
};

export default Typing; 