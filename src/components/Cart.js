import React, { useState, useEffect } from 'react'
import Map from "../components/Map";
import DetailBar from './DetailBar'
import '../styles/Cart.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  import Form from './Form'
export default function Cart(props) {

    const {cart, ...rest} = props
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(cart)
    }, [cart])

    return (
        <div className='CardsContainer'>
            <Router>
                <Switch>
                    <Route path='/cart/checkout'>
                        <Form cart={cart} price={rest.price} handleFinal={rest.handleFinal.bind(this)}/>
                        <Link to='/cart'>
                        </Link>
                        <DetailBar price={rest.price} type='checkout'/>
                    </Route>
                    <Route path='/cart'>
                        <Map items={items} price={rest.price} action='remove' updateCart={rest.updateCart.bind(this)} />
                        <Link to='/cart/checkout'>
                        <DetailBar price={rest.price} type='cart'/>
                        </Link>
                    </Route>
                </Switch>
            </Router>    
        </div>
    )
}

