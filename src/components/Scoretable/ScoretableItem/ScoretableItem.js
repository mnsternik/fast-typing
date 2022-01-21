import React from 'react';

import classes from './ScoretableItem.module.css';

const ScoretableItem = (props) => {

    return (
        <section className={classes.item}>
            <div className={classes.item__numeration}>
                <span>{`${props.numeration + 1}.`}</span>
            </div>
            <div className={classes.item__content}>
                <p>Name: <span>{props.name}</span></p>
                <p>Language: <span>{props.language}</span></p>
                <p>Text length: <span>{props.lenght}</span></p>
                <p>Mistakes: <span>{props.mistakes}</span></p>
            </div>

        </section>
    )
}

export default ScoretableItem;