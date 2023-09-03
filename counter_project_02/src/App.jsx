import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0) ;
  const increaseValue = () => {
    if(counter === 20 ){
      alert("Limitation reached ")
    }else{
      setCounter(counter+1)
    }
  }
  const decreaseValue = () => {
    if(counter === 0 ){
      alert("Counter value cannot be negative")
    }else{
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h2> Hello world || Sudipta jana</h2> 
      <h2>  Counter value : {counter} </h2>
      <button onClick={increaseValue}>  Increase Count </button>
      <button onClick={decreaseValue}>  Decrease Count </button>
    </>
  )
}

export default App
