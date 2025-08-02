import { baseUrl } from '@/shared/lib'
import { BlockContainer, DoneIcon } from '@/shared/ui'
import { Box, Flex, Heading, List, ListItem, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'

const ServiceConditionsBlock: FC<{
  servicePoints: string[] | { title: string; description: string }[]
  heading: string
  imageSrc?: string
  isImageOnRight?: boolean
}> = ({
  heading,
  servicePoints,
  imageSrc = `${baseUrl}/images/epi-services.jpg`,
  isImageOnRight = true,
}) => {
  return (
    <BlockContainer
      alignItems='center'
      bgColor='bg.light'
      flexDir={{ base: 'column', md: isImageOnRight ? 'row' : 'row-reverse' }}
      justifyContent='space-between'
    >
      <Flex
        flexDir='column'
        gap='8'
      >
        <Heading
          maxW='700px'
          textAlign='center'
        >
          {heading}
        </Heading>
        <List
          display='flex'
          flexDir='column'
          gap='4'
          maxW='700px'
        >
          {servicePoints.map((item, index) => (
            <ListItem
              alignItems='center'
              display='flex'
              gap='4'
              key={index}
            >
              <DoneIcon
                boxSize='6'
                color='secondary.base'
              />
              <Flex flexDir='column'>
                <Text
                  fontSize='xl'
                  fontWeight='medium'
                >
                  {typeof item === 'string' ? item : item.title}
                </Text>
                {typeof item === 'object' && <Text>{item.description}</Text>}
              </Flex>
            </ListItem>
          ))}
        </List>
      </Flex>
      <Box
        borderRadius='xl'
        maxW='500px'
        overflow='hidden'
      >
        <Image
          alt={'COMPANY'}
          height={500}
          loading='eager'
          quality={100}
          src={imageSrc}
          style={{
            filter: 'brightness(70%)',
          }}
          width={500}
        />
      </Box>
    </BlockContainer>
  )
}

export default ServiceConditionsBlock
