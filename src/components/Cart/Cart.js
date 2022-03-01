import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    product.quantity = !product.quantity ? 1 : product.quantity;
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }
  const Shipping = total > 0 ? 15 : 0;
  const tax = (total + Shipping) * 0.1;
  const grandTotal = total + Shipping + tax;

  return (
    <div>
      <h3>Order Summary</h3>
      <p>Items Ordered: {totalQuantity}</p>
      <p>Total:{total.toFixed(2)}</p>
      <p>Shipping: {Shipping.toFixed(2)}</p>
      <p>Tax:{tax.toFixed(2)}</p>
      <p>Grand Total: {grandTotal.toFixed(2)}</p>
      {props.children}
    </div>
  );
};

export default Cart;
