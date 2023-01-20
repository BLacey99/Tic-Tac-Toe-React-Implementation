import React from 'react';
import { useEffect, useContext,  useState } from 'react';


export default function Tile(props){
    const [clicked, setClick] = useState(false);
    const [classToggle, setClass] = useState(false);
    const [content, setContent] = useState('');

    const turnO = 'o';
    const turnX = 'x';

    const value = useContext(props.turn);
    // useEffect( () =>{
    //     console.log(clicked);
    // })
    
    const clicker = () =>{
        setClick(true);
        console.log("Fixed value: " + !(clicked))
        //setClass(true);
        if(classToggle === true){
            setClass(false);
        }else{setClass(true)}
        console.log("Fixed: " + !(classToggle))
        setContent(props.turn)

        if (props.turn === 'x'){
            props.setTurn('o');
            console.log(props.turn);
        }else{
            props.setTurn('x');
            console.log(props.turn);
        }
        
    }
    return(
        <div 
        className={classToggle ? 'clicked' : 'tile'} 
        onMouseEnter={clicker}>
        <p>{value}</p>
        </div>
    )
}