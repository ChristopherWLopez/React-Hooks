import React from 'react'
import { useState,useEffect } from 'react';

 const EffectDemo=()=> {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("This happens on every render");

        return()=>{
            console.log("this happens on unMount");
        }
    },[count])


  return (
    <>
        <button onClick={()=> setCount(count +1)}> Counter:{count}</button>
        <button onClick={()=> setCount(0)}> Reset </button>
    </>
  )
}

export default EffectDemo;