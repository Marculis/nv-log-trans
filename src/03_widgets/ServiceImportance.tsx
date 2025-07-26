import { BlockContainer } from '@/shared/ui'
import { Flex, Heading, IconProps, Text } from '@chakra-ui/react'
import { FC } from 'react'

interface ImportantPoints {
  text: string
  Icon: FC<IconProps>
}

const ServiceImportance: FC<{
  heading: string
  importantPoints: ImportantPoints[]
}> = ({ heading, importantPoints }) => (
  <BlockContainer bgColor='primary.dark'>
    <Heading
      color='gray.100'
      textAlign='center'
    >
      {heading}
    </Heading>

    <Flex
      flexWrap='wrap'
      gap='4'
      justifyContent='space-around'
    >
      {importantPoints.map(({ text, Icon }) => (
        <Flex
          alignItems='center'
          flexDir='column'
          flexWrap='wrap'
          gap='4'
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
            maxW='240px'
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
