import React from 'react'

import Departments from './components/Departments'
import Users from './components/Users'
import Loading from './components/Loading'

import './index.css'

import LoadingProvider from './context/LoadingProvider'


function App () {

  return (
    <LoadingProvider>
      <>
        <Users />
        <Departments />
        <Loading />
      </>
    </ LoadingProvider>
  )
}

export default App
