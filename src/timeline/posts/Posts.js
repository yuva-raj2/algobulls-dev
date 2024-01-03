import React from "react";
import {SmallDashOutlined} from "@ant-design/icons"
import "./Posts.css";
import Post from "./anime-1.jfif";
function Posts(){
    return(
    <div className="Posts">
        <div className="Post-head-pro">
          <div className="Posts-logo">
            <div className="Posts-logo-1">
              <span className="p-logo">Y</span>
            </div>
          <div className="Posts-image">
           yuvi_0702<span className="time">.12m</span>
           <SmallDashOutlined className="dash"/>
          </div>
          </div>
        </div>
        <div className="Posts-img">
          <img src={Post} alt="Post-anime-img"/>
        </div>
    </div>
    )
}
export default Posts;