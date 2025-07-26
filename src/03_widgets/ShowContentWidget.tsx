import { useScreenFormat } from '@/shared/lib'
import { BlockContainer } from '@/shared/ui'
import {
  Box,
  Button,
  ButtonProps,
  ContainerProps,
  Flex,
  Heading,
  ResponsiveValue,
} from '@chakra-ui/react'
import { FC, ReactElement, useMemo, useState } from 'react'

// const boxImageStyles = {
//   borderRadius: 12,
//   maxW: { base: '90%', md: '47%', lg: '48%' },
//   minH: { base: 360, sm: 480 },
//   minW: { base: 300, sm: 360, md: 320 },
//   overflow: 'hidden',
//   w: '100%',
// }

const boxImageStyles = {
  borderRadius: 12,
  maxW: { base: '90%', md: '45%', lg: '30%' },
  minH: { base: 180, sm: 320, md: 280 },
  minW: { base: 220, sm: 260, md: 180, lg: 280 },
  overflow: 'hidden',
  w: '100%',
}

interface IShowContentWidgetProps extends ContainerProps {
  heading: string
  elements: ReactElement[]
  length?: number
  buttonProps?: ButtonProps
  headingColor?: ResponsiveValue<string>
}

const ShowContentWidget: FC<IShowContentWidgetProps> = ({
  length = 6,
  heading,
  elements = [],
  buttonProps,
  headingColor = 'secondary.base',
  ...props
}) => {
  const [isShowAll, setIsShowAll] = useState(false)
  const { isMD } = useScreenFormat()
  const portionSize = isMD ? length : length / 2

  const currentPortion = useMemo(() => {
    return isShowAll ? elements : elements.slice(0, portionSize)
  }, [isShowAll, elements, portionSize])

  return (
    <BlockContainer {...props}>
      <Heading
        color={headingColor}
        fontSize={{ base: '2xl', lg: '4xl' }}
        variant='container'
      >
        {heading}
      </Heading>
      <Flex
        flexWrap='wrap'
        gap='8'
        justifyContent={{ base: 'center', md: 'space-between' }}
      >
        {currentPortion.map((content, index) => (
          <Box
            key={index}
            position='relative'
            {...boxImageStyles}
          >
            {content}
          </Box>
        ))}
      </Flex>
      <Button
        colorScheme='primary'
        onClick={() => setIsShowAll(!isShowAll)}
        {...buttonProps}
        alignSelf={{ base: 'center', md: 'start' }}
        w='fit-content'
      >
        {isShowAll ? 'Свернуть' : 'Показать все'}
      </Button>
    </BlockContainer>
  )
}

export default ShowContentWidget
