import { styled } from '../../styles'

const shadow = '-4px 0px 30px 0px rgba(0,0,0,0.8)'

export const Wrapper = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  width: '100vw',
  background: '$gray900',
  color: '$gray100',
  textAlign: 'center',
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    width: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '$gray500',
    borderRadius: '3px',
  },
})

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  minHeight: 656,
  maxWidth: 640,
  margin: 'auto',
})

export const ProductsList = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '6rem',
  marginBottom: '3rem',
})

export const Product = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.25rem',
  height: 140,
  width: 140,
  marginRight: -26,
  marginLeft: -26,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 70,
  boxShadow: shadow,
  '-webkit-box-shadow': shadow,
  '-moz-box-shadow': shadow,
  img: {
    objectFit: 'cover',
  },
})

export const Title = styled('h1', {
  fontSize: '$2xl',
  color: '$gray100',
})

export const Description = styled('p', {
  fontSize: '$xl',
  color: '$gray300',
  textAlign: 'center',
  marginTop: '1.5rem',
})

export const BackToHomeLink = styled('a', {
  marginTop: '4rem',
  color: '$green500',
  fontSize: '$lg',
  fontWeight: 'bold',
  '&:hover': {
    textDecoration: 'underline',
    color: '$green300',
  },
})
