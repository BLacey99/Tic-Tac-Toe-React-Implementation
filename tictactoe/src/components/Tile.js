import React from 'react';
import { useEffect, useContext,  useState } from 'react';


export default function Tile(props){
    const [clicked, setClick] = useState(false);
    const [classToggle, setClass] = useState(false);
    const [content, setContent] = useState('');

    const turnO = 'o';
    const turnX = 'x';

    const arrFiller = props.filledArr;
    const value = useContext(props.turn);

    const clicker = () =>{
       
        //setClass(true);
        props.filledArr.push(props.turn);

        
        if(classToggle === false){
            setClick(true);
            console.log("Fixed value: " + !(clicked))
            setClass(true);
            setContent(props.turn);
            console.log("Fixed: " + !(classToggle))
          
            console.log(props.filledArr);
            if (props.turn === 'x'){
                props.setTurn('o');
                console.log(props.turn);
            }else{
                props.setTurn('x');
                console.log(props.turn);
            }
        }
      
      

     
        
    }
    return(
        <div 
        className={classToggle ? 'clicked' : 'tile'} 
        onClick={clicker}
        >
        <p>{content}</p>
        </div>
    )
}