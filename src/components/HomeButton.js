import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeButton = () => {
  const navigate = useNavigate()

  const navigateToHome = ()=>{
    navigate('/home')
  }

  return (
    <div>
      <button className='navigate-button' onClick={navigateToHome}>Home</button>
    </div>
  )
}

export default HomeButton