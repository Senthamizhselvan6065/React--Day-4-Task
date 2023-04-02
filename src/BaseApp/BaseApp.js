import React from 'react'
import { useHistory } from 'react-router-dom'

const BaseApp = ({ title, children }) => {
const history = useHistory()
  return (
    <div className='BaseApp'>
      <div className='nav-bar'>
        <button onClick={()=>history.push("/")}>Dashborad</button>
        <button onClick={()=>history.push("/border")}>Border</button>
        <button onClick={()=>history.push("/color")}>Color</button>
        <button onClick={()=>history.push("/login")}>login</button>
      </div>
      <div className='title'>{title}</div>
      <div className='children'>{children}</div>
    </div>
  )
}

export default BaseApp