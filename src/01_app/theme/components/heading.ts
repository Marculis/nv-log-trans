import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const container = defineStyle({
  color: 'white',
  fontWeight: 'medium',
  textAlign: 'center',
})

export const headingTheme = defineStyleConfig({
  variants: { container },
})
