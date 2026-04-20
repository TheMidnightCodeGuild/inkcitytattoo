import '@/styles/globals.css'
import Head from 'next/head'
import { BUSINESS_INFO } from '@/lib/seo'

export default function App({ Component, pageProps }) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'TattooParlor',
    name: BUSINESS_INFO.name,
    image: BUSINESS_INFO.image,
    url: BUSINESS_INFO.url,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      ...BUSINESS_INFO.address
    },
    sameAs: BUSINESS_INFO.sameAs
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0039a6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
