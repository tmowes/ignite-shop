import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const IconButton = styled('button', {
  backgroundColor: '$gray800',
  padding: '0.75rem',
  borderRadius: 8,
  position: 'relative',
  svg: {
    color: '$gray500',
  },
})

export const Badge = styled('div', {
  position: 'absolute',
  top: -7,
  right: -7,
  width: 28,
  height: 28,
  backgroundColor: '$green500',
  borderRadius: '50%',
  border: '3px solid $gray900',
  color: '$white',
  fontSize: '$md',
})
