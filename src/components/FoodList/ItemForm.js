import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./ItemForm.module.css";

const ItemForm = (props) => {
  const [mealCount, setMealCount] = useState("1");

  const handleChange = (event) => {
    setMealCount(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const value = Number(mealCount);
    props.onSubmit(value);
  };

  return (
    <form className={classes.itemForm} onSubmit={submitForm}>
      <div className={classes.itemForm__form}>
        <label htmlFor='amount' className={classes.itemForm__label}>
          Amount
        </label>
        <input
          className={classes.itemForm__input}
          id="amount"
          type="number"
          value={mealCount}
          onChange={handleChange}
          step="1"
          max="5"
          min="1"
        />
      </div>

      <Button className={classes.itemForm__button}>+ Add</Button>
    </form>
  );
};

export default ItemForm;
