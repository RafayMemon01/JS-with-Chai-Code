import React from 'react'

const Hello = ({number,num, setnum}) => {
  return (
    <div className='bg-blue-500'>hello rafay bhai!  {number}
    
    <h1>{num}</h1>
    <button onClick={()=>{setnum(num-1)}}>Substact</button>
    </div>
  )
}

export default Hello