import { Icon, IconProps } from '@chakra-ui/react'

const PLFlagIcon = (props: IconProps) => (
  <Icon
    color='currentColor'
    fill='none'
    height='100%'
    viewBox='0 0 640 480'
    width='100%'
    {...props}
  >
    <g fill-rule='evenodd'>
      <path
        d='M640 480H0V0h640z'
        fill='#fff'
      />
      <path
        d='M640 480H0V240h640z'
        fill='#dc143c'
      />
    </g>
  </Icon>
)

export default PLFlagIcon
