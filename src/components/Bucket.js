import React from "react";
import Card from "./Card";
const Bucket = ({  data }) => {
  return data.map((item) => {
    return (
        <Card key={item.Poster} item={item} />
    )
  });
}; 

export default Bucket;
