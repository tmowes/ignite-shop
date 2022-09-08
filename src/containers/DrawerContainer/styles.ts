import { styled } from '../../styles'

const shadow = '-4px 0px 30px 0px rgba(0,0,0,0.8)'

export const Drawer = styled('aside', {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  width: 480,
  backgroundColor: '$gray800',
  height: '100vh',
  padding: '3rem',
  boxShadow: shadow,
  '-webkit-box-shadow': shadow,
  '-moz-box-shadow': shadow,
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  transform: 'translateX(0)',
  opacity: 1,
  '&.hidden': {
    transform: 'translateX(110%)',
    opacity: 0,
  },
})

export const DrawerHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '2rem',
})

export const DrawerTitle = styled('h2', {
  color: '$gray100',
  fontSize: '$xl',
})

export const DrawerContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
  gap: '1.5rem',
  marginBottom: 'auto',
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

export const DrawerItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: 96,
})

export const DrawerItemLeft = styled('div', {
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  width: 96,
  height: 96,
  borderRadius: 8,
  marginRight: '1.125rem',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  img: {
    objectFit: 'cover',
  },
})

export const DrawerItemRight = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const DrawerItemRemoveButton = styled('a', {
  backgroundColor: 'transparent',
  fontSize: '$sm',
  fontWeight: 'bold',
  color: '$green500',
})

export const DrawerFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 'auto',
  paddingTop: '1rem',
})

export const DrawerFooterRow = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const DrawerFooterSpan = styled('span', {
  color: '$gray100',
  fontSize: '$md',
})

export const DrawerFooterTitle = styled('strong', {
  color: '$gray100',
  fontSize: '$md',
})

export const DrawerFooterTotal = styled('strong', {
  color: '$gray100',
  fontSize: '$xl',
})

export const CartCheckoutButton = styled('button', {
  marginTop: '2rem',
  backgroundColor: '$green500',
  padding: '1.25rem',
  borderRadius: 8,
  width: '100%',
  fontSize: '$lg',
  fontWeight: 'bold',
  color: '$white',
})

export const CloseButton = styled('button', {
  backgroundColor: 'transparent',
  padding: '0.75rem',
  borderRadius: 8,
})
