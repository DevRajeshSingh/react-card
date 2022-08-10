import React , { useContext}from "react";
import { DataContext } from "../context/dataContext";

const DeleteButton = (props) => {
  const { selectedItem ,setselectedItem,deleteItem} = useContext(DataContext);
  return (
    <div className="btn-coloured delete-multiple-button"
    onClick={() => {
        selectedItem.forEach((item) => {
            deleteItem(item.category, item.id);
        });
        setselectedItem([]);
        document.querySelectorAll(".chb-1").forEach((item) => {
            item.checked = false;
        });
    }}
    >
      Delete {selectedItem.length} items
    </div>
  );
};

export default DeleteButton;
