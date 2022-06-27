import React, { useRef } from 'react';
import Button from '../../../UI/Button/Button';
import classes from './SettingsForm.module.css';

import { useDispatch } from 'react-redux';
import { textActions } from '../../../store/text';

const SettingsForm = (props) => {

    const dispatch = useDispatch();

    const languageRef = useRef();
    const textLengthRef = useRef(); 

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(textActions.setLanguage(languageRef.current.value));
        dispatch(textActions.setLength(textLengthRef.current.value));
        props.onStart(); 
    }

    return (
        <form className={classes.settings} id="settings" onSubmit={submitHandler}>

            <div className={classes.settingsField}>
                <label htmlFor="language">Language: </label>
                <select id="language" name="language" form="settings" ref={languageRef}>
                    <option value="english">English</option>
                    <option value="polski">Polish</option>
                </select>
            </div>

            <div className={classes.settingsField}>
                <label htmlFor="length">Length: </label>
                <select id="length" name="length" form="settings" ref={textLengthRef}>
                    <option value="short">Short</option>
                    <option value="medium">Medium</option>
                    <option value="long">Long</option>
                </select>
            </div>

            <Button>START</Button>

        </form>
    )
}

export default SettingsForm;