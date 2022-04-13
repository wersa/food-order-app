import React, { useContext } from "react";

import Button from "../UI/Button";
import classes from "./CartItem.module.css";
import { CartContext } from "../../contexts/cart-items-context";

const CartItem = (props) => {
  // const [mealCounter, setMealCounter] = useState();
  // const { id } = props;
  const cartCtx = useContext(CartContext);

  const increaseNumberOfMeals = () => {
    cartCtx.onIncrease(props.id);
  }

  const decreaseNumberOfMeals = () => {
    cartCtx.onDecrease(props.id);
  }
  

  return (
    <div className={classes.cartItem}>
      <div className={classes.info}>
        <h2>{props.name}</h2>
        <div className={classes.info__numbers}>
          <p>${props.price}</p>
          <h3>x {props.count}</h3>
        </div>
      </div>
      <div className={classes.buttons}>
        <Button onClick={decreaseNumberOfMeals}>–</Button>
        <Button onClick={increaseNumberOfMeals}>+</Button>
      </div>
    </div>
  );
};

export default CartItem;
