import React, {useState} from 'react'; 

import classes from './Input.module.css'; 

const Input = (props) => {

    const [inputData, setInputData] = useState(); 
    const [isTouched, setIsTouched] = useState(false); 

    const isInputValid = inputData.trim() !== ''; 

    const inputChangeHandler = (event) => {
        setInputData(event.target.value); 
    };

    const inputBlurHandler = () => {
        setIsTouched(true); 
    };

    let inputClasses = classes.input; 
    if (!isInputValid && !isTouched) {
        inputClasses = `${classes.input} ${classes.input-error}`
    };

    return (
        <Input 
            className={inputClasses} 
            onChange={inputChangeHandler} 
            onBlur={inputBlurHandler}
        >
            {props.children}
        </Input>
    )
}

export default Input; 