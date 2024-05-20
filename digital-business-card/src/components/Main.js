import React from 'react'

import profile_pic from '../profile.png';


export default function Main() {
    return (
        <main>
            <div id='hero-img'>
                <img src={profile_pic} alt='Profile' className='profile-pic' />
            </div>
            <div className='card-content'>
                <h1>Hi, I'm Gowtham Hanumanthu</h1>
                <p>
                    I'm a Software and Data Engineer pursuing a Master's in Computer Science at the University of Cincinnati. I love exploring awesome new tools and technologies that amaze me. I stay busy tinkering with tech to keep boredom at bay. Nothing excites me more than getting hands-on with new development and design projects.
                </p>
                <br />
                <br />
                <div className='contact'>
                    <i class="fa-regular fa-envelope"></i>
                    <a href='mailto:gowthamhsm@gmail.com'>gowthamhsm@gmail.com</a><br /><br />

                    <i class="fa-solid fa-phone"></i>
                    <a href='tel:+15134305254'>513-430-5254</a><br /><br />

                    <i class="fa-brands fa-linkedin-in"></i>
                    <a href='https://www.linkedin.com/in/hsmgowtham'>linkedin.com/hsmgowtham</a><br /><br />

                    <i class="fa-brands fa-github"></i>
                    <a href='https://www.github.com/hsmgowtham'>github.com/hsmgowtham</a><br /><br />

                    <i class="fa-solid fa-location-dot"></i>
                    <a href='https://maps.app.goo.gl/o7pVTZndpMLb12P69'>Cincinnati, Ohio, The USA</a><br /><br />


                </div>


            </div>
        </main>
    )
}