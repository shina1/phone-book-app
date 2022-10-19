import React, { useEffect, useReducer, useState } from 'react';
import './counter.css'
const ACTIONS = {
    INCREASE : 'increase counter',
    DECREASE: 'decrease counter',
    CLEAR : 'clear counter',
}

function reducer(state, action){
    switch (action.type) {
        case ACTIONS.INCREASE:
            return {count: state.count + 1}
        case ACTIONS.DECREASE:
            return {count: state.count - 1}
        case ACTIONS.CLEAR:
            return {count: 0}
        default:
            return state
    }
}

const NewCounter = () => {
    // const pokemon = [
    //     {
    //       id: 1,
    //       name: "Charmander",
    //       type: "fire",
    //       image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    //     },
    //     {
    //       id: 2,
    //       name: "Squirtle",
    //       type: "water",
    //       image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    //     },
    //     {
    //       id: 3,
    //       name: "Butterfree",
    //       type: "flying",
    //       image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    //     },
    //     {
    //       id: 4,
    //       name: "Rattata",
    //       type: "normal",
    //       image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    //     },
    //     {
    //       id: 5,
    //       name: "Metapod",
    //       type: "bug",
    //       image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    //     }
    //   ]
    const [state, dispatch] = useReducer(reducer, {count: 0})
  
    const increaseCounter = ()=>{
        dispatch({type: ACTIONS.INCREASE})
    }

    const decreaseCounter = () => {
        dispatch({type: ACTIONS.DECREASE})
    }
    const clearCounter = () => {
        dispatch({type: ACTIONS.CLEAR})
    }
   useEffect(()=>{
      console.log('logging from the useEffect hook',state);  
   }, [state])
    return(
       <div className='counter-wrapper'>
            <h2>Counter</h2> <br></br>
            <h1>{state.count}</h1> <br></br>
            <button onClick={() => increaseCounter()}>increase</button> 
            <button onClick={() => decreaseCounter()}>decrease</button>
            <button onClick={() => clearCounter()}>clear</button>
       </div> 
    )
}

export default NewCounter;