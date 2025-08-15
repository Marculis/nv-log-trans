import { baseUrl } from '@/shared/lib'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='/favicon.svg'
          rel='icon'
        />
        <link
          href={`${baseUrl}/icons/logo-16.svg`}
          key='favicon'
          rel='icon'
          sizes='any'
          type='image/x-icon'
        />
        <link
          href='/meta/apple-touch-icon.png'
          rel='apple-touch-icon'
          sizes='180x180'
        />
        <link
          href='/meta/favicon-96x96.png'
          rel='icon'
          sizes='96x96'
          type='image/png'
        />
        <link
          href='/meta/web-app-manifest-192x192.png'
          key='favicon-192x192'
          rel='icon'
          sizes='192x192'
          type='image/png'
        />
        <link
          href='/meta/web-app-manifest-512x512.png'
          key='favicon-521x512'
          rel='icon'
          sizes='512x512'
          type='image/png'
        />
        <link
          href='/site.webmanifest'
          rel='manifest'
        />
        <link
          color='#5bbad5'
          href='/safari-pinned-tab.svg'
          rel='mask-icon'
        />
      </Head>
      <body style={{ overflowX: 'hidden' }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
