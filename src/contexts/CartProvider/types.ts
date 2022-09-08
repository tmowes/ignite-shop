import { ReactNode } from 'react'

import { Product } from '../../model'

export type CartProviderProps = {
  children: ReactNode
}

export type CartContextData = {
  cartItems: CartProduct[]
  isInCheckout: boolean
  addToCart: (product: Product) => void
  removeFromCart: (cartId: string) => void
  onPurchaseCheckout: () => Promise<void>
}

export type CartProduct = Product & {
  cartId: string
}
