import { baseUrl, PHONE_NUMBER, PHONE_NUMBER_SECOND } from '@/shared/lib'
import { BlockContainer, PhoneIcon, SocialMediaLinks } from '@/shared/ui'
import { HamburgerIcon, PhoneIcon as PhoneIconChakra } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/next-js'
import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ServicesButtonAccordion from './ServicesButtonAccordion'
import { CurrencyWidget } from '../CurrencyWidget'

const HeaderMobile = () => {
  const { pathname } = useRouter()
  const isMain = pathname === '/'
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <BlockContainer
      alignItems='center'
      as='header'
      bgColor='bg.light'
      flexDir='row'
      gap='0'
      h={14}
      justifyContent='space-between'
      position='sticky'
      py='0'
      top={0}
      zIndex='sticky'
    >
      <Link
        h='35px'
        href={isMain ? '' : '/'}
        position='relative'
        w='35px'
      >
        <Image
          alt={'SK-line import logo'}
          loading='eager'
          objectFit='contain'
          priority={true}
          src={`${baseUrl}/icons/logo-nv.png`}
          fill
        />
      </Link>
      <Flex
        alignItems='center'
        gap='4'
      >
        <Link href={`tel:${PHONE_NUMBER}`}>
          <PhoneIconChakra color='secondary.base' />
        </Link>
        <Menu
          gutter={4}
          isLazy={true}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
        >
          <MenuButton
            aria-label='Options'
            as={IconButton}
            icon={
              <HamburgerIcon
                boxSize={5}
                color='secondary.base'
              />
            }
            variant='unstyled'
          />
          <MenuList
            border='none'
            borderRadius='none'
            fontSize='lg'
            fontWeight='medium'
            maxH='90vh'
            overflowY='auto'
            py='0'
            top='-5px'
            w='100vw'
          >
            <MenuItem
              as={Link}
              href={`/about`}
            >
              О компании
            </MenuItem>

            <ServicesButtonAccordion onClose={onClose} />

            <MenuItem
              as={Link}
              href={`#contacts`}
            >
              Контакты
            </MenuItem>

            <MenuItem
              as={Link}
              href={`tel:${PHONE_NUMBER}`}
              lineHeight='1rem'
              mt='12'
            >
              <PhoneIcon
                boxSize='8'
                color='primary.base'
                mr='2'
              />
              {`${PHONE_NUMBER} - консультация`}
            </MenuItem>

            <MenuItem
              as={Link}
              href={`tel:${PHONE_NUMBER_SECOND}`}
              lineHeight='1rem'
              mt='2'
            >
              <PhoneIcon
                boxSize='8'
                color='primary.base'
                mr='2'
              />
              {`${PHONE_NUMBER_SECOND} - заключение договоров`}
            </MenuItem>
            <MenuItem closeOnSelect={false}>
              <CurrencyWidget
                maxW='100%'
                my='2'
              />
            </MenuItem>
            <MenuItem
              bgColor='primary.dark'
              h='12'
            >
              <SocialMediaLinks
                iconSize={7}
                justifyContent='space-around'
                variant='white'
                w='100%'
              />
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </BlockContainer>
  )
}

export default HeaderMobile
