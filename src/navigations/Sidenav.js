import React from 'react';
import "./Sidenav.css";
import instaLogo from "../assets/insta-logo.png";
import {HomeOutlined,SearchOutlined,CompassOutlined,YoutubeOutlined,WechatOutlined,HeartOutlined,FolderAddOutlined} from '@ant-design/icons';
function Sidenav() {
  return (
    <div className='Sidenav'>
      <img className="Sidenav_Logo" src={instaLogo} alt='instagram'></img>
      <div className='Sidenav__Buttons'>
        <div className='Sidenav_Home'>
          {/**Icons**/}
          <HomeOutlined/>
          <span className='home'>Home</span>
        </div>
        <br/>
        <div className='Sidenav_Search'>
          <SearchOutlined/>
          <span className='search'>Search</span>
        </div>
        <br/>
        <div className='Sidenav_Explore'>
          <CompassOutlined />
          <span className='explore'>Explore</span>
        </div>
        <br/>
        <div className='Sidenav_Reels'>
          <YoutubeOutlined/>
          <span className='reels'>Reels</span>
        </div>
        <br/>
        <div className='Sidenav_Messages'>
          <WechatOutlined />
          <span className='messages'>Messages</span>
        </div>
        <br/>
        <div className='Sidenav_Likes'>
          <HeartOutlined />
          <span className='likes'>Notifications</span>
        </div>
        <br/>
        <div className='Sidenav_Add'>
          <FolderAddOutlined />
          <span className='add'>Create</span>
        </div>
        <br/>
      </div>
    </div>
  )
}

export default Sidenav