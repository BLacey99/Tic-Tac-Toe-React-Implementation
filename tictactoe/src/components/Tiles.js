import React from 'react';
import Tile from './Tile';
import  "./Tiles.css";
import { useEffect, useState } from 'react';


export default function Tiles(props){

    const[turn, setTurn] = useState('x');

    const tileArr = [];
    const filledArr = [];

    (async function generateArr(){
        for(let i = 1; i < 10; i++){
            tileArr.push(i);
            
    }
    })();
          
    const Changer = () =>{

    }

    
    
      
        const mapper = tileArr.map((entry) =>  <Tile key={entry}  filledArr = {filledArr}  setTurn = {setTurn} turn = {turn} entry={entry}></Tile>)

    return(
        <div>
               <h2>{turn}</h2>
            <br></br>
      
        <div className='playingBoard' turn = {turn}>

           {mapper}
        </div>
        <button onClick={Changer}>Logger</button>
        </div>
    )
}