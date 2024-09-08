// import React, { useState } from 'react'

// const StateComponent = () => {

//     const [count, setCount] = useState(0);

//     const upDatingCountState=()=>{
//         setCount(count + 1);
//     }
    
//     const resetCounter=()=>{
//         setCount(0);
//     }

//   return (
//     <>
//       <button onClick={upDatingCountState}>
//         This is the button to push
//       </button>  
//       <button onClick={resetCounter}>
//         This is how you reset the counter
//       </button>
//       <h1>{count}</h1>
      
//     </>
//   )
// }

// export default StateComponent

// import React, { useState } from 'react'

// const StateComponent = () => {

//     const[text, setText] = useState('newly reset');

//     function handleChange(e){
//         setText(e.target.value);
//     }
//   return (
//     <>
//       <input value={text} onChange={handleChange}/>
//       <p> You Typed: {text} </p>
//       <button onClick={()=> {
//         setText('newly reset')
//       }}>
//         reset
//       </button>
//     </>
//   )
// }

// export default StateComponent


// import React, {useState} from 'react';

// const StateComponent = () => {

//     const [liked, setLiked]= useState(true);

//     function handleChange(e){
//         setLiked(e.target.checked);
//     }

//   return (
//     <>
//       <label>
//         <input
//         type="checkbox"
//         checked={liked}
//         onChange={handleChange}
//         />
//         I liked this
//       </label>
//       <p>You {liked ? 'liked' : 'didnt like'}this.</p>
//     </>
//   );
// }

// export default StateComponent
import React, { useState } from 'react'

const StateComponent = () => {

    const [ name, setName ] = useState('No Name');
    const [ age, setAge ] = useState(18);



  return (
    <>
      <input
        value={name}
        onChange={e=> setName(e.target.value)}
      />
      <button onClick={()=> setAge(age + 1)}>
        Increment age
      </button>
      <p> Hello {name} , you are {age}</p>
    </>
  )
}

export default StateComponent
