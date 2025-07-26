import { BlockContainer, DoneIcon } from '@/shared/ui'
import { Box, Flex, Heading, List, ListItem, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'

const ServiceConditionsBlock: FC<{
  servicePoints: string[]
  heading: string
  imageSrc?: string
}> = ({ heading, servicePoints, imageSrc = '/images/epi-services.jpg' }) => {
  return (
    <BlockContainer
      alignItems='center'
      bgColor='bg.light'
      flexDir={{ base: 'column', md: 'row' }}
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
          {servicePoints.map((item) => (
            <ListItem
              alignItems='center'
              display='flex'
              gap='4'
              key={item}
            >
              <DoneIcon
                boxSize='6'
                color='secondary.base'
              />
              <Text
                fontSize='xl'
                fontWeight='medium'
              >
                {item}
              </Text>
            </ListItem>
          ))}
        </List>
      </Flex>
      <Box
        borderRadius='xl'
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
