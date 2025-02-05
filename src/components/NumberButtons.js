import React, {useState} from 'react'

const NumberButtons = () => {
  const [clickedButton, setClickedButton]= useState('')

  const numbers = ['1','2','3','4','5','6','7']
  
  const handleButtonClick = (num)=>{
    setClickedButton(num)  
  }

  return (
    <div>
      <div style={style.button}>
        {numbers.map((num)=>(
          <div className='button' style={style.button} onClick={()=>handleButtonClick(num)}>{num}</div>
        ))}
      </div>
      
      <div className='display' style={style.display}>
        {clickedButton ? clickedButton : ''}
      </div>
    </div>
    
  )
}

const style={
  button:{
    display:'flex',
    justifyContent: 'center',
    gap:'10px'
  },

  display:{
    background:'grey',
    width:'100%',
    height:'5vh'
  }
}
export default NumberButtons