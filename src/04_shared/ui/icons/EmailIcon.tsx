import { Icon } from '@chakra-ui/react'

const EmailIcon = ({ ...props }) => (
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
    <path d='M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7' />
    <rect
      height='14'
      rx='2'
      width='18'
      x='3'
      y='5'
    />
  </Icon>
)

export default EmailIcon
