import Image from 'next/future/image'

import { useCart } from '../../contexts/CartProvider'
import * as S from './styles'
import { ProductContainerProps } from './types'

export function ProductContainer(props: ProductContainerProps) {
  const { data } = props
  const { addToCart } = useCart()

  return (
    <S.Container>
      <S.LeftSide>
        <Image src={data.imageUrl} alt="" width={520} height={480} />
      </S.LeftSide>
      <S.RightSide>
        <S.Title>{data.title}</S.Title>
        <S.Price>{data.price}</S.Price>
        <S.Description>{data.description}</S.Description>
        <S.AddToCartButton onClick={() => addToCart(data)}>Colocar na sacola</S.AddToCartButton>
      </S.RightSide>
    </S.Container>
  )
}
