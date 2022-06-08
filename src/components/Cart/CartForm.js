import React, { useState, useContext } from "react";
import Button from "../UI/Button";

import Input from "../UI/Input";
import classes from "./CartForm.module.css";
import useInput from "../../hooks/use-input";
import { CartContext } from "../../contexts/cart-items-context";

const CartForm = (props) => {
  const cartCtx = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const name = useInput((name) => name.trim() !== "");
  const street = useInput((street) => street.trim().length > 1);
  const code = useInput((zipCode) => zipCode.trim().length === 5);
  const city = useInput((city) => city.trim() !== "");

  const orderDetails = {
    userDetails: {
      name: name.value,
      street: street.value,
      postalCode: code.value,
      city: city.value,
    },
    order: cartCtx.order,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    name.touchOnSubmit();
    street.touchOnSubmit();
    code.touchOnSubmit();
    city.touchOnSubmit();

    console.log(name.isTouched, name.valueIsValid);

    console.log(
      name.isNotValid,
      street.isNotValid,
      code.isNotValid,
      city.isNotValid
    );

    if (
      !name.valueIsValid ||
      !street.valueIsValid ||
      !code.valueIsValid ||
      !city.valueIsValid
    ) {
      console.log("not SUBMITED");
      return;
    }

    sendData(orderDetails);

    name.reset();
    street.reset();
    code.reset();
    city.reset();

    console.log("SUBMITED");
  };

  const sendData = async (order) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://food-order-app-997db-default-rtdb.firebaseio.com/orders.json/",
        {
          method: "POST",
          body: JSON.stringify(order),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Order is not submitted!");
      }

      const data = await response.json();
      console.log(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Your Name"
        classNameForm={classes.cartForm__form}
        invalid={name.isNotValid}
        input={{
          id: "name",
          type: "text",
          name: "name",
          value: name.value,
          onChange: name.changeHandler,
          onBlur: name.blurHandler,
        }}
      />
      {name.isNotValid && (
        <p className={classes.error}>Name field shouldn't be empty</p>
      )}
      <Input
        label="Street"
        classNameForm={classes.cartForm__form}
        invalid={street.isNotValid}
        input={{
          id: "street",
          type: "text",
          name: "street",
          value: street.value,
          onChange: street.changeHandler,
          onBlur: street.blurHandler,
        }}
      />
      {street.isNotValid && (
        <p className={classes.error}>Street field shouldn't be empty</p>
      )}

      <Input
        label="Postal Code"
        classNameForm={classes.cartForm__form}
        invalid={code.isNotValid}
        input={{
          id: "code",
          type: "text",
          name: "code",
          value: code.value,
          onChange: code.changeHandler,
          onBlur: code.blurHandler,
        }}
      />
      {code.isNotValid && <p className={classes.error}>Invalid Postal Code</p>}

      <Input
        label="City"
        classNameForm={classes.cartForm__form}
        invalid={city.isNotValid}
        input={{
          id: "city",
          type: "text",
          name: "city",
          value: city.value,
          onChange: city.changeHandler,
          onBlur: city.blurHandler,
        }}
      />
      {city.isNotValid && (
        <p className={classes.error}>City field shouldn't be empty</p>
      )}

      <div className={classes.buttons}>
        <Button
          type="button"
          className={classes.buttons__cancel}
          onClick={props.onClick}
        >
          Cancel
        </Button>
        <Button type="submit" className={classes.buttons__confirm}>
          Confirm
        </Button>
      </div>
      {error && <p>{error}</p>}
      {isLoading && <p>... loading</p>}
    </form>
  );
};

export default CartForm;
