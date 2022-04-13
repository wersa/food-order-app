import React, { useContext } from "react";

import { CartContext } from '../../contexts/cart-items-context'

import ItemForm from "./ItemForm";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  const cartCtx = useContext(CartContext);

  const handleSubmit = (mealCount) => {
    const mealInfo = {
      id: props.id,
      name: props.name,
      price: Number(props.price),
      count: mealCount
    };
    // console.log('BEFORE ORDER', cartCtx.order);
    cartCtx.onAdd(mealInfo);
    // console.log('CURRENT ORDER', cartCtx.order);
  }

  return (
    <li className={classes.listItem}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.listItem_description}>{props.description}</p>
        <h1 className={classes.listItem_price}>${props.price}</h1>
      </div>
      <div>
       <ItemForm onSubmit={handleSubmit} />
      </div>
    </li>
  );
};

export default ListItem;
