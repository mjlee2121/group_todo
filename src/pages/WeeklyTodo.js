import React, {useEffect} from 'react'
import HomeButton from '../components/HomeButton'
import NavBar from '../components/NavBar'

const WeeklyTodo = () => {
  useEffect(()=>{
        // Setting the background color
        document.body.classList.add('universal-bg')
        return ()=>{
          document.body.classList.remove('universal-bg')
        }
      },[])

  return (
    <div className='container'>
      <NavBar />
      <h1>
        This is Weekly Todo Page
      </h1>
      <HomeButton />
    </div>
  )
}

export default WeeklyTodo