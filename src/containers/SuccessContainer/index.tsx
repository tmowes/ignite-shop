import Image from 'next/future/image'
import Link from 'next/link'

import logoImg from '../../assets/logo.svg'
import * as S from './styles'
import { SuccessContainerProps } from './types'

export function SuccessContainer(props: SuccessContainerProps) {
  const { data } = props
  if (!data) return null

  console.log(data)
  return (
    <S.Wrapper>
      <S.Container>
        <Image src={logoImg} alt="ignite shop logo" />
        <S.ProductsList>
          {data.products.map(({ imageUrl }) => (
            <S.Product key={imageUrl}>
              <Image src={imageUrl} alt="" width={145} height={127} />
            </S.Product>
          ))}
        </S.ProductsList>
        <S.Title>Compra efetuada!</S.Title>
        <S.Description>
          Uhuul <strong>{data.customer.name}</strong>,
          {data.products.length <= 1 ? (
            <>
              {' '}
              sua <strong>{data.products[0].title}</strong>{' '}
            </>
          ) : (
            <>
              {' '}
              sua compra de <strong>{data.products.length}</strong> camisetas{' '}
            </>
          )}
          já está a caminho da sua casa.
        </S.Description>
        <Link href="/" passHref>
          <S.BackToHomeLink>Voltar ao catálogo</S.BackToHomeLink>
        </Link>
      </S.Container>
    </S.Wrapper>
  )
}
