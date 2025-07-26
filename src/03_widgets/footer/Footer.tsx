import {
  ADDRESS_URL,
  EMAIL,
  PHONE_NUMBER,
  PHONE_NUMBER_SECOND,
  useScreenFormat,
} from '@/shared/lib'
import { BlockContainer, PhoneIcon, SocialMediaLinks } from '@/shared/ui'
import { Link } from '@chakra-ui/next-js'
import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

const buttonLinkStyle = {
  color: 'gray.50',
  target: '_blank',
  _hover: {
    fontWeight: 'normal',
    color: 'primary.base',
  },
}

const Footer = () => {
  const { isSM } = useScreenFormat()

  return (
    <BlockContainer
      alignItems='center'
      as='footer'
      bgColor='secondary.dark'
      color='gray.50'
      flexDir={{ base: 'column', md: 'row' }}
      gap={{ base: 12, md: 0 }}
      justifyContent='space-between'
    >
      <VStack gap='8'>
        <Flex
          alignItems='center'
          gap='4'
          w='fit-content'
          // w={{ base: '100%', md: '35%' }}
        >
          <Image
            alt={'alt'}
            height='60'
            loading='eager'
            priority={true}
            src='/icons/logo-nv.png'
            width='60'
          />
          <Heading
            color='gray.50'
            fontWeight='medium'
            minW='fit-content'
          >
            {'НВ-Лог Транс'}
          </Heading>
        </Flex>
        <Text
          color='gray.50'
          fontSize='xl'
          fontWeight='medium'
        >
          {'Логистика - Транспорт - Таможенное оформление'}
        </Text>
      </VStack>

      <VStack
        alignItems={{ base: 'center', md: 'flex-end' }}
        alignSelf={{ base: 'center', md: 'end' }}
        gap={{ base: 4, md: 4 }}
        p={{ base: 4, md: 0 }}
        w='fit-content'
      >
        <SocialMediaLinks
          alignSelf={{ base: 'center', md: 'end' }}
          hoverColor='primary.base'
          iconSize={{ base: 10, md: 8 }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          variant='gray.50'
          w={{ base: '100%', md: 'fit-content' }}
          withEmail={false}
        />
        <Link
          href={`mailto:${EMAIL}`}
          {...buttonLinkStyle}
        >
          {EMAIL}
        </Link>
        <HStack>
          <Link
            as={Link}
            href={`tel:${PHONE_NUMBER}`}
            role='group'
            {...buttonLinkStyle}
          >
            {`${PHONE_NUMBER} - консультация`}
          </Link>
        </HStack>

        <Link
          href={`tel:${PHONE_NUMBER_SECOND}`}
          {...buttonLinkStyle}
        >
          {`${PHONE_NUMBER_SECOND} - заключение договоров`}
        </Link>
        <Link
          href={ADDRESS_URL}
          {...buttonLinkStyle}
        >
          Брест, ул. Красногвардейская {!isSM && <br />} 150/1-7 офис 4
        </Link>
      </VStack>
    </BlockContainer>
  )
}

export default Footer
