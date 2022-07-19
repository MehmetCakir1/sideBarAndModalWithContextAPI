import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../ContextAPI'

const Social = () => {
  const {social}=useContext(DataContext)
  return (
    <ul className='iconsUl'>
      {
        social.map((item)=>{
          const {url,id,icon}=item;
          return(
              <li key={id}><Link to={url.slice(6)} target="_blank">{icon}</Link></li> 
          )
        })
      }
    </ul>
  )
}

export default Social