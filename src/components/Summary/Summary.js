import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useHttp from '../../hooks/useHttp';
import { NavLink } from 'react-router-dom';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import classes from './Summary.module.css';

const Summary = (props) => {

    const [isScoreSended, setIsScoreSended] = useState(false);
    const [nameInputValue, setNameInputValue] = useState('');
    const [isNameInputTouched, setIsInputToched] = useState(false);
    const textData = useSelector(state => state.text);
    const { sendRequest: sendData } = useHttp();

    const inputBlurHandler = (event) => {
        setIsInputToched(true);
    };

    const inputChangeHandler = (event) => {
        setNameInputValue(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (!nameInputValue.trim()) {
            setIsInputToched(true);
            return;
        }

        const scoreData = {
            name: nameInputValue,
            time: textData.time,
            effectiveness: textData.effectiveness,
            wordsPerMinute: textData.wordsPerMinute,
            textLength: textData.text.length,
            mistakes: textData.mistakes
        };

        sendData({
            url: 'https://type-faster-fd0c0-default-rtdb.firebaseio.com/scores.json',
            method: 'POST',
            body: scoreData,
        }, console.log);

        setIsScoreSended(true);
    };

    return (
        <div className={classes.summary}>
            <h2>Finished!</h2>
            <div className={classes.card}>
                <p>Time: <span>{textData.time}</span>s</p>
                <p>Mistakes: <span>{textData.mistakes}</span></p>
                <p>Words per minute: <span>{textData.wordsPerMinute.toFixed()}</span></p>
                <p>Effectiveness: <span>{textData.effectiveness.toFixed(2)}%</span></p>
            </div>

            {!isScoreSended ?
                <form className={classes.save} id="save" onSubmit={submitHandler}>
                    <Box
                        component="form"
                        sx={{
                            my: 1,
                            color: 'green',
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="name"
                            label="Your name"
                            variant="standard"
                            onChange={inputChangeHandler}
                            onBlur={inputBlurHandler}
                            error={!nameInputValue && isNameInputTouched}
                            helperText={(!nameInputValue && isNameInputTouched) && 'Invalid name.'}
                        />
                    </Box>

                    <Button
                        onClick={props.onShowMenu}
                        variant='text'
                        size='large'
                        sx={{ mx: 1 }}
                    >
                        Cancel
                    </Button>

                    <Button
                        className={classes.sendBtn}
                        variant='contained'
                        size='large'
                        sx={{ mx: 1 }}
                        onClick={submitHandler}
                    >
                        SAVE
                    </Button>

                </form>
                :  
                <Stack sx={{ width: 250, mx: 'auto', my: 2 }} spacing={2}>
                    <Alert severity="success">Score saved! Check it <NavLink className={classes.scoreLink} to='/scoretable'>here</NavLink>.</Alert>
                </Stack>}
        </div>
    )
};

export default Summary;
