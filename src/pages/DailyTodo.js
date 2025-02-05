import React, {useEffect} from 'react'
import HomeButton from '../components/HomeButton'
import Calendar from '../components/Calendar'
import NavBar from '../components/NavBar'
import TaskTable from '../components/TaskTable'

const DailyTodo = () => {
    useEffect(()=>{
        // Setting the background color
        document.body.classList.add('universal-bg')
        return ()=>{
          document.body.classList.remove('universal-bg')
        }
      },[])

  return (
    <div className='conatiner'>
    <NavBar />
    <h1 style={{display:'flex', justifyContent:'center'}}>Daily To Do</h1>
      <div className='left-pane' >
        <Calendar />
      </div>
      <div className='right-pane' >
        <TaskTable />
      </div>
    <HomeButton />
  </div>
  )
}

export default DailyTodo
