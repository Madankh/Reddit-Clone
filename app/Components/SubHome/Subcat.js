import React from 'react'
import "./post.css"
import Image from 'next/image'
import BestIcon from "../../../ImageForReddit/icons8-rocket-64.png"
import HotIcon from "../../../ImageForReddit/icons8-hot-30.png"
import Newicon from "../../../ImageForReddit/icons8-new-50.png"
import Topicon from "../../../ImageForReddit/icons8-up-80.png"
import showmore from "../../../ImageForReddit/icons8-dot-67.png"
import Card from "../../../ImageForReddit/card.png"
export default function Subcat() {
  return (
    <div style={{ display: 'flex', justifyContent: "space-between", marginTop: 20, marginLeft: -29 }}>
                <div style={{ display: 'flex' }}>
                    <div className='PostTopItemsContainer'>
                        <Image
                            src={BestIcon}
                            className='linkIcons'
                            alt="Picture of the author"
                        />
                        <p style={{ marginTop: 10, fontSize: 13 }}>Best</p>
                    </div>
                    <div className='PostTopItemsContainer'>
                        <Image
                            src={HotIcon}
                            className='linkIcons'
                            alt="Picture of the author"
                        />
                        <p style={{ marginTop: 7, fontSize: 13 }}>Hot</p>
                    </div>
                    <div className='PostTopItemsContainer'>
                        <Image
                            src={Newicon}
                            className='linkIcons'
                            alt="Picture of the author"
                        />
                        <p style={{ marginTop: 7, marginLeft: 4, fontSize: 13 }}>New</p>
                    </div>
                    <div className='PostTopItemsContainer'>
                        <Image
                            src={Topicon}
                            className='linkIcons'
                            alt="Picture of the author"
                        />
                        <p style={{ marginTop: 12, marginLeft: 4, fontSize: 13 }}>Top</p>
                    </div>
                    <Image
                        src={showmore}
                        className='moreIcons'
                        alt="Picture of the author"
                    />
                </div>
                <div>
                    <Image
                        src={Card}
                        className='Cardicons'
                        alt="Picture of the author"
                    />
                </div>
            </div>
  )
}
