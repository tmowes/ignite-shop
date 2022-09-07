import { styled } from '../../styles'

export const Container = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  gap: '4rem',
})

export const LeftSide = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  img: {
    objectFit: 'cover',
  },
})

export const RightSide = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const Title = styled('h1', {
  fontSize: '$2xl',
  color: '$gray300',
  marginBottom: '1rem',
})

export const Price = styled('span', {
  color: '$green300',
  fontSize: '$2xl',
  marginBottom: '2.5rem',
})

export const Description = styled('span', {
  display: 'block',
  fontSize: '$md',
  lineHeight: 1.6,
  color: '$gray300',
})

export const AddToCartButton = styled('button', {
  marginTop: 'auto',
  backgroundColor: '$green500',
  padding: '1.25rem',
  borderRadius: 8,
  width: '100%',
  fontSize: '$lg',
  fontWeight: 'bold',
  color: '$white',
})
