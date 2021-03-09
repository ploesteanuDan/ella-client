// Packs
import React from 'react'
import {
    Link,
    useRouteMatch
  } from "react-router-dom";
  
// Style
import '../styles/DetailBar.css'

export default function DetailBar(props) {

    let {url} = useRouteMatch()

    function getDetails(){
        if(url === '/cart'){
            return(
                <div className='DetailsContainer'>
                    <text>Total produse: {props.price} RON</text>
                    <button className='DetailsButton'>Continua</button>
                </div>
            )
        }
        else if(url ==='/cart/checkout'){
            return(
                <div className='DetailsContainer'>
                    <div>Total produse: {props.price} RON</div>
                    <div>Total cu transport: {props.price + 25} RON</div>
                    <Link to='/cart'>
                        <button className='DetailsButton'>Inapoi</button>
                    </Link>
                    
                </div>
            )
        }
    }

 

    return (
        <div className='DetailBarContainer'>
           {getDetails()}
        </div>
    )
}
