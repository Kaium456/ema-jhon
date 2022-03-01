import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import "./Product.css";

const Product = (props) => {
  const { name, img, price, stock, star } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name">{name}</h3>
        <p>${price}</p>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        <Rating
          initialRating={star}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star  icon-color"
          readonly
        ></Rating>
        <br />
        <button
          onClick={() => props.handleCart(props.product)}
          className="reguler-btn"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
