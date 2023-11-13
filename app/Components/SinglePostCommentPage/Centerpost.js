
"use client"
import Image from 'next/image'
import showmore from "../../../ImageForReddit/icons8-dot-67.png"
import Profile from "../../../ImageForReddit/profile.png"
import upIcon from "../../../ImageForReddit/icons8-up-80.png"
import down from "../../../ImageForReddit/icons8-down-80.png"
import postImage from "../../../ImageForReddit/image.jpg"
import Upvote from "../../../ImageForReddit/Upvote.png"
import Downvote from "../../../ImageForReddit/downVote.png"
import Commenticons from "../../../ImageForReddit/icons8-comment-50.png"
import shareicon from "../../../ImageForReddit/icons8-share-50.png"
import saveicon from "../../../ImageForReddit/icons8-save-50.png"
import CommentIcon from "../../../ImageForReddit/icons8-comment-50.png"
import "../../Components/SubHome/post.css"
import { useState } from 'react'
import Comment from '../CommentDetails/Comment'
export default function Centerpost() {

    const [count , setCount] = useState(11)
    const [like , setlike] = useState(upIcon);
    const [Dislike , setDislike] = useState(down)
    const [Text , SetText] = useState('');
    const [Comments , setComments] = useState([]);
    console.log(Text , "Text")
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

    const addComment = async()=>{
        const comment={
            "postid":"318312",
            "username":"Suman",
            "comment":`${Text}`,
            "profile":`${Profile}`,
            "reply":[],
        }
        setComments(Comments.concat(comment));
    }

    console.log(Comments ,"FASKDFA")

    const handleComment=()=>{
        addComment();
    }

    return (
        <div>
            <div className='PostContainer'>
                <div className='postContainerLeftbar'>
                    <Image onClick={handleLike}
                        src={like}
                        className='profile'
                        alt="Picture of the author"
                    />
                    <p style={{marginLeft:4}}>{count}</p>
                    <Image onClick={handleDislike}
                        src={Dislike}
                        className='profile'
                        alt="Picture of the author"
                    />
                </div>

                <div className='postContainerRightbar'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Image
                            src={Profile}
                            className='profile'
                            alt="Picture of the author"
                        />
                        <p style={{ marginLeft: 0, fontSize: 12 }}>r/Suman</p>
                        <p style={{ marginLeft: 10, fontSize: 12, color: "#808080" }}>Posted by u/Z3oman</p>
                    </div>

                    <Image
                        src={postImage}
                        className='PostImage'
                        alt="Picture of the author"
                    />

                    <p style={{ padding: 10 }}>Idk how long it has been, 2/3 weeks? Whenever I think about Satoru Gojo not being with us anymore makes me feel numb.

                        I feel like I've lost someone dear to me and everytime I see his face in feed a sadness and glimpse of his memories run through my mind.

                        I know he's fucking imaginary and does not exist but damn, shit is worse than a breakup at this point.

                        (I'm delulu and he's still living in my head)

                        Wanted to get this off my chest since no one irl would understand what I feel so, yeah.</p>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginLeft: -10 }}>
                            <Image
                                src={Commenticons}
                                className='profile'
                                alt="Picture of the author"
                            />
                            <p style={{ paddingLeft: 6, paddingRight: 29, color: "#808080", fontSize: 14 }}>63 Comments</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Image
                                src={shareicon}
                                className='profile'
                                alt="Picture of the author"
                            />
                            <p style={{ paddingLeft: 3, paddingRight: 29, color: "#808080", fontSize: 14 }}>Share</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Image
                                src={saveicon}
                                className='profile'
                                alt="Picture of the author"
                            />
                            <p style={{ paddingLeft: 3, paddingRight: 29, color: "#808080", fontSize: 14 }}>Save</p>
                        </div>
                        <Image
                            src={showmore}
                            className='profile'
                            alt="Picture of the author"
                        />
                    </div>

                    
                </div>
                
            </div>
            <div>
                <p style={{marginTop:10 , color:"white"}}>Commnet as Gradword</p>
                <textarea placeholder='What are your thoughts?' onChange={(e)=>SetText(e.target.value)} style={{width:"90%" , height:"15vh" , fontSize:14 , fontFamily:"sans-serif" , padding:5 , marginTop:10 , borderRadius:10}}/>
                <button style={{paddingTop:4 , paddingBottom:4 , marginRight:30 , paddingRight:5 , paddingLeft:5 , cursor:'pointer'}} onClick={handleComment}>Comment</button>
            </div>
            {Comments.length !=0 ? 
            Comments.map((item)=>(
                <div>
                    <Comment item={item}/>
                    {item?.reply?.length != 0 ? 
                    <div style={{marginLeft:40}}>
                        {item?.reply?.map((item)=>(
                            <Comment item={item}/>
                        ))}
                    </div>
                    :""}
                </div>
                ))
            :""}



            <div>

            </div>
        </div>
    )
}
