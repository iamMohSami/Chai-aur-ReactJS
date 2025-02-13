import './App.css'
import { useState } from 'react'

function App() {

  //useState Hook is a Function which takes the initial value as input parameter and returns 2 things : 
  //1. The current value
  //2. A function to update the current value
  const[counter, setCounter] = useState(5) ; 
  // let counter = 5 ; Not Req anymore as useState is used



  
  const addValue = () => {
    // counter = counter + 1 
    setCounter(counter + 1)
    console.log("Add Value is Clicked | Value is :", counter)

  }

  const removeValue = () => {
    // counter = counter - 1
    setCounter(counter - 1)
    console.log("Remove Value is Clicked | Value is :", counter)
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value</button>
      <p>Current Value : {counter}</p>
    </>
  )
}

export default App
