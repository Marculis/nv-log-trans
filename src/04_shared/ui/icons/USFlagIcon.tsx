import { Icon, IconProps } from '@chakra-ui/react'

const USFlagIcon = (props: IconProps) => (
  <Icon
    color='currentColor'
    fill='none'
    height='100%'
    viewBox='0 0 640 480'
    width='100%'
    {...props}
  >
    <path
      d='M0 0h640v480H0'
      fill='#bd3d44'
    />
    <path
      d='M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640'
      stroke='#fff'
      stroke-width='37'
    />
    <path
      d='M0 0h364.8v258.5H0'
      fill='#192f5d'
    />
    <marker
      id='us-a'
      markerHeight='30'
      markerWidth='30'
    >
      <path
        d='m14 0 9 27L0 10h28L5 27z'
        fill='#fff'
      />
    </marker>
    <path
      d='m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z'
      fill='none'
      marker-mid='url(#us-a)'
    />
  </Icon>
)

export default USFlagIcon
