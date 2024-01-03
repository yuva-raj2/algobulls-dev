import React, { useState } from 'react'
import "./Suggestions.css";
import userprofile from "../assets/anime-2.jfif";
import Follower from './Follower';
function Suggestions() {
  const [username,setusername]=useState([
    {
      id:1,
      user:"Arun",
      follower:"Followerview",
      choice:"follow"
    },
    {
      id:1,
      user:"Arun",
      follower:"Followerview",
      choice:"follow"
    },
    {
      id:1,
      user:"Arun",
      follower:"Followerview",
      choice:"follow"
    },
    {
      id:1,
      user:"Arun",
      follower:"Followerview",
      choice:"follow"
    }
  ])
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
        <div className='suggest'>
          <span className='suggestyou'>Suggested for you</span>
          <a href='#' className='see'>See all</a>
        </div>
      </div>
      {username.map((user)=><Follower/>)}
    </div>
  )
}

export default Suggestions