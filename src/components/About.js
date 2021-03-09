// Packs
import React from 'react'

// Style
import '../styles/About.css'

// Assets
import aboutInfo from '../assets/about.json'

export default function About() {
    return (
        <div className='AboutContainer'>
            <div className='AboutFragment'>
                <p className='AboutTitle'>Despre noi</p>
                <p>{aboutInfo.about[0].text}</p>
                <p>{aboutInfo.about[1].text}</p>
            </div>
            <div className='AboutFragment'>
                <p className='AboutTitle'>Social Media</p>
                <a
                    href='https://www.facebook.com/Ella-122492955819810'
                    target='_blank'
                >
                      <p>{aboutInfo.about[2].text}</p>
                </a>
                <a
                     href='https://www.instagram.com/ella.flori.decorative/'
                     target='_blank'
                >
                    <p>{aboutInfo.about[3].text}</p>   
                </a>  
            </div>
            <div className='AboutFragment'>
                <p className='AboutTitle'>Contact</p>
                <p>{aboutInfo.about[4].text}</p>
                <p>{aboutInfo.about[5].text}</p>
            </div>
        </div>
    )
}
