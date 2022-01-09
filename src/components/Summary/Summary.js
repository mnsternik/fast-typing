import React, { useContext } from 'react'; 

import GameContext from '../../store/game-context';

import classes from './Summary.module.css'; 

const Summary = (props) => {

    const gameCtx = useContext(GameContext);

    return (
        <div className={classes.summary}>
            <h2>Finished!</h2>
            <p>You wrote <span>84 characters</span> in <span>{gameCtx.time} seconds </span> and made <span>{gameCtx.mistakes} mistakes!</span></p>

            {//<p>You wrote <span>{gameCtx.textLength} characters</span> in <span>{gameCtx.time} seconds </span> and made <span>{gameCtx.mistakes} mistakes!</span></p>
            }
            <button>TRY AGAIN</button>
        </div>
    )
}

export default Summary;
