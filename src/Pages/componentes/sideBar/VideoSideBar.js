import React, {useState} from 'react'
import "./VideoSideBar.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import { red } from '@mui/material/colors';

function VideoSideBar({likes, messages, shares}) {

  const[liked, setLiked] = useState(false)

  function hanndleLike(){
    setLiked(!liked)
  }

  return (
    <div className='VideoSideBarJS'><div></div>
        <div
        className='VideoSideBarJS__option'
        onClick= {hanndleLike}
        >
          {liked ? <FavoriteIcon fontSize = "large"  sx={{ color: red[500] }} /> : <FavoriteBorderIcon fontSize = "large" />}
            <p>{liked ? likes + 1 : likes}</p>
        </div>
        <div className='VideoSideBarJS__option'>
            <ChatIcon fontSize='large'/>
            <p>{messages}</p>
        </div>
        <div className='VideoSideBarJS__option'>
            <ShareIcon fontSize='large'/>
            <p>{shares}</p>
        </div>
    </div>
  )
}

export default VideoSideBar