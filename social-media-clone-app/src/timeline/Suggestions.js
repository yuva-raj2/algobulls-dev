import React from 'react'
import "./Suggestions.css";
import userprofile from "../assets/anime-1.jfif";
function Suggestions() {
  return (
    <div className='Suggestions'>
      <div className='user-profile'>
        <div className='profile'>
          <img src={userprofile} alt='Userpro' className='userpro'/>
          <div className='user-id'>
            <a href="#">yuvi_0705</a>
            <a href='#'>Yuvaraj</a>
          </div>
          <div className='switch-acc'>
            <a href='#'>Switch</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suggestions