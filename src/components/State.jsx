import React, {useState} from 'react'

const State = () => {
    const [state,setState] = useState(30); 
  return (
    <div className='container'>
       <p style={{fontSize: state}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, temporibus!</p>
       <button className='btn btn-dark m-2' onClick={()=>{
            setState(state+1)
       }}>Zoom in</button>
       <button className='btn btn-dark m-2'>Zoom out</button>
    </div>
  )
}

export default State