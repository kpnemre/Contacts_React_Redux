import React from "react";
import { AiOutlineUser, AiFillPhone, AiFillEdit,AiFillDelete} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { contactDelete } from "../../redux/contactSlice";

const ListItem = ({ item }) => {
  console.log(item);
const dispatch= useDispatch()

  const deleteItem=(id)=>{
      if(window.confirm("Are you sure?")){
          dispatch(contactDelete(id))
      }

  }

  return (
    <div className="listitem">
    
        <li className="item"><AiOutlineUser  />{item.text}</li>
        <li className="item"><AiFillPhone />{item.number}</li>
        <button className="btn btndelete" onClick={()=>deleteItem(item.id)}><AiFillDelete /> Delete</button>
        <Link to={`/edit/${item.id}`} className="item"><AiFillEdit />Edit</Link>
        
    </div>
  );
};

export default ListItem;
