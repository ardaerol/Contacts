import {useState} from "react";

function List({contacts}){
    const [filterText, setFilterText] = useState('')

    const filtered = contacts.filter((item)=>{
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(filterText.toLowerCase())
        )
    })

    console.log('filtered',filtered)
    return(
        <div>
            <input placeholder="Filter" value={filterText} onChange={(e)=> setFilterText(e.target.value)}></input>

            <ul className="list">
            {
                filtered.map((contact, i) => <li key={i}>
                    <span>{contact.fullName}</span> 
                    <span>{contact.phoneNumber}</span> 
                    </li>)
            }
            </ul>

            <p>
              Kayıtlı kişiler ({filtered.length})
            </p>
        </div>
    )
}

export default List