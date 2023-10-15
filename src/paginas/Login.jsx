import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom/dist'
import Context from '../contexto/Context';

const Login = () => {
  const {logearse, setReferencia} = useContext(Context);
  const navegacion = useNavigate();

  const login = () => {
      logearse('Jab');
      navegacion("/", {replace:true});
  }
  const registro = (e) => {
     setReferencia(e.currentTarget.value); 
  }
  return (
    <>
        <section className='login'>
          <h1>Vive el pais:</h1>
          <label htmlFor="referencia">Referencia:</label>
          <input id="referencia" type="text" onChange={registro} placeholder='Referencia de tu billete' autoFocus autoComplete='off'/>
          <button className='botonRegistro' onClick={login}>Login</button>
        </section>
    </>
  )
}

export default Login
