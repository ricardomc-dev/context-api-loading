import React, { useContext, useState } from 'react'
import loadingContext from '../context/loadingContext';
 
import { getDepartments } from '../services/api'
 
function Departments () {
  const { showLoading, hideLoading, setDepartList, setUserList} = useContext(loadingContext);
  

  const handleDepartments = async () => {
    showLoading('Carregando departamentos...')
    setUserList([])

    const response = await getDepartments().then(response => {
      hideLoading()
      return response
    })
    setDepartList(response)
  }

  return (
    <button onClick={handleDepartments}>Buscar departamentos</button>
  )
}


 
export default Departments
