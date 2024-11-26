import React, { useState } from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Users} from '../../pages/home/dummyData'


function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isliked, setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isliked ? like - 1 : like + 1)
        setIsLiked(!isliked)
    }

  return (
    <div className="post">
        <div className='postWrapper'>
        <div className="postTop">
            <div className="postTopLeft">
                <img className='postProfileImg' src={Users.filter((u) => u.id === post?.userid)[0].profilePicture} alt=''/>
                <span className='postUsername'>{Users.filter((u) => u.id === post?.userid)[0].username}</span>
                <span className='postDate'>{post.date}</span>
            </div>
            <div className="postTopRight"></div>
            <MoreVertIcon />
        </div>
        <div className="postCenter">
             <span className='postText'>{post?.desc}</span> {/*the ques mark is for posts without description */}
            <br/><br/>
            <img className="postCenterImg" src={post.photo} alt=''/>
        </div>
        <div className="postBottom">
        <div className='postBottomLeft'>
            <img className="likeIcon" src='assets/like.png' onClick={likeHandler} alt=''/>
            <img className="likeIcon" src='assets/heart.png' onClick={likeHandler} alt=''/>
            <span className='postLikeCounter'>{like} people liked it </span>
        </div>
        <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comments</span>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Post