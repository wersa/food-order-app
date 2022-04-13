import React, { useContext, useMemo } from "react";

import Button from "./UI/Button";
import classes from "./CartButton.module.css";
import img from "../images/cart.png";
import { CartContext } from "../contexts/cart-items-context";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { order } = cartCtx;

  const count = useMemo(() => {
    console.log("CART BUTTON, count");
    return order.reduce((prev, cur) => prev + cur.count, 0);
  }, [order]);
  

  return (
    <Button
      className={classes.cartButton}
      onClick={props.onClick}
      onBlur={props.onBlur}
    >
      <img src={img} alt="cart-img" className={classes.cartButton_img} />
      <h3>Your cart</h3>
      <h3 className={classes.cartButton_counter}>{count}</h3>
    </Button>
  );
};

export default CartButton;
