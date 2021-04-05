import React from 'react'
import './sidebar.css'
import Sidebarrow from './Sidebarrow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

function Siderbar() {
    return (
        <div className="Sidebar">
            <Link to="/">
                <Sidebarrow  selected Icon={HomeIcon} title="Home"/>
            </Link>
            <Sidebarrow Icon={WhatshotIcon} title="Trending"/>
            <Sidebarrow Icon={SubscriptionsIcon} title="Subscription"/>
            <hr className="line"/>
            <Sidebarrow selected Icon={LibraryAddIcon} title="Library"/>
            <Sidebarrow selected Icon={HistoryIcon} title="History"/>
            <Sidebarrow selected Icon={OndemandVideoIcon} title="Your videos"/>
            <Sidebarrow selected Icon={WatchLaterIcon} title="Watch Later"/>
            <Sidebarrow selected Icon={ThumbUpAltIcon} title="Liked videos"/>
            <Sidebarrow selected Icon={ExpandMoreIcon} title="Show more"/>
            <hr className="line"/>

            

        </div>
    )
}

export default Siderbar
