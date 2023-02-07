import ButtonToItems from './ButtonToItems'
import './styles/errorpage.css'

const ErrorPage = () => {
  return (
    <div className="error-page">
       Lo sentimos, el producto que busca no está disponible
       <ButtonToItems />
    </div>
  )
}

export default ErrorPage