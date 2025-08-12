import { Icon, IconProps } from '@chakra-ui/react'

const RUFlagIcon = (props: IconProps) => (
  <Icon
    color='currentColor'
    fill='none'
    height='100%'
    viewBox='0 0 640 480'
    width='100%'
    {...props}
  >
    <path
      d='M0 0h640v160H0z'
      fill='#fff'
    />
    <path
      d='M0 160h640v160H0z'
      fill='#0039a6'
    />
    <path
      d='M0 320h640v160H0z'
      fill='#d52b1e'
    />
  </Icon>
)

export default RUFlagIcon
