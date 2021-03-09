import React from 'react'
import '../styles/Sidebar.css'
import { Link } from "react-router-dom";
export default function Sidebar(props) {

    function handleSidebar(){
        console.log('bg')
    }

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
