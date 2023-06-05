import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html  data-theme="bumblebee" lang="en">
      <Head />
      <body className='bg-base-100'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
