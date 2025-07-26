import { TELEGRAM } from '@/shared/lib'
import { TelegramCicleIcon } from '@/shared/ui'
import { IconButton, keyframes } from '@chakra-ui/react'
import Link from 'next/link'

const TelegramButton = () => {
  const shadow = keyframes`
    0% {
    box-shadow: 0 0 2px 0 #4faee2;
    }
    50% {
    box-shadow: 0 0 20px 10px #4faee2;
    }
    100% {
    box-shadow: 0 0 2px 0 #4faee2;
    }
    `

  return (
    <IconButton
      _hover={{
        background: '#4faee2',
      }}
      animation={`${shadow} infinite 2.5s linear`}
      aria-label='Перейти в телеграм'
      as={Link}
      background='#1c92d2'
      border='none'
      borderRadius='50%'
      bottom={{ base: 5, md: 10 }}
      h='fit-content'
      href={TELEGRAM}
      p='0.5'
      position='fixed'
      right={{ base: 5, md: 10 }}
      role='group'
      target='_blank'
      transition='0.3s'
      variant='unstyled'
      w='fit-content'
      zIndex='sticky'
    >
      <TelegramCicleIcon
        _groupHover={{
          color: 'white',
        }}
        boxSize={12}
        color='bg.light'
        transition='0.3s'
      />
    </IconButton>
  )
}

export default TelegramButton
