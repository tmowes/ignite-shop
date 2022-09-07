import Image from 'next/future/image'
import Link from 'next/link'

import * as S from './styles'
import { SuccessContainerProps } from './types'

export function SuccessContainer(props: SuccessContainerProps) {
  const { data } = props
  if (!data) return null
  return (
    <S.Container>
      <S.Title>Compra efetuada!</S.Title>
      <S.Product>
        <Image src={data.product.imageUrl} alt="" width={145} height={127} />
      </S.Product>
      <S.Description>
        Uhuul <strong>{data.customer.name}</strong>, sua <strong>{data.product.title}</strong> já está a
        caminho da sua casa.
      </S.Description>
      <Link href="/" passHref>
        <S.BackToHomeLink>Voltar ao catálogo</S.BackToHomeLink>
      </Link>
    </S.Container>
  )
}
