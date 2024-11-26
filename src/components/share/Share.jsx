import React from 'react';
import './share.css';
//import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
//import LocationOnIcon from '@mui/icons-material/LocationOn';
//import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';




function Share() {
    <LabelIcon style={{ color: 'purple' }} />

  return (
    <div className="feedShare">
        <div className="shareWrapper">
            <div className='shareTop'>
                <img className="shareProfileImg" src="/assets/person/1.jpeg" alt=''/>
                <input placeholder="what's on your mind?" className='shareInput'/> 
            </div>
            <hr className='shareHr'/>
            <div className='shareButton'>
                <div className='shareOptions'>
                    <div className='shareOption'>
                        {/* <PermMediaIcon className='shareIcon'/> */}
                        <img src='/assets/video_picture.png' className='instagramIcon' alt=''/>
                        <span className='shareOptionText'>Photo or video</span>
                    </div>
                    <div className='shareOption'>
                        <LabelIcon className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className='shareOption'>
                        {/* <LocationOnIcon className='shareIcon'/> */}
                        <img src='assets/location.png' className='instagramIcons' alt=''/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className='shareOption'>
                        {/* <InsertEmoticonIcon className='shareIcon'/> */}
                        <img src='assets/smile.png' className='instagramIcon' alt=''/>
                        <span className='shareOptionText'>Emotions</span>
                    </div>
                </div>
                <button className="shareButtonside">share</button>
            </div>
        </div>
    </div>
  )
}

export default Share

