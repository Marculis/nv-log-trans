import { Flex, IconProps, Text } from '@chakra-ui/react'
import { FC } from 'react'

const CurrencyItem: FC<{ Icon: FC<IconProps>; shortName: string; sale: number; rate: number }> = ({
  Icon,
  shortName,
  sale,
  rate,
  ...props
}) => {
  return (
    <Flex
      alignItems='center'
      borderRadius='md'
      color='white'
      fontWeight='semibold'
      justifyContent='center'
      minW='fit-content'
      p='1'
      w='100%'
      {...props}
    >
      {Icon && <Icon boxSize={8} />}
      {shortName && (
        <Text
          color='currentcolor'
          ml='2'
          mr='1'
        >
          {sale > 1 && sale} {shortName} -
        </Text>
      )}
      {rate && <Text color='currentcolor'>{rate.toFixed(3)} BYN</Text>}
    </Flex>
  )
}

export default CurrencyItem
