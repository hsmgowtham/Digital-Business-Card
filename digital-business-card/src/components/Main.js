import React from 'react'

import profile_pic from '../profile.png';


export default function Main(){
    return (
        <main>
            <div id='hero-img'>
                <img src={profile_pic} alt='Profile' className='profile-pic' />
            </div>
        </main>     
    )
}