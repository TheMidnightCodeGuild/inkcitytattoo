import React from 'react'
import Head from 'next/head'
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME } from '@/lib/seo'

const SeoHead = ({
  title,
  description,
  canonicalPath = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  keywords = '',
  noIndex = false
}) => {
  const canonical = absoluteUrl(canonicalPath)
  const imageUrl = image.startsWith('http') ? image : absoluteUrl(image)
  const fullTitle = title?.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <link rel="canonical" href={canonical} />
    </Head>
  )
}

export default SeoHead
