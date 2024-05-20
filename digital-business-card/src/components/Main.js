import React from 'react'

import profile_pic from '../profile.png';


export default function Main() {
    return (
        <main>
            <div id='hero-img'>
                <img src={profile_pic} alt='Profile' className='profile-pic' />
            </div>
            <div className='card-content'>
                <h1>Gowtham Hanumanthu</h1>
                <h3>Software and Data Engineer</h3>

                <div className='contact'>

                    <div className='contact-buttons'>

                        <a href='mailto:gowthamhsm@gmail.com' className='metallic-button'><i class="fa-regular fa-envelope"></i>Email</a>


                        <a href='https://www.linkedin.com/in/hsmgowtham' className='metallic-button'><i class="fa-brands fa-linkedin-in"></i>LinkedIn</a>

                    </div>
                    <h3>About</h3>
                    <p>
                        Experienced Software Engineer currently pursuing a Master's in Computer Science at the University of Cincinnati. I love exploring awesome new tools and technologies that amaze me. I stay busy tinkering with tech to keep boredom at bay. Nothing excites me more than getting hands-on with new development and design projects.
                    </p>
                    <br />
                    <i class="fa-solid fa-phone"></i>
                    <a href='tel:+15134305254'>513-430-5254</a><br /><br />



                    <i class="fa-brands fa-github"></i>
                    <a href='https://www.github.com/hsmgowtham'>github.com/hsmgowtham</a><br /><br />

                    <i class="fa-solid fa-location-dot"></i>
                    <a href='https://maps.app.goo.gl/o7pVTZndpMLb12P69'>Cincinnati, Ohio, USA</a><br /><br />


                </div>


            </div>
        </main>
    )
}