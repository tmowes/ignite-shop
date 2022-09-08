import Image from 'next/future/image'

import { X } from 'phosphor-react'

import { theme } from '../../styles'
import * as S from './styles'
import { useCart } from '../../contexts/CartProvider'
import { formatCurrency } from '../../utils/formatCurrency'
import { DrawerContainerProps } from './types'

export function DrawerContainer(props: DrawerContainerProps) {
  const { isOpen, onClose } = props
  const { colors } = theme
  const { cartItems, removeFromCart, isInCheckout, onPurchaseCheckout } = useCart()

  const itemsCount = cartItems.length

  const totalCartValue = formatCurrency(
    cartItems.reduce((acc, { priceNumber }) => acc + priceNumber, 0),
  )

  return (
    <S.Drawer className={!isOpen || itemsCount <= 0 ? 'hidden' : ''}>
      <S.DrawerHeader>
        <S.DrawerTitle>Sacola de compras</S.DrawerTitle>
        <S.CloseButton onClick={onClose}>
          <X size={32} weight="bold" color={String(colors.gray300)} />
        </S.CloseButton>
      </S.DrawerHeader>
      <S.DrawerContent>
        {cartItems.map(({ imageUrl, price, title, cartId }) => (
          <S.DrawerItem key={cartId}>
            <S.DrawerItemLeft>
              <Image src={imageUrl} alt="" width={88} height={88} />
            </S.DrawerItemLeft>
            <S.DrawerItemRight>
              <S.DrawerFooterSpan>{title}</S.DrawerFooterSpan>
              <S.DrawerFooterTitle>{price}</S.DrawerFooterTitle>
              <S.DrawerItemRemoveButton onClick={() => removeFromCart(cartId)}>
                Remover
              </S.DrawerItemRemoveButton>
            </S.DrawerItemRight>
          </S.DrawerItem>
        ))}
      </S.DrawerContent>
      <S.DrawerFooter>
        <S.DrawerFooterRow>
          <S.DrawerFooterSpan>Quantidade</S.DrawerFooterSpan>
          <S.DrawerFooterSpan>
            {itemsCount} ite{itemsCount > 1 ? 'ns' : 'm'}
          </S.DrawerFooterSpan>
        </S.DrawerFooterRow>
        <S.DrawerFooterRow>
          <S.DrawerFooterTitle>Valor total</S.DrawerFooterTitle>
          <S.DrawerFooterTotal>{totalCartValue}</S.DrawerFooterTotal>
        </S.DrawerFooterRow>
        <S.CartCheckoutButton onClick={onPurchaseCheckout} disabled={isInCheckout}>
          Finalizar compra
        </S.CartCheckoutButton>
      </S.DrawerFooter>
    </S.Drawer>
  )
}
