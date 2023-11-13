import React from 'react'
import "./subhome.css"
import Contentpost  from './contentpost'
import Post from './Post'
import Subcat from './Subcat'
import RightItempart1 from '../RightItems/RightItempart1'
import RightItempart2 from '../RightItems/RightItempart2'
import { FakePost } from '@/app/fake'
export default function SubHome() {
  return (
    <div className='MainSubhome'>
        <div className='subhomeLeft'>
        </div>
        <div className='MainSubhomeCenter'>
            <Contentpost/>
            <Subcat/>
            {FakePost.map((item)=>(
              <Post item={item}/>

            ))}
           
        </div>
        <div className='subhomeright'>
            <RightItempart1/>
            <RightItempart2/>
        </div>
    </div>
  )
}
