import { useMediaQuery } from '@chakra-ui/react'

const useScreenFormat = () => {
  const [isSM] = useMediaQuery('(min-width: 480px)')
  const [isMD] = useMediaQuery('(min-width: 768px)')
  const [isLG] = useMediaQuery('(min-width: 992px)')
  // const [isXL] = useMediaQuery('(min-width: 1280px)')
  // const [isXXL] = useMediaQuery('(min-width: 1536px)')

  return {
    isMD,
    isSM,
    isLG,
  }
}

export default useScreenFormat
