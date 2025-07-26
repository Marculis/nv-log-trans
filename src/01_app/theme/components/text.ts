import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const defaultVariant = defineStyle({
  color: 'text.base',
})

export const textTheme = defineStyleConfig({
  variants: { default: defaultVariant },
  defaultProps: {
    variant: 'default',
  },
})
