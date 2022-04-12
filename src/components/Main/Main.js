import React, { useContext, useState } from 'react';

import Text from '../Text/Text';
import Typing from '../Typing/Typing';
import Start from '../Start/Start';
import Summary from '../Summary/Summary';

import GameContext from '../../store/game-context';

import classes from './Main.module.css';

const Main = () => {

    const [showStart, setShowStart] = useState(true);
    const [showTyping, setShowTyping] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const [showMenuButton, setShowMenuButton] = useState(false);

    const gameCtx = useContext(GameContext);

    const startTypingHandler = () => {
        setShowStart(false);
        setShowMenuButton(true);
        setShowTyping(true);
    }

    const showSummaryHandler = () => {
        setShowSummary(true);
        setShowMenuButton(false);
    }

    const replayHandler = () => {
        setShowSummary(false);
        gameCtx.getTimeHandler(0);
        gameCtx.getMistakesHandler(0);
        startTypingHandler();
    }

    const showMenuHandler = () => {
        gameCtx.getTimeHandler(0);
        gameCtx.getMistakesHandler(0);
        setShowMenuButton(false);
        setShowTyping(false);
        setShowSummary(false);
        setShowStart(true);
    }
    
    return (
        <div className={classes.main}>
            {showStart && <Start onStart={startTypingHandler} />}
            {showSummary && <Summary onReplay={replayHandler} onShowMenu={showMenuHandler} />}
            {showTyping && <Text />}
            {showTyping && <Typing onEndTyping={showSummaryHandler} />}
            {showMenuButton && <button onClick={showMenuHandler}>MENU</button>}
        </div>
    )
}

export default Main; 