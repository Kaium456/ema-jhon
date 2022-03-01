import React from "react";
import { useHistory } from "react-router-dom";
import useCart from "../../hook/useCart";
import useProducts from "../../hook/useProducts";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderView = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useHistory();
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    deleteFromDb(key);
  };

  const handlePlaceOrder = () => {
    setCart([]);
    clearTheCart();
    history.push("/placeorder");
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReviewItem
            product={product}
            key={product.key}
            handleRemove={handleRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="reguler-btn">
            place order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderView;
