import React from "react";
import {SmallDashOutlined} from "@ant-design/icons"
import "./Posts.css";
function Posts(){
    return(
    <div className="Posts">
        <div className="Posts-logo">
          <div className="Posts-logo-1">
            <span className="p-logo">Y</span>
          </div>
        </div>
        <div className="Posts-image">
        yuvi_0702<span className="time">.12m</span>
        <SmallDashOutlined className="dash"/>
        </div>
    </div>
    )
}
export default Posts;