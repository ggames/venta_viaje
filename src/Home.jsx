import React from 'react'
import Router from './routes/Router'
import Provider from './contexto/Provider'

const Home = () => {
  return (
    <> 
    <Provider>
       <Router/>
    </Provider> 
        
    </>
  )
}

export default Home
