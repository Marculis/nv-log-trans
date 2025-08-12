import { baseUrl } from '@/shared/lib'
import { BlockContainer } from '@/shared/ui'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { FC, ReactNode } from 'react'

const FullScreenImage: FC<{ children?: ReactNode; imageSrc?: string }> = ({
  children,
  imageSrc = `${baseUrl}/images/main-bg2.jpg`,
}) => {
  return (
    <BlockContainer
      alignItems='center'
      BgBox={() => (
        <Box
          h='100%'
          left='50%'
          position='absolute'
          top='0'
          transform='translateX(-50%)'
          w='100vw'
          zIndex={-1}
        >
          <Image
            alt={'COMPANY'}
            loading='eager'
            priority={true}
            quality={100}
            sizes='100vw'
            src={imageSrc}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(50%)',
            }}
            fill
          />
        </Box>
      )}
      justifyContent='center'
      minH='calc(100vh - 7rem)'
    >
      {children}
    </BlockContainer>
  )
}

export default FullScreenImage
