import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const formStyles = `${classes.inputForm} ${props.classNameForm}`;
  const labelStyles = `${classes.inputForm__label} ${props.classNameLabel}`;
  const inputStyles = `${classes.inputForm__input} ${props.invalid && classes.invalid}`;

  return (
    <div className={formStyles}>
      <label htmlFor={props.input.id} className={labelStyles}>
        {props.label}
      </label>
      <input className={inputStyles} ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
