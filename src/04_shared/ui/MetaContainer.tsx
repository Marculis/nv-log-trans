import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { baseUrl, COMPANY } from '../lib'

export interface IMetaContainerProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
}

const MetaContainer: FC<IMetaContainerProps> = ({
  title = 'Услуги таможенного оформления',
  description = `Широкий спектр оформления таможенных услуг в РБ, РФ, ЕС. ${COMPANY}`,
  keywords,
  image = `${baseUrl}/images/main-bg2.jpg`,
}) => {
  const { asPath } = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <meta
        content={description}
        name='description'
      />
      {keywords && (
        <meta
          content={keywords}
          name='keywords'
        />
      )}

      {/*  Open Graph */}
      <meta
        content={title}
        property='og:title'
      />
      <meta
        content={description}
        property='og:description'
      />
      <meta
        content={`${baseUrl}${image}`}
        property='og:image'
      />
      <meta
        content={`${baseUrl}${asPath}`}
        property='og:url'
      />

      {/*  twitter */}
      <meta
        content={title}
        name='twitter:title'
      />
      <meta
        content={description}
        name='twitter:description'
      />
      <meta
        content={`${baseUrl}${image}`}
        name='twitter:image'
      />
    </Head>
  )
}

export default MetaContainer
