import React, { useState, useContext } from 'react'
import CartButton from './CartButton'
import CartCard from './Cart/CartCard';

import mealsImg from "../images/meals.jpg";
import classes from './Header.module.css'

const Header = () => {

  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(true);
    // showCardCtx.onShow();
  }

  // const clickCloseHandler = () => {
  //   setIsClicked(false);
  // }

  const blurHandler = () => {
    setIsClicked(false);
  }

  return (
    <>
    <header className={classes.header_header} >
        <h2 className={classes.header_headerName}>MealsApp</h2>
        <CartButton onClick={clickHandler}  />
    </header>
        <div className={classes.header_imageCover}>
         <img src={mealsImg} alt="meals" className={classes.header_imageCoverImg} />
      </div>
      {isClicked && <CartCard isShown={isClicked} onClickOutside={blurHandler} onClickClose={blurHandler} />}
    </>
  )
}

export default Header