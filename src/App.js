import React from 'react'

import Departments from './components/Departments'
import Users from './components/Users'
import ListItens from './components/ListItens'
import Loading from './components/Loading'

import './index.css'

import LoadingProvider from './context/LoadingProvider'


function App () {

  return (
    <LoadingProvider>
      <>
        <Users />
        <Departments />
        <ListItens />
        <Loading />
      </>
    </ LoadingProvider>
  )
}

export default App
