import Stripe from 'stripe'

export type Product = {
  id: string
  title: string
  description?: string
  imageUrl: string
  price: string
  priceNumber: number
  priceId?: string
}

export type ExpandedPrice = Stripe.Price
export type ExpandedProduct = Stripe.Product

export type CheckoutInfo = {
  customer: {
    name: string
  }
  products: Pick<Product, 'title' | 'imageUrl'>[]
}
