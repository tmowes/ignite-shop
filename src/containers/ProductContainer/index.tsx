import Image from 'next/future/image'
import { useState } from 'react'

import axios from 'axios'

import * as S from './styles'
import { ProductContainerProps } from './types'

export function ProductContainer(props: ProductContainerProps) {
  const { data } = props

  const [isInCheckout, setIsInCheckout] = useState(false)

  const handlePurchase = async () => {
    try {
      setIsInCheckout(true)
      const response = await axios.post('/api/checkout-session', {
        priceId: data.priceId,
      })
      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (error) {
      setIsInCheckout(false)
      console.error('HANDLE-PURCHASE-ERROR', error)
    }
  }

  return (
    <S.Container>
      <S.LeftSide>
        <Image src={data.imageUrl} alt="" width={520} height={480} />
      </S.LeftSide>
      <S.RightSide>
        <S.Title>{data.title}</S.Title>
        <S.Price>{data.price}</S.Price>
        <S.Description>{data.description}</S.Description>
        <S.AddToCartButton onClick={handlePurchase} disabled={isInCheckout}>
          Colocar na sacola
        </S.AddToCartButton>
      </S.RightSide>
    </S.Container>
  )
}
