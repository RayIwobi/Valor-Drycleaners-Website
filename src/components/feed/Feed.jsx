import React from 'react'
import './feed.css'
import Share from '../../components/share/Share';
import Post from '../../components/posts/Post';
import {Posts} from '../../pages/home/dummyData'



function Feed() {
  return (
    <div className="feed">
      <div className='feeder'>
        <div className="feedWrapper">
          <Share/>
          {Posts.map((p) => (
            <Post key={p.id} post={p}/>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Feed