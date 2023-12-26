import React from "react";
import "./Homepage.css";
import Sidenav from "./navigations/Sidenav";
import Timeline from "./timeline/Timeline";
function Homepage(){
    return(
        <div className="Homepage">
            <div className="Sidenav">
              <Sidenav/>
            </div>
            <div className="Timeline">
              <Timeline/>
            </div>
        </div>
    )
}
export default Homepage;