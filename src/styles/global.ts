import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    fontFamily: 'Roboto',
    fontSize: '1.6rem',
    lineHeight: 1.6,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  'html, body, #next': {
    height: '100%',
  },
  'a, button': {
    cursor: 'pointer',
    textDecoration: 'none',
  },
  'body, a, button, input, textarea': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
  'input, textarea, button': {
    border: 'none',
  },
  button: {
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },
    '&:not(:disabled):hover': {
      filter: 'brightness(1.2)',
      scale: 1.005,
    },
    '&:active': {
      filter: 'brightness(0.9)',
      scale: 1.0,
    },
  },
})
