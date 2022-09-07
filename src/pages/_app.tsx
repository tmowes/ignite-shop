import type { AppProps } from 'next/app'

import { AppContainer } from '../containers/AppContainer'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <AppContainer>
      <Component {...pageProps} />
    </AppContainer>
  )
}
