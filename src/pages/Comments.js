import React, {useEffect} from 'react'
import HomeButton from '../components/HomeButton'

const Comments = () => {
  useEffect(()=>{
      // Setting the background color
      document.body.classList.add('universal-bg')
      return ()=>{
        document.body.classList.remove('universal-bg')
      }
    },[])

  return (
    <div>
      <h1>
      This is Comments page
      </h1>
      <HomeButton />
    </div>
  )
}

export default Comments