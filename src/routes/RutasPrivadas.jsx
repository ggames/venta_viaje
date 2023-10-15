import React, { useContext } from 'react'
import Context from '../contexto/Context'
import { Navigate } from 'react-router-dom/dist';

const RutasPrivadas = ({children}) => {

  const { logeado } = useContext(Context);  
  return (logeado)? children: <Navigate to="/login"/>
}

export default RutasPrivadas
