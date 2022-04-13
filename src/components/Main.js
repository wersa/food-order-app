import React from "react";

import MenuList from "./FoodList/MenuList";
import Card from './UI/Card';
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <Card className={classes.cardInfo}>
        <h1 className={classes.cardInfo__title}>Delicious Food, Delivered To You</h1>
        <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
      </Card>
      <MenuList />
    </main>
  );
};

export default Main;
