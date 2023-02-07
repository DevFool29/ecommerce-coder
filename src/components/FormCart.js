import { useState } from 'react'
import './styles/formcart.css'

const FormCart = ({formValue, handleInput, createOrder}) => {

  const[validateEmail, setValidateEmail] = useState(false)

  const handleInputValidator = (event) =>{
    if(event.target.value === formValue.email){
      setValidateEmail(true)
    }else{
      setValidateEmail(false)
    }
  }

  const enviarMensaje = () => {
   alert('Los emails no coinciden')
  }

  return (
    <div className='check-form'>
      <h3 className="verify">Ingresa aquí tus datos y genera tu orden</h3>
      <form className='form'>
        <label>
          Nombre
        </label>
        <input
          name='name'
          type='text' 
          placeholder="Ingresa tu nombre y apellido" 
          value={formValue.name}
          onChange={handleInput}
        />
        <label>
          Número de celular
        </label>
        <input
          name="phone"
          type='text' 
          placeholder="Ingresa tu número de celular" 
          value={formValue.phone}
          onChange={handleInput}
        />
        <label>
          Email
        </label>
        <input 
          name="email"
          type='email' 
          placeholder="Ingresa tu email" 
          value={formValue.email}
          onChange={(event) => {
            handleInput(event)
            handleInputValidator(event)
          }}
        />
        <label >
          Repita su email
      </label>
      </form>

      {/* Para validar uso un input por fuera */}
      <input
        className="validate-email" 
        type="email"
        placeholder="Ingrese nuevamente su email"
        onChange={handleInputValidator}
      />
      
      <button className="create-order" onClick={ validateEmail ?  createOrder : enviarMensaje}>Crear Orden</button>
    </div>
  )
}

export default FormCart