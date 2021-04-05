import React from 'react';
import Header from './header';
import Sidebar from './Siderbar'
import Mainvideo from './Mainvideo'
import Search from './Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route path="/search/:searchcode">
          <div className="app_page">
            <Sidebar />
            <Search/>
            </div> 
          </Route>
          <Route path="/">
           <div className="app_page">
            <Sidebar />
            <Mainvideo/>
          </div>  
          </Route>
        </Switch>
      </Router>
     </div>
  );
}

export default App;
