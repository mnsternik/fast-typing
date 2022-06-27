import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { textActions } from '../../store/text';
import Text from '../Text/Text';
import Typing from '../Typing/Typing';
import Start from '../Start/Start';
import Summary from '../Summary/Summary';

import classes from './Main.module.css';

const Main = () => {

    const [showStart, setShowStart] = useState(true);
    const [showTyping, setShowTyping] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const dispatch = useDispatch();

    const startTypingHandler = () => {
        setShowStart(false);
        setShowTyping(true);
    };

    const showSummaryHandler = () => {
        setShowSummary(true);
    };

    const replayHandler = () => {
        setShowSummary(false);
        dispatch(textActions.setMistakes(0))
        dispatch(textActions.setTime(0))
        startTypingHandler();
    };

    const showMenuHandler = () => {
        dispatch(textActions.setMistakes(0))
        dispatch(textActions.setTime(0))
        setShowTyping(false);
        setShowSummary(false);
        setShowStart(true);
    };

    return (
        <div className={classes.main}>
                {showStart && <Start onStart={startTypingHandler} />}
                {showSummary && <Summary onReplay={replayHandler} onShowMenu={showMenuHandler} />}
                {showTyping && <Text/>}
                {showTyping && <Typing onEndTyping={showSummaryHandler} onShowMenu={showMenuHandler} />}
        </div>
    )
};

export default Main; 