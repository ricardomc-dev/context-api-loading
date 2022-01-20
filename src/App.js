import React, { Component, createContext } from 'react'

import Departments from './components/Departments'
import Users from './components/Users'
import Loading from './components/Loading'

import './index.css'

const LoadingContext = createContext({
  loading: false,
  message: null,
  showLoading: () => { },
  hideLoading: () => { },
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      message: null,
    }
    this.showLoading = this.showLoading.bind(this);
    this.hideLoading = this.hideLoading.bind(this);
  }

  showLoading(message) {
    this.setState({
      loading: true,
      message
    })
  } 
  
  hideLoading() {
    this.setState({
      loading: false,
    })
  }

  render() {
    const { showLoading, hideLoading } = this;

    const value = {
      ...this.state,
      showLoading,
      hideLoading,
    }

    return (
      <LoadingContext.Provider value={value}>
        <LoadingContext.Consumer>
          { 
            ({ showLoading, hideLoading, loading, message }) => (
              <>
                <Users {...{ showLoading, hideLoading }} />
                <Departments {...{ showLoading, hideLoading }} />
                <Loading {...{ loading, message }}/>
              </>
            )
          }
        </LoadingContext.Consumer>
      </LoadingContext.Provider>
    )
  }
}

export default App
