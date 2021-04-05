import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './HistoryCard.css'

function HistoryCard({image , channelimg, title, channel, views, time }) {
    return (
       
            <div className="History">
            <div>
                <img className="videocard_img" src={image} alt=""/>
            </div>
            
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

export default HistoryCard
