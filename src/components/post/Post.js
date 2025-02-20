import './post.css'
import React from 'react'
import post1 from '../../assets/post/post1.jpeg'
import person1 from '../../assets/person/person3.jpeg'

const Post = () => {
  return (
    <div className='post' style={{color:'black'}}>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className="postTopLeft">
            <img src={person1} className="postProfileImg" alt="" />
            <span className="postUsername">Jason</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>

        <div className='postCenter'>
          <span className="postText">Hey! It's my first post</span>
          <img className='postImg' src={post1} alt="" />
        </div>

        <div className='postBottom'>
          <div className="postBottomLeft">
            <img src="../..assets/" alt="" />
          </div>
          <div className="postBottomRight">

          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Post