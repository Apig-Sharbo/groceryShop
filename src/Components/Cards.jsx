import React from "react";
import MyCard from "./MyCard";

const Cards = ({ data, handleCart }) => {
  return (
    <>
      {data.length !== 0 ? (
        data.map((item, index) => {
          return <MyCard key={index} item={item} handleCart={handleCart} />;
        })
      ) : (
        <h4>No result found</h4>
      )}
    </>
  );
};

export default Cards;
