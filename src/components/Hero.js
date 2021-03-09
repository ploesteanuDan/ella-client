import React from 'react'
import '../styles/Hero.css'
import logo from '../assets/logo.svg'
import {
    Link
  } from "react-router-dom";

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
