import React, {useEffect, useState} from 'react'
import firebase from '../config/firebase'
import Map from './Map'
import Item from './Item'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
export default function Products(props) {

    const [cards, setCards] = useState([])
    const [selectedItem, setSelectedItem] = useState('')

    useEffect(() => {
        getCards()
    }, [])

    function getCards() {
        let items = []
        firebase.firestore()
        .collection('items')
        .onSnapshot(querySnapshot => {
            let changes = querySnapshot.docChanges()
            for(let change of changes) {
                if (change.type === 'added'){
                    items.push(change.doc.data())
                }
                if (change.type === 'removed'){
                    items.prop(change.doc.data())
                }
            }
            setCards(items)
        })
    }

    return (
       <div>
           <Router>
               <Switch>
                    <Route path={'/products/item'}>
                        <div className='CardsContainer'>
                            <Item selectedItem={selectedItem} action='add' updateCart={props.updateCart.bind(this)} setSelectedItem={setSelectedItem.bind(this)}/>
                        </div>
                    </Route>
                    <Route path='/products'>
                        <div className='CardsContainer'>
                            <Map items={cards} action='add' updateCart={props.updateCart.bind(this)} setSelectedItem={setSelectedItem.bind(this)}/>
                        </div>
                   </Route>
               </Switch>
           </Router>
          
       </div>
    )
}
