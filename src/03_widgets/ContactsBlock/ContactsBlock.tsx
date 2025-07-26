import { EMAIL, PHONE_NUMBER, PHONE_NUMBER_SECOND } from '@/shared/lib'
import { BlockContainer, EmailIcon, PhoneIcon, SocialMediaLinks } from '@/shared/ui'
import { Link } from '@chakra-ui/next-js'
import { Flex, Heading, HStack, Text } from '@chakra-ui/react'
import ContactUsForm from './ContactUsForm'
import { FC, ReactNode } from 'react'

const contactLinkStyles = {
  fontSize: 'lg',
  fontWeight: 'medium',
  display: 'flex',
  alignItems: 'center',
  gap: 2,
}

const ContactsBlock: FC<{ children?: ReactNode; childrenUp?: boolean }> = ({
  children,
  childrenUp = true,
}) => (
  <BlockContainer
    bgColor='bg.light'
    flexDir={{ base: 'column', md: 'row' }}
    id='contacts'
    justifyContent='space-between'
  >
    <Flex
      flexDir={childrenUp ? 'column' : 'column-reverse'}
      gap='6'
      w={{ base: '100%', md: '50%' }}
    >
      {children}
      <Flex
        flexDir='column'
        gap='6'
      >
        <Heading
          fontWeight='semibold'
          size='lg'
        >
          Связь с нами
        </Heading>
        <Flex
          flexDir='column'
          gap='4'
        >
          <HStack
            alignItems={{ base: 'start', md: 'center' }}
            flexDir={{ base: 'column', md: 'row' }}
            gap={{ base: 4, md: 2 }}
          >
            <SocialMediaLinks
              gap='2'
              iconSize={10}
              w='fit-content'
              withEmail={false}
            />
            <Link
              as={Link}
              href={`tel:${PHONE_NUMBER}`}
              role='group'
              {...contactLinkStyles}
            >
              <PhoneIcon
                _groupHover={{ color: 'primary.dark' }}
                boxSize='8'
                color='primary.base'
                mr='2'
                transition='0.3s'
              />
              <Text>{`${PHONE_NUMBER} (консультация)`}</Text>
            </Link>
          </HStack>

          <Link
            as={Link}
            href={`tel:${PHONE_NUMBER_SECOND}`}
            role='group'
            {...contactLinkStyles}
          >
            <PhoneIcon
              _groupHover={{ color: 'primary.dark' }}
              boxSize='8'
              color='primary.base'
              mr='2'
              transition='0.3s'
            />
            <Text>{`${PHONE_NUMBER_SECOND} (заключение договоров)`}</Text>
          </Link>

          <Link
            as={Link}
            href={`mailto:${EMAIL}`}
            role='group'
            {...contactLinkStyles}
          >
            <EmailIcon
              _groupHover={{ color: 'primary.dark' }}
              boxSize='8'
              color='primary.base'
              mr='2'
              transition='0.3s'
            />
            {EMAIL}
          </Link>
        </Flex>
      </Flex>
    </Flex>
    <ContactUsForm />
  </BlockContainer>
)

export default ContactsBlock
