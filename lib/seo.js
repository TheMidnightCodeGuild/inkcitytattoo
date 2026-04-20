export const SITE_URL = 'https://inkcitythetattoostudio.com'
export const SITE_NAME = 'Ink City Tattoo Studio'
export const DEFAULT_OG_IMAGE = '/images/home-banner.png'

export const BUSINESS_INFO = {
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logowhite.png`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  email: 'inkcitythetattoostudio22@gmail.com',
  telephone: '+91-95163-62594',
  address: {
    streetAddress: 'Mini chopati ki gali, near gurudwara, Freeganj',
    addressLocality: 'Ujjain',
    addressRegion: 'Madhya Pradesh',
    postalCode: '456010',
    addressCountry: 'IN'
  },
  sameAs: [
    'https://www.instagram.com/ink_city_the_tattoo_studio/',
    'https://youtube.com/@sahil_suryavanshi?si=IYGOcTNLBVoQxxQV'
  ]
}

export const absoluteUrl = (path = '/') =>
  `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
