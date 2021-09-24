import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { contactEdit } from '../../redux/contactSlice';

const EditForm = ({editItem}) => {
    const [text, setText] = useState(editItem.text);
    const [number, setNumber] = useState(Number(editItem.number));
    const dispatch = useDispatch(contactEdit);
    const history= useHistory();
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(!text || !number){
            alert("there is an error")
        }
dispatch(contactEdit({
    id:editItem.id,
    changes:{
        text,
        number
    }


}))
history.goBack()
    }
    return (
        <div>
             <form onSubmit={handleSubmit} className="form">
        <input className="input" placeholder="name" type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <input className="input" placeholder="phone number" type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <button type="submit" className="btn btnadd">Update</button>
      </form>
        </div>
    )
}

export default EditForm
