import { Head, Html, Main, NextScript } from 'next/document'

import { getCssText } from '../styles'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#171923" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
