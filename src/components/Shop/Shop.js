import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  useEffect(() => {
    if (products.length) {
      const saveCart = getStoredCart();
      const storedCart = [];
      for (const key in saveCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = saveCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleCart = (product) => {
    const exist = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exist) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDb(product.key);
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchedProduct);
  };
  return (
    <div>
      <div className="search-container">
        <input
          onChange={handleSearch}
          placeholder="search product"
          type="text"
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {displayProducts.map((product) => (
            <Product
              product={product}
              key={product.key}
              handleCart={handleCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/review">
              <button className="reguler-btn">Review Your Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
