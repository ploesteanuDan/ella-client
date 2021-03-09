import React, {useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Cart from './components/Cart'
import Final from './components/Final'
import About from './components/About'

export default function App() {

  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)
  const [price, setPrice] = useState(0)
  const [finished, setFinished] = useState(false)

  function handlePrice(){
    let sum = 0
    for(let i = 0; i < cart.length; i++){
      sum = sum + parseInt(cart[i].itemPrice)
    }
    setPrice(sum)
  }

  function updateCart(item, type){
    let newCart = cart
    if(type === 'add'){
      newCart.push(item)
      setCart(newCart)
    }
    else if(type === 'remove'){
      const index = cart.indexOf(item)
      
      if(index > -1 ){
        cart.splice(index,1)
        setCart(cart)
      }
    }
    else if(type === 'delete'){
      setCart([])
    }
    setCount(cart.length)
    handlePrice()
  }


  function handleFinal(status){
    setFinished(status)
  }

  

  return (
    <div className="App">
      <Router>
      <Navbar count={count}/>
        <Switch>
          <Route path='/products'>
            <Products updateCart={updateCart.bind(this)}/>
          </Route>
          <Route path='/cart'>
            {
            finished === true ? 
            <Redirect to='/final'/>
            :
            <Cart cart={cart} price={price} handleFinal={handleFinal.bind(this)} updateCart={updateCart.bind(this)}/>
            }
          </Route>
          <Route path='/final'>
            <Final handleFinal={handleFinal.bind(this)} updateCart={updateCart.bind(this)} finished={finished}/>
          </Route>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/'>
            <Hero/>
          </Route> 
        </Switch>
      </Router>
     
    
     
    </div>
  );
}
