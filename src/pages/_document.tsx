import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html className='scroll-smooth'>
        <Head>
          <link rel='icon' href='/favicon.png' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='scroll-smooth'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
