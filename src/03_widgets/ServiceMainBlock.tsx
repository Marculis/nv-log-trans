import { Heading, Highlight, Text } from '@chakra-ui/react'
import FullScreenImage from './FullScreenImage'
import { FC } from 'react'

const ServiceMainBlock: FC<{
  heading: string
  headingHighlight: string[]
  description?: string
  imageSrc?: string
}> = ({ heading, headingHighlight, description, imageSrc }) => {
  return (
    <FullScreenImage imageSrc={imageSrc}>
      <Heading
        alignSelf='start'
        color='gray.100'
        fontSize={{ base: '2.5rem', md: '4.2rem' }}
        w='90%'
        whiteSpace='pre-wrap'
      >
        <Highlight
          query={headingHighlight}
          styles={{
            color: 'primary.base',
            whiteSpace: 'pre-wrap',
            fontSize: { base: '2.5rem', md: '4rem' },
          }}
        >
          {heading}
        </Highlight>
      </Heading>
      {description && (
        <Text
          alignSelf='start'
          color='gray.100'
          fontSize={{ base: '2xl', md: '3xl' }}
          maxW='920px'
        >
          {description}
        </Text>
      )}
    </FullScreenImage>
  )
}

export default ServiceMainBlock
