import './share.css'
import React from 'react'
import person3 from '../../assets/person/person3.jpeg'

export default function Share() {
  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img className='shareProfileImg' src={person3} alt='not found'/>
          <input placeholder='what is in your mind?' className='shareInput' />
        </div>
        <hr className='shareHr' />
        <div className='shareBottom'>
          <div className='shareOptions'>
            <div className='shareOption' style={{color: 'gold'}}>
            <i class="fa-solid fa-photo-film"> </i>
              <span className='shareOptionText'>
              Photo/Video 
              </span>
            </div>
            <div className='shareOption' style={{color: 'blue'}}>
            <i class="fa-solid fa-tag"></i>
              <span className='shareOptionText'>
              Tag
              </span>
            </div>
            <div className='shareOption' style={{color: 'tomato'}} >
            <i class="fa-solid fa-location-dot"></i>
              <span className='shareOptionText'>
               Location 
              </span>
            </div>
            <div className='shareOption'  style={{color: 'black'}}>
              <i class="fa-solid fa-face-smile"></i>
              <span className='shareOptionText'>
              Emoji 
              </span>
            </div>
            <button className='shareButton'>Share</button>
          </div>
        </div>
      </div>


    </div>

  )
}