import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { baseUrl } from '../lib'

export interface IMetaContainerProps {
  title: string
  description: string
  keywords?: string
  withVideo?: boolean
  image?: string
}

const MetaContainer: FC<IMetaContainerProps> = ({
  title,
  description,
  keywords,
  image = '/meta/sk-line-meta.png',
  withVideo = false,
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
      {withVideo && (
        <meta
          content='https://youtu.be/YKVltIVLqGA'
          property='og:video'
        />
      )}

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
