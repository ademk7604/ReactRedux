import React from "react";
import "./card.scss";
const ProductCard = (props) => {
  return (
    <div className="product-card">
      {props.name}
      {props.children}
    </div>
  );
};
export default ProductCard;

/*
2.yöntem

const ProductCard = (props) => {
  const {name, children}
  return (
    <div className="product-card">
      {name}
      {children}
    </div>
  );
};
export default ProductCard;

*/
