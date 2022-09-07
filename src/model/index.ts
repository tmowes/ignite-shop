import Stripe from 'stripe'

export type Product = {
  id: string
  title: string
  description?: string
  imageUrl: string
  price: string
  priceId?: string
}

export type ExpandedPrice = Stripe.Price
export type ExpandedProduct = Stripe.Product

export type CheckoutInfo = {
  customer: {
    name: string
  }
  product: Pick<Product, 'title' | 'imageUrl'>
}
