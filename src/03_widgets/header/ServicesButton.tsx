import { services } from '@/shared/lib'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/next-js'
import { Button, Flex, Menu, MenuButton, MenuItem, MenuList, useDisclosure } from '@chakra-ui/react'
import { FC } from 'react'

const ServicesButton: FC<{ linkStyles?: any }> = ({ linkStyles }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex alignItems='center'>
      <Link
        href='/services'
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        {...linkStyles}
      >
        Наши услуги
      </Link>
      <Menu
        autoSelect={false}
        gutter={0}
        isOpen={isOpen}
        matchWidth
      >
        <MenuButton
          _hover={{
            color: 'primary.base',
          }}
          as={Button}
          px='0'
          size='sm'
          variant='unstyled'
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <ChevronDownIcon
            boxSize='6'
            transform={`rotate(${isOpen ? '180deg' : '0deg'})`}
            transition='0.3s'
          />
        </MenuButton>
        <MenuList
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          {services.map(({ url, name }) => (
            <MenuItem
              as={Link}
              fontSize='lg'
              fontWeight='medium'
              href={url}
              key={name}
            >
              {name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Flex>
  )
}

export default ServicesButton
