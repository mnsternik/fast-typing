import React from 'react';
import SettingsForm from './SettingsForm/SettingsForm';

import classes from './Start.module.css';

const Start = (props) => {

    return (
        <div className={classes.start}>
            <h2>The average typing speed is around 40 words per minute, are you faster?</h2>
            <h2>Check text's options below, and start when you're ready!</h2>
            <SettingsForm onStart={props.onStart} />
        </div>
    )
}

export default Start; 
