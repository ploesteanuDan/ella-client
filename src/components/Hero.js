// Packs
import React from 'react'
import {
    Link
  } from "react-router-dom";

// Style
import '../styles/Hero.css'

// Assets
import logo from '../assets/logo.svg'

export default function Hero() {
    return (
        <div className='HeroContainer'>
        <div className='Gradient'>
            <Link to='/products'>
                <img src={logo} alt='logo' className='HeroLogo'/>
            </Link>
            
        </div>
        </div>
    )
}
