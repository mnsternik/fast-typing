import React, { createContext, useState } from "react";

const GameContext = createContext({
    textLength: 0,
    language: '', 
    text: '', 
    time: 0,
    mistakes: 0,
    getSettingsHandler: (settings) => {}, 
    getTimeHandler: (time) => {},
    getMistakesHandler: (mistakes) => {}
})

export const GameContextProvider = (props) => {

    const [language, setLanguage] = useState('');
    const [textLength, setTextLength] = useState(0); 
    //const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?");
    const [text, setText] = useState('Siała baba mak nie wiedziala jak dziadek wiedział nie powiedział dostał dziesięć lat'); 
    const [time, setTime] = useState(0); 
    const [mistakes, setMistakes] = useState(0); 


    const getTimeHandler = (time) => {
        setTime(time); 
    }

    const getMistakesHandler = (mistakes) => {
        setMistakes(mistakes); 
    }

    const getSettingsHandler = (settings) => {
        setLanguage(settings.language); 
        setTextLength(settings.textLength); 
    }
   
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
            }}>
            {props.children}
        </GameContext.Provider>
    )
}

export default GameContext;