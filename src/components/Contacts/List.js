import React from "react";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { contactDeleteAll, contactSelectors } from "../../redux/contactSlice";

const List = () => {
  const items = useSelector(contactSelectors.selectAll);
  console.log("object:", items);
  const dispatch = useDispatch();

  const DeleteAll = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(contactDeleteAll());
    }
  };

  return (
    <ul className="list">
      {/* <p>{JSON.stringify(items)}</p> */}
      {items?.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
      {!items[0] ? (
        <p style={{ padding: 15, fontSize: 25, textAlign: "center" }}>
          There is no person added
        </p>
      ) : (
        <button className="btn btnAll btndelete" onClick={() => DeleteAll()}>
          Delete All
        </button>
      )}
    </ul>
  );
};

export default List;
