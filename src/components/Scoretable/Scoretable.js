import React, { useEffect, useState } from 'react';

import classes from './Scoretable.module.css';

const DUMMY_SCORES = null;

const Scoretable = () => {

    const [scores, setScores] = useState();

    useEffect(() => {
        fetch('endpoint here', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div className={classes.scoretable}>
            <h1>TOP 10 TYPERS</h1>
            {scores ? DUMMY_SCORES : <p>Oops, no scores yet!</p>}
        </div>
    )
}

export default Scoretable;