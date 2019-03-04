import { createContext } from 'react'

const defaultShoppingCart = {
  total: 0,
  subtotal: 0,
  items: [],
}

export const CartContext = createContext(defaultShoppingCart)
