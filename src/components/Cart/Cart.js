import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Shushi", amount: 2, price: 12.99 }].map(
        (item, index) => (
          <li key={index}>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Modal onClose={props.hideCartHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.21$</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.hideCartHandler}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
