import {useState} from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const [value, setValue] = useState('Hello')

  function increment(){
    setCount(prevState => prevState + 1)
  }
  function decrement(){
    setCount(prevState => prevState - 1)
  }

  return (
    <div>
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <input value={value} onChange={event => setValue(event.target.value)} type="text"/>
      <h1>{value}</h1>
    </div>
  )
}