import React from 'react'
import "./leftside.css"
import Profile from "../../../ImageForReddit/profile.png"
import Coverimage from "../../../ImageForReddit/home-banner.png"
import Image from 'next/image'
export default function leftside() {
  return (
    <div>
    <div className='RightbarItemForCommentPage'>
        <Image src={Coverimage} className='RightCommentcoverImage' alt='image' />
        <div style={{display:'flex' , alignItems:"center"}}>
            <Image src={Profile} className='profileFOrRightitemPart2' alt='image' />
            <p className='Profilename'>r/Suman</p>
        </div>
        <p className='communityTextContainerComment'>Manga Spoilers Subreddit! Dedicated to Jujutsu Kaisen memes, shitposts, fanarts, and discussions. Make sure to read the rules before you post!.</p>
        <div style={{display:'flex' , alignItems:'center' , marginTop:39 , justifyContent:"space-around"}}>
            <div>
                <p>61.5K</p>
                <p style={{fontSize:11 , color:"#808080"}}>Curses</p>
            </div>
            <div>
                <p>3.6k</p>
                <p style={{fontSize:11 , color:"#808080"}}>Causing Troble</p>
            </div>
            <div>
                <p>Top 5%</p>
                <p style={{fontSize:11 , color:"#808080"}}>Ranked by Size</p>
            </div>
        </div>
        <button className='CreatePostBtn'>Join</button>
        <div>
            <p style={{fontSize:"13px" , marginLeft:20 , marginTop:35 , paddingBottom:20 , cursor:'pointer'}}>COMMUNITY OPTIONS</p>
        </div>
    </div>


    <div className='RightbarItemForCommentPage' style={{marginTop:20}}>
        <p style={{color:"#808080"}}>r/Jujutsufolk Rules</p>
        <div>
            <p className='textPoints'>1. Be nice</p>
            <p className='textPoints'>2. JJK related content only</p>
            <p className='textPoints'>3. Regrading leaks</p>
            <p className='textPoints'>4. Source your ars unless it's OC</p>
            <p className='textPoints'>5. No reposts</p>
        </div>
        
    </div>
    </div>
  )
}
