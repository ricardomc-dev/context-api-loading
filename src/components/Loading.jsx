import React, {useContext} from 'react' 
import loadingContext from '../context/loadingContext'
 
import Spinner from 'react-spinkit' 

function Loading () {
  
  const { loading, message } = useContext(loadingContext);

  return loading && ( 
    <div className='overlay-content'> 
        <div className='wrapper'> 
            <Spinner 
                name='pacman' 
                fadeIn='none' 
                color='yellow' 
            /> 
            <span className='message'> 
                {message} 
            </span> 
        </div> 
    </div> 
  )
}
 
export default Loading
