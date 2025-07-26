import { defineStyleConfig } from '@chakra-ui/react'

const baseStyle = {
  minW: { base: 'full', '2xl': 'container.xl' },
  display: 'flex',
  my: { base: '4', md: '12' },
  px: { base: 4, md: 10, '2xl': 0 },
}

export const containerTheme = defineStyleConfig({ baseStyle })
