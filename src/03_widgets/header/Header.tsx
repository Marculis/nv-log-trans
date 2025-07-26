import { useScreenFormat } from '@/shared/lib'
import dynamic from 'next/dynamic'

const HeaderDesktop = dynamic(() => import('./HeaderDesktop'))
const HeaderMobile = dynamic(() => import('./HeaderMobile'))

const Header = () => {
  const { isMD } = useScreenFormat()

  if (isMD) {
    return <HeaderDesktop />
  }
  return <HeaderMobile />
}

export default Header
