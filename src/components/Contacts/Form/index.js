import { hover } from "@testing-library/user-event/dist/hover";
import {useState, useEffect} from "react";

const initialFormValues = { fullName:"", phoneNumber:""}

function Form({addContact, contacts}){
    const [form, setForm] = useState(initialFormValues)

    useEffect(()=> {
        setForm(initialFormValues)
    },[contacts])

    const onChangeInput = (e) => {
        setForm({...form,[e.target.name]: e.target.value})
    }
    const onsubmit = (e) => {
        e.preventDefault()
        if(form.fullName === '' || form.phoneNumber === ''){
            return false
        }

        addContact([...contacts,form])

        
        
    }
    

    return(
        <form onSubmit={onsubmit}>
            <div>
                <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={onChangeInput }></input>
                </div>
            <div>
                <input name="phoneNumber" placeholder="Phone Number" value={form.phoneNumber} onChange={onChangeInput }></input>
                </div>
            <div className="btn">
                <button onClick={hover}>Add</button>
            </div>
        </form>
    )
}

export default Form