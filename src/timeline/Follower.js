import "./Follower.css";
import userprofile from "../assets/anime-2.jfif";
function Follower() {
  return (
    <div className="Follower">
      <div className='user-pro'>
        <div className='pro'>
          <img src={userprofile} alt='Userpro' className='userpro'/>
          <div className='u-id'>
            <a href="#">yuvi_0705</a>
            <span className="followers">Followed by yuvi</span>
          </div>
          <div className='follow-acc'>
            <a href='#'>Follow</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Follower