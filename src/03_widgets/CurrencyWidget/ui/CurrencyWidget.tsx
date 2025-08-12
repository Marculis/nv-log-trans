import { Box, CloseButton, ContainerProps, Flex, Text, useDisclosure } from '@chakra-ui/react'
import { getAllCurrenciesData } from '../model/currencyModel'
import { FC, useEffect, useState } from 'react'
import { EUFlagIcon, PLFlagIcon, RUFlagIcon, USFlagIcon } from '@/shared/ui'
import CurrencyItem from './CurrencyItem'
import { AutoscrollSwiper } from '@/widgets/Sliders'
import AllCurrenciesMenu from './AllCurrenciesMenu'
import { Link } from '@chakra-ui/next-js'

const currenciesImages = { USD: USFlagIcon, EUR: EUFlagIcon, PLN: PLFlagIcon, RUB: RUFlagIcon }

const CurrencyWidget: FC<ContainerProps> = (props) => {
  const [cursWidgetData, setCursWidgetData] = useState<any[]>([])

  const { isOpen, onClose, onOpen } = useDisclosure()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCurrenciesData()

      if (data?.length) {
        const prepData = data.map(({ Cur_Abbreviation, Cur_OfficialRate, Cur_Scale }) => ({
          shortName: Cur_Abbreviation,
          rate: Cur_OfficialRate,
          sale: Cur_Scale,
          Icon: currenciesImages[Cur_Abbreviation],
        }))

        setCursWidgetData(prepData)
      }
    }

    fetchData()
  }, [])

  return (
    <Box
      cursor='default'
      h={10}
      maxW='13rem'
      position='relative'
      w='fit-content'
      onClick={() => (isOpen ? onClose() : onOpen())}
      onMouseEnter={() => !isOpen && onOpen()}
      onMouseLeave={() => isOpen && onClose()}
      {...props}
    >
      <AutoscrollSwiper
        slides={cursWidgetData.map((curDat) => (
          <CurrencyItem
            bg='gray.600'
            key={curDat.shortName}
            {...curDat}
          />
        ))}
      />
      <AllCurrenciesMenu isOpen={isOpen}>
        <Flex
          bg='primary.dark'
          flexDir='column'
          gap='3'
          p='8'
          position='relative'
        >
          <CloseButton
            alignSelf='end'
            color='white'
            display={{ base: 'block', md: 'none' }}
            position='absolute'
            onClick={() => isOpen && onClose()}
          />
          {cursWidgetData.map((curDat) => (
            <CurrencyItem
              _hover={{ bg: 'bg.light', color: 'primary.base' }}
              bg='none'
              fontSize='lg'
              justifyContent='start'
              key={curDat.shortName}
              transition='0.3s'
              w='full'
              {...curDat}
            />
          ))}
          <Text
            alignSelf='center'
            color='white'
            mt='2'
          >
            Курсы указаны по
            <Link
              color='white'
              fontSize='lg'
              fontWeight='bold'
              href='https://www.nbrb.by/statistics/rates/ratesdaily'
              ml='2'
              target='_blank'
            >
              НБРБ
            </Link>
          </Text>
        </Flex>
      </AllCurrenciesMenu>
    </Box>
  )
}

export default CurrencyWidget
