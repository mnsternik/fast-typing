import React from 'react';

import classes from './SettingsForm.module.css';

const SettingsForm = () => {

    return (
        <form className={classes.settings} id="settings">
            <div className={classes.settingsField}>
                <label for="language">Language:</label>
                <select id="language" name="languages" form="settings">
                    <option value="english">English</option>
                    <option value="polish">Polish</option>
                </select>
            </div>
            <div className={classes.settingsField}>
                <laber for="length">Length: </laber>
                <input id="length" type="number"></input>
            </div>
            <button>START</button>
        </form>
    )
}

export default SettingsForm;