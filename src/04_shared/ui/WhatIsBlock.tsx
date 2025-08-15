import { Heading, Highlight, Text } from '@chakra-ui/react'
import BlockContainer from './BlockContainer'
import { FC, ReactNode } from 'react'

const WhatIsBlock: FC<{
  title: string
  text: string
  highlight: string[]
  children?: ReactNode
}> = ({ title, text, highlight, children }) => {
  return (
    <BlockContainer>
      <Heading>{title}</Heading>

      <Text
        fontSize='xl'
        whiteSpace='pre-wrap'
      >
        <Highlight
          query={highlight}
          styles={{ fontWeight: 'semibold', color: 'primary.base', whiteSpace: 'pre-wrap' }}
        >
          {text}
        </Highlight>
      </Text>
      {children && children}
    </BlockContainer>
  )
}

export default WhatIsBlock
