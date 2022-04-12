import React, { createContext, useState } from "react";

const GameContext = createContext({
    textLength: 0,
    language: '',
    text: '',
    time: 0,
    mistakes: 0,
    getSettingsHandler: (settings) => { },
    getTimeHandler: (time) => { },
    getMistakesHandler: (mistakes) => { },
    getTextHandler: (text) => { },
    calcWordsPerMinute: () => { },
})

export const GameContextProvider = (props) => {

    const [language, setLanguage] = useState('');
    const [textLength, setTextLength] = useState(0);
    const [text, setText] = useState('');
    const [time, setTime] = useState(0);
    const [mistakes, setMistakes] = useState(0);

    const getTimeHandler = (time) => {
        setTime(time);
    };

    const getMistakesHandler = (mistakes) => {
        setMistakes(mistakes);
    };

    const getSettingsHandler = (settings) => {
        setLanguage(settings.language);
        setTextLength(settings.textLength);
    };

    const getTextHandler = (text) => {
        setText(text);
    };

    return (
        <GameContext.Provider
            value={{
                textLength: textLength,
                language: language,
                text: text,
                time: time,
                mistakes: mistakes,
                getSettingsHandler: getSettingsHandler,
                getTimeHandler: getTimeHandler,
                getMistakesHandler: getMistakesHandler,
                getTextHandler: getTextHandler,
            }}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContext;