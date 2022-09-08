import { createContext, useCallback, useContext, useMemo, useState } from 'react'

import axios from 'axios'

import { Product } from '../../model'
import { CartContextData, CartProduct, CartProviderProps } from './types'

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartProduct[]>([])

  const [isInCheckout, setIsInCheckout] = useState(false)

  const addToCart = useCallback((item: Product) => {
    const cartItem = { ...item, cartId: `${item.id}-${new Date().getTime()}` }
    setCartItems((prev) => [...prev, cartItem])
  }, [])

  const removeFromCart = useCallback((cartId: string) => {
    setCartItems((prev) => prev.filter((item) => item.cartId !== cartId))
  }, [])

  const onPurchaseCheckout = useCallback(async () => {
    if (isInCheckout) return
    if (cartItems.length === 0) return
    try {
      setIsInCheckout(true)

      const pricesIds = cartItems.map((i) => i.priceId)
      const response = await axios.post('/api/checkout-session', { pricesIds })
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
      setCartItems([])
    } catch (error) {
      console.error('HANDLE-PURCHASE-ERROR', error)
    } finally {
      setIsInCheckout(false)
    }
  }, [cartItems, isInCheckout])

  const providerValues = useMemo(
    () => ({ cartItems, addToCart, removeFromCart, onPurchaseCheckout, isInCheckout }),
    [addToCart, cartItems, isInCheckout, onPurchaseCheckout, removeFromCart],
  )

  return <CartContext.Provider value={providerValues}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}
