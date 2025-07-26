import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/commissioner'
import { colors } from './colors'
import components from './components'

const theme = extendTheme({
  fonts: {
    body: `'Commissioner Variable', sans-serif`,
  },
  colors,
  components,
  radii: {
    none: '0',
    sm: '0.1rem',
    base: '0.125rem',
    md: '0.25rem',
    lg: '0.375rem',
    xl: '0.5rem',
    '2xl': '0.75rem',
    '3xl': '1rem',
    full: '9999px',
  },
})

export default theme
