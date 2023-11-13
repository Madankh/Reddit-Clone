"use client"
import "./rightitem.css"
import Image from 'next/image'
import Modal from 'react-modal';
import Profile from "../../../ImageForReddit/profile.png"
import Coverimage from "../../../ImageForReddit/home-banner.png"
import { useState } from "react";
export default function RightItempart2() {
  const [modelIsOpen, setmodelIsOpen] = useState(false);

  const handleCreate = ()=>{
    if(modelIsOpen == false){
      setmodelIsOpen(true);
    }else{
      setmodelIsOpen(false)
    }
  }
  return (
    <div className='RightbarItemPart2'>
      <Modal style={{ overlay: { backgroundColor: "rgb(12 12 12 / 49%)" } }}
        isOpen={modelIsOpen}
        className="modelclassNameForCommunity"
        onRequestClose={() => setmodelIsOpen(false)}>
        <div style={{marginLeft:20 , marginTop:10}}>
          <p style={{marginBottom:10}}>Create a community</p>
          <p style={{marginTop:30 }}>Name</p>
          <p style={{color:"#808080" , fontSize:13 , marginTop:5}}>Community names including capitalization cannot be changed.</p>
          <input className="CreateCommunityInput" placeholder="r/" />
          <p style={{marginTop:10 , fontSize:13 ,  color:"#808080"}}>21 Characters remaining</p>

          <p style={{marginTop:10}}>Community type</p>
          <div style={{ display: "block",marginLeft:-10 }}>
            <div style={{marginTop:10}}>
              <input style={{ margin: 10 }} type="radio" id="option1" name="options" value="Option 1" />
              <label for="option1">Public <span className="lighttext">Anyone can view, post, and comment to this community</span></label>
            </div>

            <div style={{marginTop:10}}>
              <input style={{ margin: 10 }} type="radio" id="option2" name="options" value="Option 2" />
              <label for="option1">Restricted <span className="lighttext">Anyone can view, post, and comment to this community</span></label>
            </div>

            <div style={{marginTop:10}}>
              <input style={{ margin: 10 }} type="radio" id="option3" name="options" value="Option 3" />
              <label for="option1">Private<span className="lighttext">Anyone can view, post, and comment to this community</span></label>
            </div>

          </div>
          <div style={{display:'flex' , alignItems:'center' ,marginTop:40 ,}}>
            <button style={{width:"30%" ,borderRadius:10, padding:5 , marginLeft:0 , backgroundColor:"black" , border:"1px solid white" , }}>Cancel</button>
            <button style={{width:"40%" , padding:5 , marginLeft:10 , borderRadius:10 , backgroundColor:"white" , color:"black" , border:"none"}}>Create Community</button>
          </div>

        </div>

      </Modal>
      <Image src={Coverimage} className='coverImage' alt='image' />
      <div style={{ display: 'flex', alignItems: "center" }}>
        <Image src={Profile} className='profileFOrRightitemPart2' alt='image' />
        <p className='Hometage'>Home</p>
      </div>
      <p className='communityTextContainer'>Your personal Reddit frontpage. Come here to check in with your favorite communities.</p>
      <button className='CreatePostBtn'>Create Post</button>
      <button className='CreateCommunityBtn' onClick={handleCreate}>Create Community</button>
    </div>
  )
}
