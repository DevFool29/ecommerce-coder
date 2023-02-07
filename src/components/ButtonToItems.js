import { Link } from "react-router-dom"
import './styles/buttontoitems.css'

const ButtonToItems = () => {
  return (
    <Link to="/">
      <button className="back-to-root">
          Volver al inicio
      </button>
    </Link>
  )
}

export default ButtonToItems