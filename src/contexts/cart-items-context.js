import React, { createContext, useState } from "react";

export const CartContext = createContext({
  order: [],
  onAdd: () => {},
  onDelete: () => {},
  onIncrease: () => {},
  onDecrease: () => {},
});

const CartContextProvider = (props) => {
  const [order, setOrder] = useState([]);

  const addOrderHandler = (mealInfo) => {
    if (order.length === 0) {
      // console.log('FIRST ORDER', mealInfo);
      return setOrder((prevOrder) => [...prevOrder, mealInfo]);
    }
    console.log("ORDER BEFORE ADDING (CONTEXT)", order);

    return setOrder((prevOrder) => {
      const newOrder = prevOrder.find((meal) => meal.id === mealInfo.id)
        ? prevOrder.map((meal) =>
            mealInfo.id === meal.id
              ? { ...meal, count: mealInfo.count + meal.count }
              : meal
          )
        : [...prevOrder, mealInfo];
      return newOrder;
    });
  };

  const increaseMealCounter = (mealID) => {
    setOrder((prevOrder) => {
      return prevOrder.map((meal) =>
        meal.id === mealID ? { ...meal, count: meal.count + 1 } : meal
      );
    });
  };

  const decreaseMealCounter = (mealID) => {
    setOrder((prevOrder) => {
      const newOrder = prevOrder.find(
        (meal) => meal.id === mealID && meal.count === 1
      )
        ? prevOrder.filter((meal) => meal.id !== mealID)
        : prevOrder.map((meal) =>
            meal.id === mealID ? { ...meal, count: meal.count - 1 } : meal
          );
      return newOrder;
    });
  };

  console.log("Order after manipulations", order);

  const deleteOrderHandler = (mealID) => {
    setOrder((prevOrder) => {
      return prevOrder.filter((meal) => meal.id !== mealID);
    });
    console.log("DELETED ORDER", order);
  };

  return (
    <CartContext.Provider
      value={{
        order: order,
        onAdd: addOrderHandler,
        onDelete: deleteOrderHandler,
        onIncrease: increaseMealCounter,
        onDecrease: decreaseMealCounter,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
