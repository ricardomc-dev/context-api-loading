import React, { useState } from 'react';
import loadingContext from './loadingContext';

function LoadingProvider ({children}) {
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  
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
    showLoading,
    hideLoading,
  }

  return (
    <loadingContext.Provider value={contextValue}>
        {children}
    </loadingContext.Provider>
  )
}

export default LoadingProvider;

