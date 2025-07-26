import {
  ADDRESS,
  ADDRESS_URL,
  COMPANY,
  EMAIL,
  VIBER,
  PHONE_NUMBER,
  PHONE_NUMBER_SECOND,
  TELEGRAM,
} from '@/shared/lib'
import Head from 'next/head'

interface IJsonLdSectionProps {
  breadcrumbs?: { name: string; href: string }[]
  steps?: string[]
}

const JsonLdSection = ({ breadcrumbs, steps }: IJsonLdSectionProps) => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY,
    address: {
      '@type': 'PostalAddress',
      postalCode: '224001',
      streetAddress: ADDRESS,
      addressLocality: 'Брест',
      addressCountry: 'BY',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: PHONE_NUMBER,
        contactType: 'Customer Service',
      },
      {
        '@type': 'ContactPoint',
        telephone: PHONE_NUMBER_SECOND,
        contactType: 'Customer Service',
      },
    ],
    email: EMAIL,
    sameAs: [VIBER, TELEGRAM, ADDRESS_URL],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs?.map(({ name, href }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: name,
      item: `${process.env.NEXT_PUBLIC_BASE_URL}/${href}`,
    })),
  }

  return (
    <Head>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        id='Organization'
        type='application/ld+json'
      />

      {breadcrumbs && (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          id='Breadcrumbs'
          type='application/ld+json'
        />
      )}
    </Head>
  )
}

export default JsonLdSection
