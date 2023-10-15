import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../paginas/Login'
import Router2 from './Router2'
import RutasPrivadas from './RutasPrivadas'
import RutasPublicas from './RutasPublicas'

const Router = () => {
  return (
    <>
        <Routes>
           
            <Route path='login' element={
              <RutasPublicas>
                <Login/>
              </RutasPublicas>
            }/>
            <Route path='/*' element={
                <RutasPrivadas>
                  <Router2/>
                </RutasPrivadas>
               
            
            }/>
        </Routes> 
    </>
  )
}

export default Router
