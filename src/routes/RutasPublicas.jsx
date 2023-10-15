import React, { useContext } from 'react'
import Context from '../contexto/Context'
import { Navigate } from 'react-router-dom/dist';

const RutasPublicas = ({children}) => {

  const { logeado } = useContext(Context);  
  return (!logeado)? children: <Navigate to="/"/>
}

export default RutasPublicas
