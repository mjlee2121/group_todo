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
    <div>
    <NavBar />
    <h1>Daily To Do</h1>
    <div className='container' >
      <div className='left-pane' >
        <Calendar />
      </div>
      <div className='right-pane' >
        <TaskTable />
      </div>
    </div>
    <HomeButton />
  </div>
  )
}

export default DailyTodo
