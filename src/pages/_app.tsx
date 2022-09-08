import type { AppProps } from 'next/app'

import { AppContainer } from '../containers/AppContainer'
import { CartProvider } from '../contexts/CartProvider'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <CartProvider>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </CartProvider>
  )
}
