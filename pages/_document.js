// In `pages/_document.js`
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="https://lidrekon.ru/slep/js/jquery.js" strategy="beforeInteractive" />
    <Script src="https://lidrekon.ru/slep/js/uhpv-full.min.js" strategy="beforeInteractive" />
      </body>
    </Html>
  )
}