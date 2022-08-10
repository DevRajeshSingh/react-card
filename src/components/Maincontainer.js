import React, { useContext } from "react";
import Bucket from "./Bucket";
import { DataContext } from "../context/dataContext";
import DeleteButton from "./DeleteButton";

const Maincontainer = () => {
  const {educationState , productState ,entertainmentState , selectedItem } = useContext(DataContext);

  return (
    <div className="container">
      
      <h1>Education</h1>
      <div className="card-container">
        <Bucket
          key={"education"}
          cat={"Education"}
          data={educationState}
        />
      </div>
      <h1>Product</h1>
      <div className="card-container">
        <Bucket key={"product"} cat={"Product"} data={productState} />
      </div>
      <h1>Entertainment</h1>
      <div className="card-container">
        <Bucket
          key={"entertainment"}
          cat={"Entertainment"}
          data={entertainmentState}
        />
      </div>
      {selectedItem.length && <DeleteButton/>}
    </div>
  );
};

export default Maincontainer;
