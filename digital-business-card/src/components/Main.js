import React from 'react'

import profile_pic from '../profile.png';


export default function Main(){
    return (
        <main>
            <div id='hero-img'>
                <img src={profile_pic} alt='Profile' className='profile-pic' />
            </div>
            <div className='card-content'>
                <h4>Hi, I'm Gowtham Hanumanthu</h4>
                <p>
               I'm a Software and Data Engineer pursuing a Master's in Computer Science. I love exploring awesome new tools and technologies that amaze me. I stay busy tinkering with tech to keep boredom at bay. Nothing excites me more than getting hands-on with new development and design projects.
                </p>

            </div>
        </main>     
    )
}