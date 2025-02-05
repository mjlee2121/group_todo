import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Calendar from '../components/Calendar'

const Home = () => {
  const navigate = useNavigate()

  const navigateToInputs = ()=>{
    navigate('/inputs')
  }

  const navigateToDailyTodo = ()=>{
    navigate('/dailytodo')
  }

  useEffect(()=>{
    // Setting the background color
    document.body.classList.add('universal-bg')
    return ()=>{
      document.body.classList.remove('universal-bg')
    }
  },[])

  return (
    <div className='container'>
      <div>
        <NavBar />
      </div>
      <div>
        <Calendar />
      </div>
    </div>
  )
}

export default Home