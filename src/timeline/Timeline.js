import React, { useState } from 'react'
import "./Timeline.css";
import Suggestions from './Suggestions';
import Posts from "./posts/Posts";
function Timeline() {
  const [post,setpost]=useState([
    {
      user:"Yuvi",
      id:1,
      timestamp:43,
      likes:4000,
      views:5000,
      postsimg:"../anime",
    },
    {
      user:"Raj",
      id:2,
      timestamp:46,
      likes:5000,
      views:7000,
      postsimg:"../anime",
    },
    {
      user:"Raja",
      id:3,
      timestamp:50,
      likes:500,
      views:700,
      postsimg:"../anime",
    },
  ])
  return (
    <div className='Timeline'>
      <div className='Timeline-left'>
        <div className='Timeline-posts'>
          <div className="Posts-footer">
           {post.map(post=>(<Posts/>))}
          </div>
          <br/>
          <br/>
        </div>
      </div>
      <div className='Timeline-right'><Suggestions/></div>
    </div>
  )
}

export default Timeline