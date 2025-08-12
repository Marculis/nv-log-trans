import { Menu, MenuButton, MenuList } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

const AllCurrenciesMenu: FC<{ isOpen: boolean; children: ReactNode }> = ({ children, isOpen }) => {
  return (
    <Menu isOpen={isOpen}>
      <MenuButton />
      <MenuList
        borderRadius='8'
        borderWidth={0}
        overflow='hidden'
        py='0'
        rootProps={{ w: '100%' }}
      >
        {children}
      </MenuList>
    </Menu>
  )
}

export default AllCurrenciesMenu
