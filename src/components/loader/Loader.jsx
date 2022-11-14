import React from 'react'
import  ReactDOM  from 'react-dom'
import "./loader.css"

const Loader = () => {
  return ReactDOM.createPortal(
    <div className='wrapper'>
    <div className='loader'>
<img className='gif' src='images/loader.gif'
    alt='Loading...'
/>
    </div>
    </div>,
document.getElementById("loader")
  )
}

export default Loader