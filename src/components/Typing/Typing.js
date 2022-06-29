import React, { useState, useEffect, useRef } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';

import { textActions } from '../../store/text';
import Timer from './Timer/Timer';
import Button from '../../UI/Button/Button';
import Text from './Text/Text';

import classes from './Typing.module.css'; 

const Typing = (props) => {

    const [charsWritten, setCharsWritten] = useState(0); 
    const [isFinished, setIsFinished] = useState(false);
    const [coloredText, setColoredText] = useState('');
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
        colorText(userText);
        if (userText.length >= textData.text.length) {
            finishTyping(userText.slice(0, textData.text.length)); //limits userText length to orginal text length 
        }
    };

    const colorText = (userText) => {
        const userTextArr = userText.split(' ').slice(0, -1); //cutting off unfinished word
        const orgTextArr = textData.text.split(' ');
        const orgTextSpan = orgTextArr.map(word => <span>{`${word} `}</span>)
        let index; 

        const coloredText = userTextArr.map((word, i) => {
            index = i; 
            const fontColor = word !== orgTextArr[i] ? 'red' : 'black';
            return <span style={{color: fontColor}}>{`${orgTextArr[i]} `}</span> 
        })

        const mergedText = coloredText.concat(orgTextSpan.slice(index + 1));
        setColoredText(mergedText); 
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

    const finishTyping = (text) => {
        textarea.current.readOnly = true;
        setIsFinished(true); 
        countMistakes(text); 
        props.onEndTyping(); 
    };

    return (
        <div className={classes.typing}>
            <Text coloredText={coloredText}/>
            {!isFinished && <Timer />}
            <p><span className={classes.typing__item}>CHARACTERS: </span>{charsWritten}/{textData.text.length}</p>
            <textarea onChange={textChangeHandler} ref={textarea}/>
            <Button onClick={props.onShowMenu} className={classes.menuBtn}>BACK</Button>
        </div>
    )
};

export default Typing; 