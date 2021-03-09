import React, {useState, useEffect} from 'react'
import '../styles/Form.css'
import location from '../assets/judete.json'
import firebase from '../config/firebase'
import emailjs from 'emailjs-com'

export default function Form(props) {

    let initForm = {}
    const [form, setform] = useState(initForm)

    useEffect(() => {
        let list = []
        for(let i = 0; i < props.cart.length; i++){
         list.push(props.cart[i]['itemCode'])
        }
        setform({...form, productList: list, price: props.price})
    }, [])

    function handleSubmit(){
        if(
            form.email!=='' &&
            form.email!==undefined &&
            form.name!=='' &&
            form.name!==undefined &&
            form.phone!=='' &&
            form.phone!==undefined &&
            form.productList.length !== 0 &&
            form.county!=='' &&
            form.county!==undefined &&
            form.city!=='' &&
            form.city!==undefined &&
            form.adress!=='' && 
            form.adress!==undefined 
        ){
            emailjs.send(
                'gmail',
                'template_szcp0cp',
                form,
                'user_wKwa14GrnQmeCy8vRhuP9'
            )
            .then(
                res => {
                    console.log(res.text)
                    if(res.text==='OK'){
                        firebase.firestore().collection('comenzi').add({form})
                        props.handleFinal(true)
                    }
                }
            )
            .catch(
                err => {
                    console.log(err)
                    alert('Ceva nu a mers. Va rugam reincercati.')
                }
              
            )
        }
        else{
            alert('Ceva nu a mers. Va rugam reincercati.')
        }
        
    }


    function handleChange(event){
        let name = event.target.name
        let value = event.target.value
        setform({...form, [name] : value })
    }

    function getDropdown(arg){
        if(arg==='county'){
            return (
                location.judete.map(item=>(
                    <option name={item.nume}>{item.nume}</option>
                ))
            )
        }
        else if(arg===undefined){
            return null
        }
        else{
            let cities
            for(let i = 0; i < location.judete.length; i++){
                if(location.judete[i].nume===arg){
                    cities = location.judete[i].localitati
                }      
            }

            return (
                cities.map(item=>(
                    <option name={item.nume}>{item.nume}</option>
                ))
            )
        }
    }

    return (
        <div className='FormContainer'>
            <form>
                <label>
                    Nume
                    <input type="text" name="name" onChange={(event)=>{handleChange(event)}}/>
                </label>
                <label>
                    Email
                    <input type="text" name="email" onChange={(event)=>{handleChange(event)}} />
                </label>
                <label>
                    Telefon
                    <input type="number" name="phone" onChange={(event)=>{handleChange(event)}} />
                </label>
                <label>
                    Judet
                    <select name='county' onChange={(event)=>{handleChange(event)}}>
                    <option>Selectati judetul</option>
                        {getDropdown('county')}
                    </select>
                </label>
                <label>
                    Oras
                    <select name='city' onChange={(event)=>{handleChange(event)}}>
                        <option>Selectati orasul</option>
                        {getDropdown(form.county)}
                    </select>
                        
                </label>
                <label>
                    Adresa
                    <input type="text" name="adress" onChange={(event)=>{handleChange(event)}}/>
                </label>
            </form>
            <button className='FormButton' onClick={()=>{handleSubmit()}}>Trimite comanda</button>
        </div>
    )
}
