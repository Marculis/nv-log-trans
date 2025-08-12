import { Icon, IconProps } from '@chakra-ui/react'

const EUFlagIcon = (props: IconProps) => (
  <Icon
    color='currentColor'
    fill='none'
    height='100%'
    viewBox='0 0 640 480'
    width='100%'
    {...props}
  >
    <defs>
      <g id='eu-d'>
        <g id='eu-b'>
          <path
            d='m0-1-.3 1 .5.1z'
            id='eu-a'
          />
          <use
            transform='scale(-1 1)'
            xlinkHref='#eu-a'
          />
        </g>
        <g id='eu-c'>
          <use
            transform='rotate(72)'
            xlinkHref='#eu-b'
          />
          <use
            transform='rotate(144)'
            xlinkHref='#eu-b'
          />
        </g>
        <use
          transform='scale(-1 1)'
          xlinkHref='#eu-c'
        />
      </g>
    </defs>
    <path
      d='M0 0h640v480H0z'
      fill='#039'
    />
    <g
      fill='#fc0'
      transform='translate(320 242.3)scale(23.7037)'
    >
      <use
        height='100%'
        width='100%'
        xlinkHref='#eu-d'
        y='-6'
      />
      <use
        height='100%'
        width='100%'
        xlinkHref='#eu-d'
        y='6'
      />
      <g id='eu-e'>
        <use
          height='100%'
          width='100%'
          x='-6'
          xlinkHref='#eu-d'
        />
        <use
          height='100%'
          transform='rotate(-144 -2.3 -2.1)'
          width='100%'
          xlinkHref='#eu-d'
        />
        <use
          height='100%'
          transform='rotate(144 -2.1 -2.3)'
          width='100%'
          xlinkHref='#eu-d'
        />
        <use
          height='100%'
          transform='rotate(72 -4.7 -2)'
          width='100%'
          xlinkHref='#eu-d'
        />
        <use
          height='100%'
          transform='rotate(72 -5 .5)'
          width='100%'
          xlinkHref='#eu-d'
        />
      </g>
      <use
        height='100%'
        transform='scale(-1 1)'
        width='100%'
        xlinkHref='#eu-e'
      />
    </g>
  </Icon>
)

export default EUFlagIcon
