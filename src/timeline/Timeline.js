import React from 'react'
import "./Timeline.css";
import Suggestions from './Suggestions';
import Posts from "./posts/Posts";
import Posts1 from "../assets/anime-1.jfif";
import Posts2 from "../assets/anime-2.jfif";
import Posts3 from "../assets/anime-3.jfif";
function Timeline() {
  return (
    <div className='Timeline'>
      <div className='Timeline-left'>
        <div className='Timeline-posts'>
          <Posts/>
          <div className="Posts-footer">
            <img src={Posts1} alt="anime-1st-post" className='post'/>
          </div>
          <br/>
          <br/>
          <Posts/>
          <div className="Posts-footer">
            <img src={Posts2} alt="anime-2nd-post" className='post'/>
          </div>
          <br/>
          <br/>
          <Posts/>
          <div className="Posts-footer">
            <img src={Posts3} alt="anime-3rd-post" className='post'/>
          </div>
        </div>
      </div>
      <div className='Timeline-right'><Suggestions/></div>
    </div>
  )
}

export default Timeline