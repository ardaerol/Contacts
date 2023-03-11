import {useState, useEffect} from "react";

import List from "./List";

import Form from "./Form";

import  "./styles.css"

function Contacts(){
    const [contacts, setContacts] = useState([
        {
            fullName:'Mehmet',
            phoneNumber: '123123'
        },
        {
            fullName:'Arda',
            phoneNumber:'5061542230'
        },
        {
            fullName:'Derya',
            phoneNumber:'5057584435'
        }
    ])

    useEffect(()=>{
        console.log(contacts)
    },[contacts])


    return(
        <div id="cotainer">
            <h1>Kişiler</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts