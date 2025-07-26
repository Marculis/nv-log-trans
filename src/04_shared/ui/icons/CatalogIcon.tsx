import { Icon, IconProps } from '@chakra-ui/react'

const CatalogIcon = (props: IconProps) => (
  <Icon
    fill='none'
    height='100%'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    viewBox='0 0 24 24'
    width='100%'
    {...props}
  >
    <path
      d='M0 0h24v24H0z'
      fill='none'
      stroke='none'
    />
    <path d='M4 4h6v6h-6z' />
    <path d='M14 4h6v6h-6z' />
    <path d='M4 14h6v6h-6z' />
    <path d='M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
  </Icon>
)

export default CatalogIcon
