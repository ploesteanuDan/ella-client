// Packs
import React from 'react'
import { Link } from "react-router-dom";

// Style
import '../styles/Sidebar.css'

export default function Sidebar(props) {

    return (
        <div className='SidebarContainer'>
            <div className='SidebarBg' onClick={()=>{props.handleSidebar()}}/>
            <div className='Sidebar'>  
                <Link onClick={()=>{props.handleSidebar()}} className='SidebarLink' to='/'>Acasa</Link>
                <Link onClick={()=>{props.handleSidebar()}} className='SidebarLink' to='/products'>Produse</Link>
                <Link onClick={()=>{props.handleSidebar()}} className='SidebarLink' to='/about'>Despre noi</Link>
            </div>
        </div>
        
    )
}
