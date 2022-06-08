import React, { useState, useEffect, useCallback } from "react";

import ListItem from "./ListItem";
import Card from "../UI/Card";
import classes from "./MenuList.module.css";

const MenuList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [meals, setMeals] = useState([]);

  const fetchMeals = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://food-order-app-997db-default-rtdb.firebaseio.com/meals.json/"
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      let fetchedMeals =[];
      for (const key in data) {
        fetchedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        })
      }

      setMeals(fetchedMeals);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  let content = <p>No meals for you!</p>;

  if (meals.length > 0) {
    content = meals.map(item => <ul className={classes.menuList_list} key={item.id}>{<ListItem
      id={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />}</ul>)
  }

  if (isLoading) {
    content = <p>... loading</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <section className={classes.menuSection}>
      <Card className={classes.menuList}>{content}</Card>
    </section>
  );
};

export default MenuList;
