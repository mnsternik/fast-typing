import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { textActions } from '../../../store/text';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classes from './SettingsForm.module.css';

const SettingsForm = (props) => {

    const dispatch = useDispatch();

    const [textLength, setTextLength] = useState('');
    const [language, setLanguage] = useState('');
    const [isTextLengthTouched, setIsTextLengthTouched] = useState(false);
    const [isLanguageTouched, setIsLanguageTouched] = useState(false);

    const textLengthChangeHandler = (event) => {
        setTextLength(event.target.value);
    };

    const textLengthTochedHandler = (event) => {
        setIsTextLengthTouched(true);
    };

    const languageChangeHandler = (event) => {
        setLanguage(event.target.value);
    };

    const languageTouchedHandler = (event) => {
        setIsLanguageTouched(true);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (!language || !textLength) {
            setIsLanguageTouched(true);
            setIsTextLengthTouched(true);
            return;
        };

        dispatch(textActions.setLanguage(language));
        dispatch(textActions.setLength(textLength));
        props.onStart();
    };

    return (
        <form className={classes.settings} id="settings" onSubmit={submitHandler}>

            <div className={classes.selects}>
                <Box sx={{
                    minWidth: 130,
                    alignSelf: 'center'
                }}>
                    <FormControl fullWidth error={!textLength && isTextLengthTouched}>
                        <InputLabel id="text-length-label">Text Length</InputLabel>
                        <Select
                            labelId="text-length-label"
                            id="text-length-select"
                            value={textLength}
                            label="Text length"
                            onChange={textLengthChangeHandler}
                            onClose={textLengthTochedHandler}
                        >
                            <MenuItem value={'short'}>Short</MenuItem>
                            <MenuItem value={'medium'}>Medium</MenuItem>
                            <MenuItem value={'long'}>Long</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{
                    minWidth: 130,
                    alignSelf: 'center'
                }}>
                    <FormControl fullWidth error={!language && isLanguageTouched}>
                        <InputLabel id="language-label">Language</InputLabel>
                        <Select
                            labelId="language-label"
                            id="language-select"
                            value={language}
                            label="Language"
                            onChange={languageChangeHandler}
                            onClose={languageTouchedHandler}
                        >
                            <MenuItem value={'polski'}>Polish</MenuItem>
                            <MenuItem value={'english'}>English</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>

            <Button
                variant="contained"
                className={classes.startBtn}
                onClick={submitHandler}
                size="large"
                sx={{
                    width: 150,
                    minHeight: 50,
                    fontSize: 18,
                    mx: "auto"
                }}>
                Start
            </Button>

        </form>
    )
}

export default SettingsForm;