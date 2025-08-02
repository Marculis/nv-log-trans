import { Icon } from '@chakra-ui/react'

const UnsuccessRouteIcon = ({ ...props }) => (
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
    <path d='M15 2L21 8M21 2L15 8' />
    <circle
      cx='6'
      cy='19'
      r='3'
    />
    <path d='M12 5H8.5C6.567 5 5 6.567 5 8.5C5 10.433 6.567 12 8.5 12H15.5C17.433 12 19 13.567 19 15.5C19 17.433 17.433 19 15.5 19H12' />
  </Icon>
)

export default UnsuccessRouteIcon
