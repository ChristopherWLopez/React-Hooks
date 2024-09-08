import { useState } from "react";

import React from 'react'

export default function Main() {
    const [count, setCount]=useState(0);
    console.log(count);

    const handleCount=()=>{
        setCount(count => count +2);
    }

    const resetCount=()=>{
      setCount(0);
    }

  return (
    <div>
      <button onClick={handleCount}>
        you pressed {count}
      </button>
      <button onClick={resetCount}>
        reset
      </button>
    </div>
  );
}


