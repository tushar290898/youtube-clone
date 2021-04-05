import React, {useState} from 'react'

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import './header.css'
import { Link } from 'react-router-dom';


const Header = ()=> {
   const [searchInput, setsearchInput] = useState('');
    return (
        <div className='header_side'>
            <div>
            <MenuIcon/>
            <Link to="/">
                <img className="header_img" src="https://static.toiimg.com/photo/58623495.cms" alt=""/>
            </Link>
      
            </div>
            <div className="header_input">
            <input 
            value={searchInput}
            onChange={(e)=>setsearchInput(e.target.value)}
              placeholder="Search" type="Search"/>
              <Link to={`/search/${searchInput}`}>
                <SearchIcon className="input_logo"/>
              </Link>
            
            </div>
            <div className="Allicons"> 
            <VideocamIcon/>
            <AppsIcon/>
            <NotificationsIcon/>
            <AccountCircleIcon/>
            </div>


            {/* onChange={(e) => setInputsearch(e.target.value)}
            value={inputSearch} */}
             {/* const [inputSearch, setInputsearch] = useState(" "); */}
          
        </div>
    )
}

export default Header;
