// Packs
import React, {useState} from 'react'
import { Link } from "react-router-dom";

// Style
import '../styles/Navbar.css'

// Assets
import cartImg from '../assets/shoppingCart.svg'
import sidebarImg from '../assets/navToggle.svg'
import logo_simp from '../assets/logo_simp.svg'

// Components
import Sidebar from './Sidebar'

export default function Navbar({count}) {

    const [toggle, setToggle] = useState(false)

    function displaySidebar(){
        return toggle ? <Sidebar handleSidebar={handleSidebar.bind(this)}/> : null
    }

    function handleSidebar(){
        setToggle(!toggle)
    }

    return (
        <div className='NavbarContainer'>
            <img src={sidebarImg} alt='SidebarIcon' onClick={()=>{setToggle(!toggle)}} className='SidebarButton'/>
            {displaySidebar()}
            <div className='LogoContainer'>
                <Link to="/products">
                    <img src={logo_simp} alt='LogoSimp' className='Logo'/>
                </Link>
            </div>
            <Link className='CartLink' to="/cart">
                <img className='CartImg' alt='CartImg' src={cartImg}/>
                <div className='CartNumber'>{count}</div>
            </Link>
        </div>
    )
}
