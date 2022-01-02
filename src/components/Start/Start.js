import React from 'react'; 
import SettingsForm from './SettingsForm/SettingsForm';

import classes from './Start.module.css'; 

const Start = () => {

    return (
        <div className={classes.start}>
            <h2>Want to test your typing speed?</h2>
            <p>Check text options below and start when you ready!</p>
            <SettingsForm />
        </div>
    )
}

export default Start; 