import {
  ADDRESS_URL,
  EMAIL,
  baseUrl,
  PHONE_NUMBER,
  PHONE_NUMBER_SECOND,
  useScreenFormat,
} from '@/shared/lib'
import { BlockContainer, SocialMediaLinks } from '@/shared/ui'
import { Link } from '@chakra-ui/next-js'
import { Flex, Heading, HStack, VStack } from '@chakra-ui/react'
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
      flexDir={{ base: 'column-reverse', md: 'row' }}
      gap={{ base: 12, md: 0 }}
      justifyContent='space-between'
    >
      <VStack
        alignItems={{ base: 'center', md: 'flex-start' }}
        // alignSelf={{ base: 'center', md: 'start' }}
        gap={{ base: 4, md: 4 }}
        w='fit-content'
      >
        <SocialMediaLinks
          alignSelf={{ base: 'center', md: 'start' }}
          hoverColor='primary.base'
          iconSize={{ base: 10, md: 8 }}
          justifyContent={{ base: 'center', md: 'space-between' }}
          variant='gray.50'
          w={{ base: '100%', md: 'fit-content' }}
          withEmail={false}
        />
        <Link
          href={`mailto:${EMAIL}`}
          textAlign='center'
          {...buttonLinkStyle}
        >
          {EMAIL}
        </Link>
        <HStack>
          <Link
            as={Link}
            href={`tel:${PHONE_NUMBER}`}
            role='group'
            textAlign='center'
            {...buttonLinkStyle}
          >
            {`${PHONE_NUMBER} - консультация`}
          </Link>
        </HStack>

        <Link
          href={`tel:${PHONE_NUMBER_SECOND}`}
          textAlign='center'
          {...buttonLinkStyle}
        >
          {`${PHONE_NUMBER_SECOND} - заключение договоров`}
        </Link>
        <Link
          href={ADDRESS_URL}
          textAlign='center'
          {...buttonLinkStyle}
        >
          Брест, ул. Красногвардейская {!isSM && <br />} 150/1-7 офис 4
        </Link>
      </VStack>

      <VStack gap='8'>
        <Flex
          alignItems='center'
          gap='8'
          w='fit-content'
        >
          <Image
            alt={'alt'}
            height='70'
            loading='eager'
            priority={true}
            src={`${baseUrl}/icons/logo-16.svg`}
            width='70'
          />
          <Heading
            color='gray.50'
            fontWeight='medium'
            minW='fit-content'
            textAlign='center'
            whiteSpace='pre-wrap'
          >
            {'НВ Логистика\nи транспорт'}
          </Heading>
        </Flex>
      </VStack>
    </BlockContainer>
  )
}

export default Footer
