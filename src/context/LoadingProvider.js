import React, { useState } from 'react';
import loadingContext from './loadingContext';

function LoadingProvider ({children}) {
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [departList, setDepartList] = useState([]);
  const [userList, setUserList] = useState([]);
  
  function showLoading(message) {
    setLoading(true)
    setMessage(message)
  } 
  
  function hideLoading() {
    setLoading(false)
  }

  const contextValue = {
    loading,
    message,
    departList,
    userList,
    showLoading,
    hideLoading,
    setDepartList,
    setUserList,
  }

  return (
    <loadingContext.Provider value={contextValue}>
        {children}
    </loadingContext.Provider>
  )
}

export default LoadingProvider;

