import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Final.css'
export default function Final(props) {

    return props.finished === true ? 
    <div className='FinalContainer'>
        <div className='FinalMessage'>
            <p>Va multumim pentru comanda</p>
            <p>Veti primi un mail de confirmare in scurt timp</p>
        </div>
        <Link to='/'>
            <button className='OkButton' onClick={()=>{props.handleFinal(false); props.updateCart({}, 'delete')}}>Ok</button>
        </Link>
    </div>
    :
    null

}
