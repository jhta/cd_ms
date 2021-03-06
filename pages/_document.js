import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-dark.min.css" />
          <style>{`
          body {
            font-size: 14px;
            margin: 0;
            font-family: monospace;
            box-sizing: border-box;
            height: 100vh;
         }
          #__next {
            height: 100vh;
            overflow-x: hidden;
          }
          a {
            color: black;
          }

          h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
          }

          ul {
            margin: 0;
            padding: 0;
          }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
