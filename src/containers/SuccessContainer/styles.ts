import { styled } from '../../styles'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  minHeight: 656,
  maxWidth: 576,
  margin: '0 auto',
  height: '100%',
  padding: '5rem 0 0 0',
})

export const Product = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.25rem',
  height: 145,
  width: 127,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  img: {
    objectFit: 'cover',
  },
})

export const Title = styled('h1', {
  fontSize: '$2xl',
  color: '$gray100',
  marginBottom: '4rem',
})

export const Description = styled('p', {
  fontSize: '$xl',
  color: '$gray300',
  textAlign: 'center',
  marginTop: '2rem',
})

export const BackToHomeLink = styled('a', {
  marginTop: 'auto',
  color: '$green500',
  fontSize: '$lg',
  fontWeight: 'bold',
  '&:hover': {
    textDecoration: 'underline',
    color: '$green300',
  },
})
