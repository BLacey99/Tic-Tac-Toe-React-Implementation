import React from 'react';
import Tile from './Tile';
import  "./Tiles.css";

export default function Tiles(props){
    const tileArr = [];
  
    (async function generateArr(){
        for(let i = 1; i < 10; i++){
            tileArr.push(i);
            
    }
    })();

    
      
        const mapper = tileArr.map((entry) => <Tile entry={entry}>{entry}</Tile>)

    return(
        <div className='playingBoard'>
           {mapper}
        </div>
    )
}