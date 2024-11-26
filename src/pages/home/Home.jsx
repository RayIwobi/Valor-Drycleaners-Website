import React from 'react';
import './home.css';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/Rightbar';

function Home() {
  return (
    <>
    <Topbar />
    <div className="homeContainer">
    <Sidebar/>
    <Feed />
    <div className="moni">
      <Rightbar />
    </div>
    </div>
    </>
  )
}

export default Home