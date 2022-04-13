import React, { useState } from 'react'

import Input from '../UI/Input'
import Button from '../UI/Button'
import classes from './ItemForm.module.css'

const ItemForm = (props) => {
  const [mealCount, setMealCount] = useState('1');

  const handleChange = (event) => {
    setMealCount(event.target.value);
  }

  const submitForm = (event) => {
    event.preventDefault();
    const value = Number(mealCount);
    props.onSubmit(value);
  }

  return (
    <form className={classes.itemForm} onSubmit={submitForm}>
        <Input 
            label='Amount'
            classNameForm={classes.itemForm__form}
            classNameInput={classes.itemForm__input}
            classNameLabel={classes.itemForm__label}
            input = {{
                id: 'amount',
                type: 'number',
                value: mealCount,
                onChange: handleChange,
                step: 1,
                max: 5,
                min: 1
            }}

        /> 
    <Button className={classes.itemForm__button}>+ Add</Button>
  </form>
  )
}

export default ItemForm