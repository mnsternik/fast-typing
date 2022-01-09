import React, { useState } from 'react'; 

import Header from '../Header/Header';
import Text from '../Text/Text';
import Typing from '../Typing/Typing';
import Start from '../Start/Start';
import Summary from '../Summary/Summary';

import classes from './Main.module.css'; 

const Main = () => {

    const [showTyping, setShowTyping] = useState(false); 
    const [showSummary, setShowSummary] = useState(false); 

    const startTypingHandler = () => {
        setShowTyping(true); 
    }

    const showSummaryHandler = () => {
        setShowSummary(true);
    }

    const replayHandler = () => {
        //todo context clearing
    }

    return (
        <div className={classes.main}>
            <Header />
            {!showTyping && <Start onStart={startTypingHandler}/>}
            {showSummary && <Summary />}
            {showTyping && <Text />}
            {showTyping && <Typing onEndTyping={showSummaryHandler}/>}
        </div>
    )
}

export default Main; 