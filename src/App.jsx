import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [counter, setCounter]= useState(true);
   const addValue = ()=>{
    setCounter((counter)=>counter+1); //It avoids batching
    setCounter(counter+1);
    setCounter(counter+1);//Here batching occurs
   }
   function subValue(){
    return setCounter(counter-1);

   }
  return (
    <>
      <h1>React Course with Hitesh {counter}</h1>
      <h2>Course value: {counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={subValue}>remove value</button>
      <p>footer: {counter} </p>
    </>
  )
}  

export default App;