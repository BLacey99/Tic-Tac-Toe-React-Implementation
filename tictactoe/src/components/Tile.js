import React from 'react';
import { useEffect, useState } from 'react';


export default function Tile(props){
    const [clicked, setClick] = useState(false);
    


   
    // useEffect( () =>{
    //     console.log(clicked);
    // })
    
    const clicker = () =>{
        setClick(true);
        console.log("Fixed value: " + !(clicked))
    }
    return(
        <div className='tile' onClick={clicker}>{props.entry}</div>
    )
}