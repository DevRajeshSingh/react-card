import React, { useState, useContext } from "react";
import { DataContext } from "../context/dataContext";

const EditCard = () => {
  const { editItem, editItemInfo } = useContext(DataContext);
  const [formData, setFormData] = useState({
    id: editItemInfo.id || "",
    Title: editItemInfo.Title || "",
    category: editItemInfo.category || "",
    Desc: editItemInfo.Desc || "",
    Poster: editItemInfo.Poster || "",
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { Title, Desc, Poster } = formData;

  return (
    <div className="add-container">
      <h1>Edit Item</h1>
      <form className="add-form">
        <input
          value={Title}
          onChange={(e) => updateFormData(e)}
          placeholder="Title"
          type="text"
          name="Title"
          required
        />
        <input
          value={Desc}
          onChange={(e) => updateFormData(e)}
          placeholder="Description"
          type="text"
          name="Desc"
          required
        />
        <input
          value={Poster}
          onChange={(e) => updateFormData(e)}
          placeholder="Poster"
          type="text"
          name="Poster"
          required
        />

        <button
          type="submit"
          disabled={!Title || !Desc || !Poster}
          onClick={(e) => {
            e.preventDefault();
            editItem(formData);
            
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditCard;
