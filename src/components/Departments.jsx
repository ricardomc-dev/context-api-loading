import React, { Component } from 'react'
import loadingContext from '../context/loadingContext';
 
import { getDepartments } from '../services/api'
 
class Departments extends Component {

  getDepartments = async () => {
    const { showLoading, hideLoading } = this.context;

    showLoading('Carregando departamentos...')

    const response = await getDepartments().then(response => {
      hideLoading()
      return response
    })
    console.log({ response })
  }

  render() {
    return (
      <>
        <button onClick={this.getDepartments}>Buscar departamentos</button>
      </>
    )
  }
}

Departments.contextType = loadingContext;
 
export default Departments
