import { useState } from "react"
import './styles/itemcount.css'

const ItemCount = () => {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="container-counter">
          <button className="symbol" onClick={() => setCounter(counter-1)}>-</button>
          <span className="counter-item">{counter < 0 ? setCounter(0): `${counter}`}</span>
          <button className="symbol" onClick={() => setCounter(counter+1)}>+</button>
      </div>
    </>
  )
}

export default ItemCount