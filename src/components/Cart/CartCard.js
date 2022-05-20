import React, { useEffect, useRef, useContext, useState } from "react";
import ReactDom from "react-dom";

import CartList from "./CartList";
import CartForm from "./CartForm";

import Button from "../UI/Button";
import Card from "../UI/Card";
import PortalModal from "../UI/PortalModal";

import { CartContext } from "../../contexts/cart-items-context";

import classes from "./CartCard.module.css";

const CartCard = (props) => {
  const [isOrdered, setIsOrdered] = useState(false);
  const cartCtx = useContext(CartContext);
  const cartRef = useRef(null);
  // const { onClickOutside } = props;

  // handle closing of a cart
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (cartRef.current && !cartRef.current.contains(event.target)) {
  //       onClickOutside && onClickOutside();
  //     }
  //   };
  //   document.addEventListener("click", handleClickOutside, true);
  //   console.log("ADD EVENT LISTENER");

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside, true);
  //     console.log("REMOVE EVENT LISTENER");
  //   };
  // }, [onClickOutside]);

  // if (!props.isShown) {
  //   return null;
  // }

  const clickOrderHandler = () => {
    setIsOrdered(true);
  };

  const totalAmount = () => {
    const total = cartCtx.order.reduce(
      (prev, cur) => prev + cur.price * cur.count,
      0
    );
    console.log("CART CARD, total", total);
    return total.toFixed(2);
  };

  return (
    <PortalModal onBlur={props.onClickOutside}>
      <section ref={cartRef} className={classes.cartCard}>
        <Card className={classes.cartCard__card}>
          {cartCtx.order.length !== 0 && <CartList />}
          <div className={classes.cartCard__info}>
            <h1>Total Amount</h1>
            <h1>${totalAmount()}</h1>
          </div>
          <div className={classes.buttons}>
            {(!isOrdered || cartCtx.order.length === 0) && (
              <Button
                className={classes.buttons__close}
                onClick={props.onClickClose}
              >
                Close
              </Button>
            )}
            {cartCtx.order.length !== 0 && !isOrdered && (
              <Button
                className={classes.buttons__order}
                onClick={clickOrderHandler}
              >
                Order
              </Button>
            )}
          </div>
          {isOrdered && cartCtx.order.length > 0 && <CartForm onClick={props.onClickClose} />}
        </Card>
      </section>
    </PortalModal>
  );
};

export default CartCard;
