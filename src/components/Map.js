import React, {useEffect, useState} from 'react'
import '../styles/Map.css'
import {Link} from 'react-router-dom'
export default function Map(props) {

    const [primColor, setPrimColor] = useState('')
    const [secColor, setSecColor] = useState('')
    const [action, setAction] = useState('')

    useEffect(() => {
       if(props.action === 'add'){
           setPrimColor('#04738c')
           setSecColor('#93bfbf')
           setAction('Adauga')
       } 
       else if(props.action === 'remove'){
            setPrimColor('#8c1d04')
            setSecColor('#bf9393')
            setAction('Sterge')
       }
    }, [])

    if (props.items){    
        return (
            <div className='CardListContainer'>
                {props.items.map(item=>(
                    <li key={item.itemCode} className='CardList'>
                        <div className='CardContainer'>
                            <div className='ShadowBox'>
                                <div className='PicContainer'>
                                    <Link to={'/products/item'}>
                                        <img onClick={()=>{props.setSelectedItem(item)}} className='CardPic' alt='CardPic' src={item.itemPic_1}/>
                                    </Link>
                                </div>
                            </div> 
                            <div className='CardInfoContainer' style={{backgroundColor: secColor}}>
                                <div className='Price'>{item.itemPrice} RON</div>
                                <button className='Button' style={{backgroundColor: primColor}} onClick={()=>{props.updateCart(item, props.action)}}>{action}</button>
                            </div>
                        
                        </div>
                    </li>
                ))}
            </div>
        )
    }

    else return (
        <div className='CardListContainer'>
            Nu exista produse in aceasta lista.
        </div>
    )
}
