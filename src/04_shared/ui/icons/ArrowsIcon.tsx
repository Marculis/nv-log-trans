import { Icon } from '@chakra-ui/react'

const ArrowsIcon = ({ ...props }) => (
  <Icon
    color='currentColor'
    fill='none'
    height='100%'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='1.5'
    viewBox='0 0 24 24'
    width='100%'
    {...props}
  >
    <path d='M7 4V20' />
    <path d='M17 19L17 4' />
    <path d='M10 6.99998C10 6.99998 7.79053 4.00001 6.99998 4C6.20942 3.99999 4 7 4 7' />
    <path d='M20 17C20 17 17.7905 20 17 20C16.2094 20 14 17 14 17' />
  </Icon>
)

export default ArrowsIcon
