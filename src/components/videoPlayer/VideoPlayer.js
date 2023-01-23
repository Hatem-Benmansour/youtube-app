import React from 'react'

const VideoLink = {
  
  url:"https://www.youtube.com/embed/Ke90Tje7VS0" ,
  title : "ReactJS Tutorial - 1 - Introduction",
  hachtag : "ReactJS Tutorial for Beginners",
};

const VideoPlayer = () => {
  return (
    <div style={{marginLeft:"100px"}}>
                 <iframe style ={{height:"530px",width:"942px"}} title ="video"src={VideoLink.url}> </iframe>
                 <p style={{color:"blue"}}>{VideoLink.hachtag} </p>
                 <h5>{VideoLink.title} </h5>

    </div>
  )
}

export default VideoPlayer