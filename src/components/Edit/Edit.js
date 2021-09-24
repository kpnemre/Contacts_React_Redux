import React from 'react'
import { Redirect, useParams } from 'react-router'
import EditForm from "./EditForm"
import { contactEdit, contactSelectors } from "../../redux/contactSlice";
import { useSelector } from 'react-redux';



const Edit = () => {

    const {id}= useParams();
    const item= useSelector(state=>contactSelectors.selectById(state,id))
    // console.log("object", id,item);
if(!item){
<Redirect to="/"/>
}
    return (
        <div>
            <h1>emre</h1>
            <EditForm editItem={item} />
        </div>
    )
}

export default Edit
