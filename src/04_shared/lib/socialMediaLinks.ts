import {
  EmailIcon,
  EmailIconColor,
  TelegramIcon,
  TelegramIconColor,
  ViberIcon,
  ViberIconColor,
} from '@/shared/ui/icons'
import { EMAIL, VIBER, TELEGRAM } from '../lib'
import { MediaLinkVariantType } from '../types'

interface LinksListInterface {
  variant: MediaLinkVariantType
  withEmail?: boolean
}

const socialMediaLinks = ({ variant, withEmail = true }: LinksListInterface) => {
  const list = [
    {
      title: 'Telegram',
      href: TELEGRAM,
      Icon: variant === 'color' ? TelegramIconColor : TelegramIcon,
    },

    {
      title: 'Viber',
      href: VIBER,
      Icon: variant === 'color' ? ViberIconColor : ViberIcon,
    },
  ]

  if (withEmail)
    list.unshift({
      title: 'Email',
      href: `mailto: ${EMAIL}`,
      Icon: variant === 'color' ? EmailIconColor : EmailIcon,
    })

  return list
}

export default socialMediaLinks
