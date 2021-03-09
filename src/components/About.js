import React from 'react'
import '../styles/About.css'
import aboutInfo from '../assets/about.json'
export default function About() {

    function getInfo(name){

    }

    return (
        <div className='AboutContainer'>
            <div className='AboutFragment'>
                <p className='AboutTitle'>Despre noi</p>
                <p>{aboutInfo.about[0].text}</p>
                <p>{aboutInfo.about[1].text}</p>
            </div>
            <div className='AboutFragment'>
                <p className='AboutTitle'>Social Media</p>
                <p>{aboutInfo.about[2].text}</p>
                <p>{aboutInfo.about[3].text}</p>    
            </div>
            <div className='AboutFragment'>
                <p className='AboutTitle'>Contact</p>
                <p>{aboutInfo.about[4].text}</p>
                <p>{aboutInfo.about[5].text}</p>
            </div>
        </div>
    )
}
