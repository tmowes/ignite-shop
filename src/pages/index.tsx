import { GetStaticProps } from 'next'
import Head from 'next/head'

import { HomeContainer } from '../containers/HomeContainer'
import { stripe } from '../lib/stripe'
import { ExpandedPrice, Product } from '../model'
import { formatCurrency } from '../utils/formatCurrency'

type HomeProps = {
  products: Product[]
}

export default function Home(props: HomeProps) {
  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>
      <HomeContainer data={props.products} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await stripe.products.list({ expand: ['data.default_price'] })
  const products = data.map((product) => {
    const price = product.default_price as ExpandedPrice
    return {
      id: product.id,
      title: product.name,
      imageUrl: product.images[0],
      price: formatCurrency(price.unit_amount / 100),
    }
  })

  return {
    props: { products },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
