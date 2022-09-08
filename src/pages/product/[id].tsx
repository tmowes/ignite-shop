import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { ProductContainer } from '../../containers/ProductContainer'
import { stripe } from '../../lib/stripe'
import { ExpandedPrice, Product } from '../../model'
import { formatCurrency } from '../../utils/formatCurrency'

type ProductDetailsProps = {
  product: Product
}

export default function ProductDetails(props: ProductDetailsProps) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Head>
        <title>{props.product.title} | Ignite Shop</title>
      </Head>
      <ProductContainer data={props.product} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const { data } = await stripe.products.list({ expand: ['data.default_price'] })
  // const paths = data.map((p) => ({ params: { id: p.id } }))

  const paths = []
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<ProductDetailsProps, { id: string }> = async ({
  params,
}) => {
  const { id } = params
  const p = await stripe.products.retrieve(id, { expand: ['default_price'] })
  const price = p.default_price as ExpandedPrice
  const product = {
    id: p.id,
    title: p.name,
    imageUrl: p.images[0],
    description: p.description,
    price: formatCurrency(price.unit_amount / 100),
    priceNumber: price.unit_amount / 100,
    priceId: price.id,
  }

  return {
    props: { product },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
