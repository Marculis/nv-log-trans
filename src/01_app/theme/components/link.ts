import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const defaultVariant = defineStyle({
  color: 'text.base',
  transition: '0.3s',
  _hover: {
    color: 'text.muted',
    textDecoration: 'none',
  },
})

const primary = defineStyle({
  color: 'primary.base',
  fontSize: 'sm',
  fontWeight: 'medium',
  transition: '0.3s',
  _hover: {
    color: 'primary.dark',
    textDecoration: 'none',
  },
})

export const linkTheme = defineStyleConfig({
  variants: { default: defaultVariant, primary },
  defaultProps: {
    variant: 'default',
  },
})
