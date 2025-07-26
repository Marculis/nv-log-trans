import { ContainerProps, HStack, ResponsiveValue } from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'
import { MediaLinkVariantType } from '../types'
import { socialMediaLinks } from '../lib'

interface ISocialMediaLinksProps extends ContainerProps {
  variant?: MediaLinkVariantType
  withEmail?: boolean
  iconSize?: ResponsiveValue<number>
  hoverColor?: ResponsiveValue<string>
}

const SocialMediaLinks: FC<ISocialMediaLinksProps> = ({
  variant = 'color',
  withEmail = true,
  iconSize = 8,
  hoverColor,
  ...props
}) => {
  return (
    <HStack
      gap='2'
      justifyContent='space-between'
      {...props}
    >
      {socialMediaLinks({ variant, withEmail }).map(({ Icon, href, title }) => (
        <Link
          href={href}
          key={title}
          target='_blank'
        >
          <Icon
            _hover={{ filter: 'brightness(85%)', color: hoverColor }}
            boxSize={iconSize}
            color={variant}
            transition='0.2s'
          />
        </Link>
      ))}
    </HStack>
  )
}

export default SocialMediaLinks
