import { NextApiRequest, NextApiResponse } from 'next'

import { stripe } from '../../lib/stripe'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pricesIds } = req.body as { pricesIds: string[] }

  if (req.method !== 'POST') {
    return res.status(405).end('Method not allowed.')
  }

  if (pricesIds.length < 1) {
    return res.status(400).json({ error: 'Prices ids not found.' })
  }

  const line_items = pricesIds.map((priceId) => ({
    price: priceId,
    quantity: 1,
  }))

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_URL}/`,
    mode: 'payment',
    line_items,
  })

  return res.status(201).json({ checkoutUrl: checkoutSession.url })
}
