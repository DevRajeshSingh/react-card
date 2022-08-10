import React, { useState, useContext } from "react";
import { DataContext } from "../context/dataContext";

const AddCard = () => {
  const { categories, addItem } = useContext(DataContext);
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 10000 + 1),
    Title: "",
    category: "",
    Desc: "",
    Poster: "",
  });
 


  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { Title, category, Desc, Poster } = formData;

  return (
    <div className="add-container">
      <h1>Add Item</h1>
      <form className="add-form">
        <input
          value={Title}
          onChange={(e) => updateFormData(e)}
          placeholder="Title"
          type="text"
          name="Title"
          required
        />
        {/* <input
          value={category}
          onChange={(e) => updateFormData(e)}
          placeholder="Category"
          type="text"
          name="category"
          required
        /> */}
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

        <select
          value={category}
          onChange={(e) => updateFormData(e)}
          className="select-category"
          name="category"
        >
          {categories.map((categories) => {
            return (
              <option className="option" value={categories} key={categories}>
                {categories}
              </option>
            );
          })}
        </select>

        <button
          type="submit"
          disabled={!Title || !category || !Desc || !Poster}
          onClick={(e) => {
            e.preventDefault();
            addItem(formData.category, formData);
            setFormData({
              Title: "",
              category: "",
              Desc: "",
              Poster: "",
              id: Math.floor(Math.random() * 10000 + 1),
            });
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCard;
