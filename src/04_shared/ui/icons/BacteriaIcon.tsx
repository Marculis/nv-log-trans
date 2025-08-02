import { Icon } from '@chakra-ui/react'

const BacteriaIcon = ({ ...props }) => (
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
    <circle
      cx='12'
      cy='12'
      r='10'
    />
    <circle
      cx='15'
      cy='8'
      r='2'
    />
    <path d='M6 12.5L6.20943 12.735C6.59836 13.1714 7.25402 13.052 7.5 12.5C7.74598 11.948 8.40164 11.8286 8.79057 12.265L9 12.5' />
    <path d='M15.8413 18L15.9521 17.6549C16.1579 17.014 15.6742 16.4273 15 16.5C14.3258 16.5727 13.8421 15.986 14.0479 15.3451L14.1587 15' />
    <path d='M19.009 13H19' />
    <path d='M9.00896 17H9' />
    <path d='M8.00896 8H8' />
  </Icon>
)

export default BacteriaIcon
