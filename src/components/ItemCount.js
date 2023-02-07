import './styles/itemcount.css'

const ItemCount = ({stockDetail, counter, setCounter, setMessageStock}) => {

  const sumar = () => {
    if(stockDetail === counter){
      setMessageStock(true)
      return
    }
    setCounter(counter+1)
  }

  const restar = () => {
    if(counter === 0){
      return
    }
    setMessageStock(false)
    setCounter(counter-1)
  }

  return (
    <>
      <div className="container-counter">
          <button className="symbol" onClick={restar}>-</button>
          <span className="counter-item">{counter < 0 ? setCounter(0): counter}</span>
          <button className="symbol" onClick={sumar}>+</button>
      </div>
    </>
  )
}

export default ItemCount