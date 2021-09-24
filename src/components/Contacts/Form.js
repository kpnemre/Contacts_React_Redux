import { useState } from "react";
import { useDispatch } from "react-redux";
import {contactAdded, contactEdit} from "../../redux/contactSlice"
import { nanoid } from "@reduxjs/toolkit";


const Form = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch(contactAdded);




  const handleSubmit = (e) => {
    e.preventDefault();
if(!text || !number){
    alert("there is an error")
}
// const texts= text.split(',');

//     dispatch(contactAdded(texts.map((text)=>({id:nanoid(),text }))))
    dispatch(contactAdded({id:nanoid(),text,number}))
    setNumber("")
    setText("")
  };
  console.log(text, number);
  return (
    
      <form onSubmit={handleSubmit} className="form">
        <input className="input" placeholder="name" type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <input className="input" placeholder="phone number" type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <button type="submit" className="btn btnadd">Add</button>
      </form>
   
  );
};

export default Form;
