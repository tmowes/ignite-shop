import { styled } from '../../styles'

export const NavSlider = styled('nav', {
  display: 'flex',
  maxWidth: 'calc(1452px)',
  // maxWidth: 'calc(1180px + 4rem)',
  minHeight: 656,
  margin: '0 auto',
  position: 'relative',
  '.arrow': {
    width: 128,
    height: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    '-webkit-transform': 'translateY(-50%)',
    cursor: 'pointer',
    fill: '$gray300',
    opacity: 1,
    transition: 'all 0.3s ease-in-out',
  },

  '.arrow--left': {
    left: 0,
    padding: '0 2rem',
    background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, $gray900 150%)',
  },

  '.arrow--right': {
    right: 0,
    padding: '0 2rem',
    background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, $gray900 150%)',
  },

  '.arrow--disabled': {
    opacity: 0,
  },
})

export const Container = styled('div', {
  minHeight: 656,
  margin: '0 auto',
  position: 'relative',
})

export const Product = styled('a', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  color: '$gray100',
  img: {
    objectFit: 'cover',
  },
  '&:hover, &.active': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
})

export const Footer = styled('footer', {
  position: 'absolute',
  right: '0.25rem',
  left: '0.25rem',
  bottom: '0.25rem',
  padding: '1rem 2rem 1rem 1rem',
  borderRadius: 6,
  backgroundColor: 'rgba(32, 32, 36, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',
})

export const FooterDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const AddToCartButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.75rem',
  borderRadius: 6,
  backgroundColor: '$green500',
  color: '$white',
})

export const Title = styled('strong', {
  fontSize: '$lg',
})

export const Price = styled('span', {
  fontSize: '$xl',
  fontWeight: 'bold',
  color: '$green300',
})

export const Dots = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  margin: '1rem auto',

  '.dot': {
    border: 'none',
    width: 16,
    height: 16,
    background: '$gray100',
    opacity: 0.4,
    borderRadius: '50%',
    margin: '0 8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
  },

  '.dot:focus': {
    outline: 'none',
  },

  '.dot.active': {
    background: '$gray300',
    opacity: 1,
  },
})
