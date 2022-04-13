import React from "react";

import ListItem from "./ListItem";
import Card from "../UI/Card";
import classes from "./MenuList.module.css";

const MenuList = () => {
  
  const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const meals = DUMMY_MEALS.map((item) => {
    return <ListItem
      key={item.id}
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />;
  });

  return (
    <section className={classes.menuSection}>
      <Card className={classes.menuList}>
        <ul className={classes.menuList_list}>{meals}</ul>
      </Card>
    </section>
  );
};

export default MenuList;
