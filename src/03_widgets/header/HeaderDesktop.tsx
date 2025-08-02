import { EMAIL, baseUrl, PHONE_NUMBER, PHONE_NUMBER_SECOND } from '@/shared/lib'
import { BlockContainer, SocialMediaLinks } from '@/shared/ui'
import { Link } from '@chakra-ui/next-js'
import { Flex, Button } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ServicesButton from './ServicesButton'

const phoneButtonStyles = {
  _hover: { bg: 'none', color: 'secondary.medium' },
  color: 'gray.100',
  justifyContent: 'center',
  size: { base: 'sm', lg: 'md' },
  fontWeight: 'medium',
}

const pagesLinksStyles = {
  _hover: { color: 'primary.base' },
  color: 'primary.dark',
  fontSize: '1.5rem',
  fontWeight: 'semibold',
}

const Header = () => {
  const { pathname } = useRouter()
  const isMain = pathname === '/'

  return (
    <>
      <BlockContainer
        alignItems='center'
        bgColor='primary.dark'
        flexDir='row'
        h='3rem'
        justifyContent='space-between'
        py='1'
      >
        <Button
          bg='bg.light'
          colorScheme='white'
          size='sm'
          variant='outline'
        >
          RU^
        </Button>
        <Flex
          alignItems='center'
          gap='8'
        >
          <Link
            as={Link}
            href={`mailto:${EMAIL}`}
            {...phoneButtonStyles}
          >
            {EMAIL}
          </Link>

          <Link
            as={Link}
            href={`tel:${PHONE_NUMBER}`}
            {...phoneButtonStyles}
          >
            {`${PHONE_NUMBER} - консультация`}
          </Link>

          <Link
            as={Link}
            href={`tel:${PHONE_NUMBER_SECOND}`}
            {...phoneButtonStyles}
          >
            {`${PHONE_NUMBER_SECOND} - заключение договоров`}
          </Link>
          <SocialMediaLinks
            alignSelf='end'
            gap='2'
            w='fit-content'
            withEmail={false}
          />
        </Flex>
      </BlockContainer>
      <BlockContainer
        alignItems='center'
        as='header'
        bgColor='bg.light'
        flexDir='row'
        gap='2'
        h={'4rem'}
        justifyContent='space-between'
        position='sticky'
        py='0'
        top={0}
        transition='0.3s'
        w='100%'
        zIndex='sticky'
      >
        <Link
          _hover={{ filter: 'opacity(80%)' }}
          h='3rem'
          href={isMain ? '' : '/'}
          position='relative'
          w='3rem'
        >
          <Image
            alt={'alt'}
            loading='eager'
            objectFit='contain'
            priority={true}
            src={`${baseUrl}/icons/logo-nv.png`}
            fill
          />
        </Link>
        <Flex gap='8'>
          <Link
            {...pagesLinksStyles}
            href='about'
          >
            О компании
          </Link>
          <ServicesButton linkStyles={pagesLinksStyles} />
          <Link
            {...pagesLinksStyles}
            href='#contacts'
          >
            Контакты
          </Link>
        </Flex>
      </BlockContainer>
    </>
  )
}

export default Header
