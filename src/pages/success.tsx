import { GetServerSideProps } from 'next'
import Head from 'next/head'

import { SuccessContainer } from '../containers/SuccessContainer'
import { stripe } from '../lib/stripe'
import { CheckoutInfo, ExpandedProduct } from '../model'

type SuccessProps = {
  data: CheckoutInfo
}

export default function Success(props: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer data={props.data} />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const stripeProduct = session.line_items.data.map((item) => item.price.product) as ExpandedProduct[]

  const customer = { name: session.customer_details.name }

  console.log({ stripeProduct })

  const products = stripeProduct.map((product) => ({
    title: product.name,
    imageUrl: product.images[0],
  }))

  return {
    props: {
      data: {
        customer,
        products,
      },
    },
  }
}
