import React from 'react'
// import vid from '../../components/Video/vid.mp4';
import WHL from '../../components/WHL/WHL';
import { useSelector } from 'react-redux';
function LikedVideo() {
  const likedVideoList= useSelector(state=>state.likedVideoReducer)
  // const likedVideo=[
  //   {
  //     _id:1,
  //     video_src: vid,
  //     Chanel:"62bafe6752",
  //     title:"video 1",
  //     Uploder:"abc",
  //     description:"description of video 1"
  //   },
  //   {
  //     _id:2,
  //     video_src: vid,
  //     Chanel:"cdd",
  //     title:"video 2",
  //     description:"description of video 2" 
  //   },
  //   {
  //     _id:3,
  //     video_src: vid,
  //     Chanel:"add",
  //     title:"video 3",
  //     description:"description of video 3" 
  //   },
  //   {
  //     _id:4,
  //     video_src: vid,
  //     Chanel:"add",
  //     title:"video 4",
  //     description:"description of video 4" 
  //   },
  //  ];

   return (
    <WHL page={"Liked Video"} videoList={likedVideoList}/>
  )
}
export default LikedVideo
