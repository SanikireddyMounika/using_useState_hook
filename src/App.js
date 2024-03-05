import {useState} from 'react'
import "./App.css"

function App() {
  let [Count,setCount]=useState(0)
  const addHandler=()=>{
    setCount(Count+1)
  }
  const subHandler=()=>{
    setCount(Count-1)
  }
  const mulHandler=()=>{
    setCount(Count*2)
  }
  const divHandler=()=>{
    setCount(Count/2)
  }
  const resetHandler=()=>{
    setCount(Count=0)
  }
  return (
    <>

      
      <div className='button'>
      <h1>Count:{Count}</h1>
      <button className="btn btn-primary" onClick={addHandler}>+</button>
      <button className="btn btn-primary" onClick={subHandler}>-</button>
      <button className="btn btn-primary" onClick={mulHandler}>*</button>
      <button className="btn btn-primary" onClick={divHandler}>/</button>
      <button className="btn btn-danger" onClick={resetHandler}>Reset</button>
      </div>

    </>
  );
}


export default App;
