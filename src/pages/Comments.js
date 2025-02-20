import React, {useEffect} from 'react'
import HomeButton from '../components/HomeButton'
import NavBar from '../components/NavBar'
import Share from '../components/share/Share'
import Post from '../components/post/Post'

const Comments = () => {
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
        This is Comments page
        </h1>
      <Share />
      <Post />
      <Post />
      <Post />
      <Post />

      <HomeButton />
    </div>
  )
}

export default Comments