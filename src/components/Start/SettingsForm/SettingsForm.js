import React, { useRef, useContext } from 'react';

import GameContext from '../../../store/game-context';

import classes from './SettingsForm.module.css';

const SettingsForm = (props) => {

    const gameCtx = useContext(GameContext); 

    const language = useRef();
    const textLength = useRef(); 

    const submitHandler = (event) => {
        event.preventDefault();
        const settings = {
            language: language.current.value,
            textLength: textLength.current.value
        };
        gameCtx.getSettingsHandler(settings); 
        props.onStart(); 
    }

    return (
        <form className={classes.settings} id="settings" onSubmit={submitHandler}>
            <div className={classes.settingsField}>
                <label htmlFor="language">Language: </label>
                <select id="language" name="language" form="settings" ref={language}>
                    <option value="english">English</option>
                    <option value="polski">Polski</option>
                </select>
            </div>
            <div className={classes.settingsField}>
                <label htmlFor="length">Text length: </label>
                <select id="length" name="length" form="settings" ref={textLength}>
                    <option value="short">short</option>
                    <option value="medium">Medium</option>
                    <option value="long">Long</option>
                </select>
            </div>
            <button>START</button>
        </form>
    )
}

export default SettingsForm;