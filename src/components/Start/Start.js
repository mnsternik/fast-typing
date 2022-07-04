import React from 'react';
import SettingsForm from './SettingsForm/SettingsForm';

import classes from './Start.module.css';

const Start = (props) => {

    return (
        <div className={classes.start}>
            <div className={classes.header}>
                <h1>TYPE FASTER</h1>
                <h2>FIND OUT HOW FAST CAN YOU TYPE</h2>
            </div>

            <h3>The average typing speed is around <span className={classes.bolded}>40 words per minute</span>, are you faster?</h3>
            <h3>Check text's options below, and start when you're ready!</h3>
            <SettingsForm onStart={props.onStart} />
        </div>
    )
}

export default Start; 