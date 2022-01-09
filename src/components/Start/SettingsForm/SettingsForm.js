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
        }

        gameCtx.getSettingsHandler(settings); 
        props.onStart(); 
    }

    return (
        <form className={classes.settings} id="settings" onSubmit={submitHandler}>
            <div className={classes.settingsField}>
                <label htmlFor="language">Language: </label>
                <select id="language" name="languages" form="settings" ref={language}>
                    <option value="english">English</option>
                    <option value="polish">Polish</option>
                </select>
            </div>
            <div className={classes.settingsField}>
                <label htmlFor="length">Length: </label>
                <input id="length" type="number" ref={textLength}></input>
            </div>
            <button>START</button>
        </form>
    )
}

export default SettingsForm;