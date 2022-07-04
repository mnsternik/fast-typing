import React from 'react'; 

import classess from './Tips.module.css';
import keyboardImg from './../../assets/keyboard_typing.png';


const Tips = (props) => {

    return (
        <div className={classess.tips}>
            <h1>HOW TO TYPE FASTER</h1>
            <h3>Sitting posture</h3> 
            <ul>
                <li><p>Sit straight and remember to keep your back straight.</p></li>
                <li><p>Keep your elbows bent at the right angle.</p></li>
                <li><p>Face the screen with your head slightly tilted forward.</p></li>
                <li><p>Keep at least 45 - 70 cm of distance between your eyes and the screen.</p></li>
                <li><p>Еxpose the shoulder, arm, and wrist muscles to the least possible strain. The wrists can touch the tabletop in front of the keyboard. Never shift your body weight to the wrists by resting on them.</p></li>
            </ul>

            <h3>Home row position</h3>
            <p>Curve your fingers a little and put them on the ASDF and JKL; keys which are located in the middle row of the letter keys. This row is called HOME ROW because you always start from these keys and always return to them.</p>
            <p>F and J keys under your index fingers should have a raised line on them to aide in finding these keys without looking.</p>


   
            
            <h3>Keyboard scheme</h3>
            <img src={keyboardImg} alt='' className={classess.keyboardImg} />
            <ul>
                <li><p>Hit keys only with the fingers for which they have been reserved.</p></li>
                <li><p>Always return to the starting position of the fingers "ASDF – JKL;".</p></li>
                <li><p>When typing, imagine the location of the symbol on the keyboard.</p></li>
                <li><p>The SHIFT key is always pressed by the pinky finger opposite to the one hitting the other key.</p></li>
                <li><p>Use the thumb of whichever hand is more convenient for you to press the Space bar.</p></li>
            </ul>


            





        </div>
    )
}

export default Tips; 

