import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './videocard.css'
function VideoCard({image, channelimg, channel, title, views, time}) {
    return (
      <div className="videocard">
        <img className="videocard_img" src={image} alt=""/>
            <div className="videocard_info">
                <AccountCircleIcon
                src={channelimg} alt="tech burner"/>
                <div className="videocard_text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} * {time}</p>
                </div>
            </div>
      </div>
    )
}

export default VideoCard
