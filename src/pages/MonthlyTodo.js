import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import NavBar from '../components/NavBar';

const MonthlyTodo = () => {
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
        MonthlyTodo
      </h1>

      <HomeButton />
    </div>
  )
}

export default MonthlyTodo