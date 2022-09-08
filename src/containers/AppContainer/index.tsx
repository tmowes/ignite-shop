import Image from 'next/future/image'
import { useState } from 'react'
import Link from 'next/link'

import { Handbag } from 'phosphor-react'

import logoImg from '../../assets/logo.svg'
import { useCart } from '../../contexts/CartProvider'
import { theme } from '../../styles'
import { DrawerContainer } from '../DrawerContainer'
import * as S from './styles'
import { AppContainerProps } from './types'

export function AppContainer(props: AppContainerProps) {
  const { children } = props
  const { colors } = theme
  const [isDrawerOpen, setToggleDrawer] = useState(false)
  const { cartItems } = useCart()

  const cartItensCount = cartItems.length

  const hasCartItem = cartItensCount > 0

  const onCloseDrawer = () => setToggleDrawer(false)

  return (
    <>
      <S.Container>
        <S.Header>
          <Link href={'/'} passHref>
            <a>
              <Image src={logoImg} alt="ignite shop logo" />
            </a>
          </Link>
          <S.IconButton onClick={() => setToggleDrawer(true)}>
            <Handbag
              size={32}
              weight="bold"
              color={String(hasCartItem ? colors.gray100 : colors.gray500)}
            />
            {hasCartItem && <S.Badge>{cartItensCount}</S.Badge>}
          </S.IconButton>
        </S.Header>
        {children}
      </S.Container>
      <DrawerContainer onClose={onCloseDrawer} isOpen={isDrawerOpen} />
    </>
  )
}
