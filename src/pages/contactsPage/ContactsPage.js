import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { useState } from "react";

function ContactsPage() {

    const dispatch = useDispatch()

    const title = useSelector(state => state.contactTitle)

    const [input, setInput] = useState("")

    const addInput = () => {
        dispatch({
            type: "FROM_INPUT",
            payload: input
        })
    }


    return (
        <div>
        
        <input type="text" onChange={(event) => setInput(event.target.value)  }/>
        <button onClick={addInput}>add</button>
        <p>{title}</p>
        <h1>--------------</h1>

        </div>
        
    )
}

export default ContactsPage

  
  
  
  
  

