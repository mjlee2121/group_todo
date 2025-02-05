import React, {useState} from 'react'

const TaskTable = ({onTaskSubmit, tasks}) => {
  const [inputValue, setInputValue] = useState({priority:'',task:'',status:''})
  const [status, setStatus] = useState()
  
  console.log('task', tasks)
  const handleInputChange = (e) =>{
    const {name, value} = e.target
    setInputValue({...inputValue, [name]:value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(inputValue.task){
      onTaskSubmit([...tasks, inputValue]) // pass updated tasks to parent
      setInputValue({priority:'',task:''})
    }

  }
  return (
    <div>
      <div className='form-input' >
        <form onSubmit={handleSubmit}>
          <input 
          type='text'
          name='priority'
          className='form-pri-input'
          value={inputValue.priority}
          onChange={handleInputChange}
          placeholder="Priority"
          />
          <input 
            type="text"
            name="task"
            className='form-task-input'
            value={inputValue.task}
            onChange={handleInputChange}
            placeholder="Task"
          />
          <button type='submit' className='submit-button' >Add</button>
        </form>
      </div>
      

      <table border='1' style={style.taskTable}>
        <thead>
          <tr>
            <th style={{width:'15%'}}>Priority</th>
            <th style={{width:'70%'}}>Task</th>
            <th style={{width:'15%%'}}>Status</th>
          </tr>
        </thead>

        <tbody>
          {inputValue.tasks ? (
            inputValue.tasks.map((row, index)=>(
            <tr key={index}>
              <td>{row.priority}</td>
              <td>{row.task}</td>
            </tr>
          ))) :(
            <tr>
              <td colSpan='2' style={{textAlign: 'center'}}>
                No tasks for this date
              </td>
            </tr>
          )}
          
        </tbody>
      </table>
    </div>
  )

  {/* Display selected date's task table */}
  // {selectedDate && (
  //   <div style={{ marginTop: '20px' }}>
  //     <TaskTable
  //       onTaskSubmit={handleTaskSubmit}
  //       tasks={tasksByDate[selectedDate.toISOString().split('T')[0]] || []}
  //     />
  //   </div>
  // )} 
}

const style = {
  taskTable:{
    width: '70vw', /* Takes 80% of the viewport width */
    maxWidth: '1200px', /* Optional: Set a max width for large screens */
    height: '10vh', 
    // display: 'grid',
    // gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '10px',
    marginTop: '20px'
  }
}
export default TaskTable