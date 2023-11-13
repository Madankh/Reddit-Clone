'use client'
import React, { useState } from 'react'
import "./post.css"
import Image from 'next/image'
import showmore from "../../../ImageForReddit/icons8-dot-67.png"
import Profile from "../../../ImageForReddit/profile.png"
import upIcon from "../../../ImageForReddit/icons8-up-80.png"
import down from "../../../ImageForReddit/icons8-down-80.png"
import postImage from "../../../ImageForReddit/image.jpg"
import Commenticons from "../../../ImageForReddit/icons8-comment-50.png"
import shareicon from "../../../ImageForReddit/icons8-share-50.png"
import saveicon from "../../../ImageForReddit/icons8-save-50.png"
import Upvote from "../../../ImageForReddit/Upvote.png"
import Downvote from "../../../ImageForReddit/downVote.png"
import Link from 'next/link'
import { Tweet } from 'react-tweet'
export default function Post({item}) {
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

    function extractDomainNameFromURL(url){
        console.log(url)
        const withoutProtocol = url.replace(/https:\/\//, '');
        const parts = withoutProtocol.split('/');
        console.log(parts[0] , "dfja")
        return parts[0];
    }

    function extractTwitterIDFromURL(url){
        const match = url.match(/\/status\/(\d+)/);
        if (match) {
          return match[1];
        }
        // If no match is found, return null or handle the case as needed.
        return null;
    }

    const DomainName = extractDomainNameFromURL(item?.URL);

    function extractYouTubeVideoId(url) {
        const match = url.match(/(?:\?|&)v=([^&]+)/);
        if (match) {
          return match[1];
        }
        // If no match is found, return null or handle the case as needed.
        return null;
      }
       
    const Ids = extractTwitterIDFromURL(item?.URL);
    console.log(Ids , )
    const YoutubeVideoId = extractYouTubeVideoId(item?.URL);
    const YoutubeURL = `https://www.youtube.com/embed/${YoutubeVideoId}`

    return (
        <div>
           
            <div className='PostContainer'>
                <div className='postContainerLeftbar'>
                    <Image onClick={handleLike}
                        src={like}
                        className='profile'
                        alt="Picture of the author"
                    />
                    <p style={{marginLeft:3}}>{count}</p>
                    <Image onClick={handleDislike}
                        src={Dislike}
                        className='profile'
                        alt="Picture of the author"
                    />
                </div>
                <Link href={`/CommentPage/${item.id}`}>
                <div className='postContainerRightbar'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Image
                            src={Profile}
                            className='profile'
                            alt="Picture of the author"
                            />
                        <p style={{ marginLeft: 0, fontSize: 12 }}>r/{item.username}</p>
                        <p style={{ marginLeft: 10, fontSize: 12, color: "#808080" }}>Posted by u/Z3oman</p>
                    </div>
                    <p style={{padding:10}}>{item.title}</p>
                    {item?.image_url !== "" ?
                    <img
                        src={item?.image_url}
                        className='PostImage'
                        alt="Picture of the author"
                    />:""
                    }

                    {item.URL !== "" ? 
                    <div>
                        {DomainName == "www.youtube.com" ?
                        <iframe width="560" height="315" src={YoutubeURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        : DomainName == "twitter.com" ? 
                        <div>
                            <Tweet id={Ids} />
                        
                        </div> :""}
                    </div>:""}


                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center' , marginLeft:-10}}>
                            <Image
                                src={Commenticons}
                                className='profile'
                                alt="Picture of the author"
                            />
                            <p style={{paddingLeft:6 , paddingRight:29 , color:"#808080" , fontSize:14}}>63 Comments</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Image
                                src={shareicon}
                                className='profile'
                                alt="Picture of the author"
                            />
                            <p style={{paddingLeft:3 , paddingRight:29, color:"#808080" , fontSize:14}}>Share</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Image
                                src={saveicon}
                                className='profile'
                                alt="Picture of the author"
                            />
                            <p style={{paddingLeft:3 , paddingRight:29, color:"#808080" , fontSize:14}}>Save</p>
                        </div>
                        <Image
                            src={showmore}
                            className='profile'
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                </Link>
            </div>

        </div>
    )
}
