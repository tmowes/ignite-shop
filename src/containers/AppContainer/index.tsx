import Image from 'next/future/image'

import { Handbag } from 'phosphor-react'

import logoImg from '../../assets/logo.svg'
import * as S from './styles'
import { AppContainerProps } from './types'

export function AppContainer(props: AppContainerProps) {
  const { children } = props
  return (
    <S.Container>
      <S.Header>
        <Image src={logoImg} alt="ignite shop logo" />
        <S.IconButton>
          <Handbag size={32} weight="bold" />
        </S.IconButton>
      </S.Header>
      {children}
    </S.Container>
  )
}
