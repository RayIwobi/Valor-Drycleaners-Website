import React from 'react';
import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuizIcon from '@mui/icons-material/Quiz';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

import {Users} from '../../pages/home/dummyData'


function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeedIcon className="sidebarIcon"/>
              <span className="sidebarlistItenText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <ChatIcon className="sidebarIcon"/>
              <span className="sidebarlistItenText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <VideoLibraryIcon className="sidebarIcon"/>
              <span className="sidebarlistItenText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <GroupsIcon className="sidebarIcon"/>
              <span className="sidebarlistItenText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <BookmarkIcon className="sidebarIcon"/>
              <span className="sidebarlistItenText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <QuizIcon className="sidebarIcon"/>
              <span className="sidebarlistItenText">Questions</span>
            </li>
            <li className="sidebarListItem">
              <WorkOutlineIcon className="sidebarIcon"/>
              <span className="sidebarlistItenText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <EventIcon className="sidebarIcon"/>
              <span className="sidebarlistItenText">Events</span>
            </li>
            <li className="sidebarListItem">
              <SchoolIcon className="sidebarIcon"/>
              <span className="sidebarlistItenText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton" >Show more</button>
          <hr className='sidebarHr'/>

          <ul className="sidebarFriendList">
            {Users.map((u) => (
              <div key={u.id}>
              <li className='sidebarFriend'>
              <img className='sidebarFriendImg' src={u.profilePicture} alt=""/>
              <span className='sidebarFriendName'>{u.username}</span>
            </li>
            </div>
            ))}
            
            
          </ul>
        </div>
    </div>
  )
}

export default Sidebar