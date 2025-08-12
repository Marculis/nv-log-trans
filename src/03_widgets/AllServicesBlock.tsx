import { baseUrl, services } from '@/shared/lib'
import { BlockContainer } from '@/shared/ui'
import { Link } from '@chakra-ui/next-js'
import { Box, Flex, Heading, Highlight } from '@chakra-ui/react'
import Image from 'next/image'
import { FC, ReactNode } from 'react'

const AllServicesBlock: FC<{ children?: ReactNode }> = ({ children }) => (
  <BlockContainer>
    {children && children}

    <Flex
      flexDir='row'
      flexWrap='wrap'
      gap='8'
      justifyContent='space-between'
    >
      {services.map(({ image, name, description, highlight, url, Icon }) => (
        <Flex
          _hover={{ shadow: 'xl' }}
          alignItems='center'
          borderRadius='xl'
          cursor='pointer'
          flexGrow='1'
          gap='8'
          h='360px'
          key={name}
          minH='fit-content'
          minW='300px'
          overflow='hidden'
          p={{ base: 4, lg: 8 }}
          position='relative'
          role='group'
          w={{ base: '100%', lg: '47%' }}
          onClick={() => window.location.replace(`${baseUrl}${url}`)}
        >
          <Link
            display='none'
            href={url}
          ></Link>
          <Box
            _groupHover={{ borderColor: 'primary.base' }}
            alignSelf='center'
            border='3px solid'
            borderColor='primary.light'
            borderRadius='full'
            p='3'
            transition='0.3s'
            w='fit-content'
          >
            <Icon
              _groupHover={{ color: 'secondary.base' }}
              boxSize={{ base: 8, md: 10 }}
              color='secondary.300'
              transition='0.3s'
            />
          </Box>
          <Heading
            _groupHover={{ color: 'secondary.medium' }}
            color='gray.100'
            fontSize={{ base: '2xl', lg: '2xl' }}
            fontWeight='semibold'
            lineHeight='normal'
            transition='0.3s'
            whiteSpace='pre-wrap'
          >
            <Highlight
              query={highlight}
              styles={{
                color: 'primary.base',
                transition: '0.3s',
                fontWeight: 'bold',
                whiteSpace: 'pre-wrap',
                _groupHover: { color: 'gray.100' },
              }}
            >
              {description}
            </Highlight>
          </Heading>
          <Image
            alt={'COMPANY'}
            loading='eager'
            objectFit='cover'
            quality={100}
            src={image}
            style={{
              zIndex: -1,
              filter: 'brightness(35%)',
            }}
            fill
          />
        </Flex>
      ))}
    </Flex>
  </BlockContainer>
)

export default AllServicesBlock
