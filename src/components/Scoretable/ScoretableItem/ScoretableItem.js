import React from 'react';

import classes from './ScoretableItem.module.css';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const ScoretableItem = (props) => {

    return (

        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    mx: 'auto',
                    my: 2,
                    width: 320,
                    height: 128,
                },
            }}
        >
            <Paper elevation={3}>
                <section className={classes.item}>
                    <div className={classes.item__numeration}>
                        <span>{`${props.numeration + 1}.`}</span>
                    </div>
                    <div className={classes.item__content}>
                        <p className={classes.name}>{props.name}</p>
                        <p>Words per minute: <span>{props.wordsPerMinute.toFixed()}</span></p>
                        <p>Effectiveness: <span>{props.effectiveness.toFixed(2)}%</span></p>
                    </div>
                </section>
            </Paper>
        </Box>


    )
}

export default ScoretableItem;
