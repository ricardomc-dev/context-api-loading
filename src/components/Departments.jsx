import React, { Component, Fragment } from 'react'
 
import Loading from './Loading'
 
import { getDepartments } from '../services/api'
 
class Departments extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    }
  }

  getDepartments = async () => {
    const { showLoading, hideLoading } = this.props;

    showLoading('Carregando departamentos...')

    const response = await getDepartments().then(response => {
      hideLoading()
      return response
    })
    console.log({ response })
  }

  render() {
    const { loading } = this.state

    return (
      <Fragment>
        <button onClick={this.getDepartments}>Buscar departamentos</button>
      </Fragment>
    )
  }
}
 
export default Departments
