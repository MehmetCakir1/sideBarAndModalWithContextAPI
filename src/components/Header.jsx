import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Header = ({isVisible,setIsVisible}) => {
  return (
    <div className='header'>
      <h1>Coding <span>Addict</span></h1>
      <button onClick={()=>setIsVisible(!isVisible)} className='headerIcon'><FaTimes/></button>
    </div>
  )
}

export default Header