// Packs
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {useTransition, animated, config} from 'react-spring'

// Style
import '../styles/Item.css'

export default function Item(props) {

    let item = props.selectedItem
    const slides = [
        {id: 0, url: item.itemPic_1},
        {id: 1, url: item.itemPic_2},
        {id: 2, url: item.itemPic_3},
       ]

    const [index, set] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(()=>{
            set(state => (state + 1) % 3)
        }, 2500)
        return () => {
            clearInterval(interval)
        }
    }, [])

    const transitions = useTransition(
        slides[index],
        item => item.id,
        {
            from: { opacity: 0, position: 'absolute' },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: config.molasses, 
        }
    )

    function mapMaterials(){
        if(props.selectedItem.materials){
            return (
                <div className='MaterialsContainer'>
                    Materiale:
                    {
                    props.selectedItem.materials.map(item=>(
                        <li key={item} className='MaterialsList'>
                            {item}
                        </li>
                    ))
                    }
                </div>
            )
        }
    }

    return (
        <div className='ItemContainer'>
            <Link to='/products'>
                <button className='BackButton'>Inapoi la produse</button>
            </Link>
            <button className='AddButton' onClick={()=>{props.updateCart(item, props.action)}}>Adauga</button>
            {
                transitions.map(({ item, props, key }) => (
                    <animated.div
                      key={key}
                        className='CarouselContainer'
                      style={{ ...props }}
                    >
                        <img className='CarouselImg' alt='CarouselImg' src={item.url}/>
                    </animated.div>
                  ))
            }
            <div className='ProductInfo'>
                <div className='PriceContainer'>
                    Pret: {props.selectedItem.itemPrice} RON
                </div>
                {mapMaterials()}
            </div>
        </div>
    )
}
