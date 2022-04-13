import React, { useState } from "react";
import Button from "../UI/Button";

import Input from "../UI/Input";
import classes from "./CartForm.module.css";

const CartForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    code: "",
    city: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('SUBMITED');
  }

  console.log('CARTfORM', formData);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Your Name"
        classNameForm={classes.cartForm__form}
        classNameInput={classes.cartForm__input}
        classNameLabel={classes.cartForm__label}
        input={{
          id: "name",
          type: "text",
          name: "name",
          value: formData.name,
          onChange: handleChange,
        }}
      />
      <Input
        label="Street"
        classNameForm={classes.cartForm__form}
        classNameInput={classes.cartForm__input}
        classNameLabel={classes.cartForm__label}
        input={{
          id: "street",
          type: "text",
          name: "street",
          value: formData.street,
          onChange: handleChange,
        }}
      />
      <Input
        label="Postal Code"
        classNameForm={classes.cartForm__form}
        classNameInput={classes.cartForm__input}
        classNameLabel={classes.cartForm__label}
        input={{
          id: "code",
          type: "text",
          name: "code",
          value: formData.code,
          onChange: handleChange,
        }}
      />
      <Input
        label="City"
        classNameForm={classes.cartForm__form}
        classNameInput={classes.cartForm__input}
        classNameLabel={classes.cartForm__label}
        input={{
          id: "city",
          type: "text",
          name: "city",
          value: formData.city,
          onChange: handleChange,
        }}
      />
      <div className={classes.buttons}>
        <Button type="button" className={classes.buttons__cancel}>
          Cancel
        </Button>
        <Button type="submit" className={classes.buttons__confirm}>Confirm</Button>
      </div>
    </form>
  );
};

export default CartForm;
