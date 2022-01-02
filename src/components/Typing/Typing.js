import React, { useState } from 'react'; 

import classes from './Typing.module.css'; 

const Typing = (props) => {

    const [charsLeft, setCharsLeft] = useState(0); 
    const textLength = 200; 

    return (
        <div className={classes.typing}>
            <p>{`Characters left: ${charsLeft}/${textLength}`}</p>
            <textarea />
        </div>
    )
}

export default Typing; 