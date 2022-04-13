import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart-items-context'
import CartItem from './CartItem';

const CartList = () => {
    const cartCtx = useContext(CartContext);

    const order = cartCtx.order.map(meal => {
        return <CartItem 
            key={meal.id}
            id={meal.id}
            name={meal.name}
            price={meal.price}
            count={meal.count}
        />
    }) ;

  return (
    <div>{order}</div>
  )
}

export default CartList