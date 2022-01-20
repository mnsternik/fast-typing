import React, { useContext, useState } from 'react';

import Header from '../Header/Header';
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
    const [isLoading, setIsLoading] = useState(false);
    const [showMenuButton, setShowMenuButton] = useState(false);

    const gameCtx = useContext(GameContext);

    const startTypingHandler = () => {
        fetchTextHadnler();
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

    const fetchTextHadnler = () => {
        setIsLoading(true);
        fetch('https://v2.jokeapi.dev/joke/Any')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                gameCtx.getTextHandler(data.delivery);
                setIsLoading(false);
            })
            .catch(error => console.log(error))
    }

    return (
        <div className={classes.main}>
            <Header />
            {showStart && <Start onStart={startTypingHandler} />}
            {showSummary && <Summary onReplay={replayHandler} onShowMenu={showMenuHandler} />}
            {showTyping && (<Text /> || <p>Loading...</p>)}
            {showTyping && !isLoading && <Typing onEndTyping={showSummaryHandler} />}
            {showMenuButton && <button onClick={showMenuHandler}>MENU</button>}
        </div>
    )
}

export default Main; 