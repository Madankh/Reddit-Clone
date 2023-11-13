"use client"
import React , {useState} from 'react'
import "./postcommentpage.css"
import Navbar from '../Navbar'
import Centerpost from './Centerpost'
import upIcon from "../../../ImageForReddit/icons8-up-80.png"
import down from "../../../ImageForReddit/icons8-down-80.png"
import imageIcon from "../../../ImageForReddit/icons8-image-50.png"
import Upvote from "../../../ImageForReddit/Upvote.png"
import Downvote from "../../../ImageForReddit/downVote.png"
import Leftside from './Leftside'
import Image from 'next/image'
export default function PostCommentPage() {
  const [count , setCount] = useState(11)
  const [like , setlike] = useState(upIcon);
  const [Dislike , setDislike] = useState(down)
  const handleLike=()=>{
      if(like == upIcon){
          setlike(Upvote);
          setDislike(down);
          setCount(count+1)
      }else{
          setlike(upIcon);
          setCount(count-1) 
      }
  }
  const handleDislike = ()=>{
      if(Dislike == down){
          setDislike(Downvote)
          setlike(upIcon)
          setCount(count-1)
      }else{
          setDislike(down);
          setCount(count+1);
      }
  }
  return (
    <div>
        <Navbar/>
        <div style={{display:'flex' }}>
          <div className='PostCommentpageRight'></div>
          <div className='PostCommentpageCenter'>
            <div style={{display:'flex' , alignItems:'center' , marginTop:10 , marginLeft:10 , marginBottom:14}}>
              <Image src={like} onClick={handleLike} className="upicon" alt=''/>
              <p style={{marginLeft:10}}>{count}</p>
              <Image src={Dislike} onClick={handleDislike} className="downicon" alt=''/>
              <Image src={imageIcon} className="imageicon" alt=''/>
              <p style={{marginLeft:10}}>Numb</p>
              <p style={{marginLeft:10 , padding:1 , backgroundColor:'black' , borderRadius:2 , border:"1px solid #808080"}}>spoiler</p>
            </div>
            <Centerpost/>
          </div>
          <div className='PostCommentpageLeft'>
            <Leftside/>
          </div>
        </div>
    </div>
  )
}
