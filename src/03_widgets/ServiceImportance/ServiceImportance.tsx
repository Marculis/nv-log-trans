import { BlockContainer } from '@/shared/ui'
import { Flex, Heading, IconProps, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { defaultImportantPoints } from './constants'

interface ImportantPoints {
  text: string
  Icon: FC<IconProps>
}

const ServiceImportance: FC<{
  heading?: string
  importantPoints?: ImportantPoints[]
  itemTextWidth?: string
}> = ({
  heading = 'Почему с нами удобно работать?',
  importantPoints = defaultImportantPoints,
  itemTextWidth = '240px',
}) => (
  <BlockContainer bgColor='primary.dark'>
    <Heading
      color='gray.100'
      textAlign='center'
    >
      {heading}
    </Heading>

    <Flex
      flexWrap='wrap'
      gap={{ base: 8, md: 4 }}
      justifyContent='space-around'
    >
      {importantPoints.map(({ text, Icon }) => (
        <Flex
          alignItems='center'
          flexDir='column'
          flexWrap='wrap'
          gap={{ base: 1, md: 4 }}
          key={text}
        >
          <Icon
            boxSize='12'
            color='gray.100'
          />
          <Text
            color='gray.100'
            fontSize='lg'
            fontWeight='medium'
            maxW={itemTextWidth}
            textAlign='center'
          >
            {text}
          </Text>
        </Flex>
      ))}
    </Flex>
  </BlockContainer>
)

export default ServiceImportance
