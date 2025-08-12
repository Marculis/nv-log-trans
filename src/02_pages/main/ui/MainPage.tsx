import { FC } from 'react'
import { BlockContainer } from '@/shared/ui'
import { Box, Card, Flex, Heading, Highlight } from '@chakra-ui/react'
import { baseUrl, services } from '@/shared/lib'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Link } from '@chakra-ui/next-js'
import AllServicesBlock from '@/widgets/AllServicesBlock'

interface IMainPageProps {
  images: { src: string; alt: string }[]
  videos: string[]
}

const MAIN_HEADING_TEXT = `Таможенное оформление, логистика РБ, РФ, Европа`

const MainPage: FC<IMainPageProps> = () => {
  return (
    <>
      <ServiceMainBlock
        description='Оказываем услуги по оформлению транспортных и таможенных документов для международных перевозок в странах ЕАЭС и ЕС'
        heading={MAIN_HEADING_TEXT}
        headingHighlight={['РБ, РФ, Европа']}
      />

      <AllServicesBlock>
        <Heading
          color='gray.600'
          mb='8'
          mt='20'
          size='2xl'
          textAlign='center'
        >
          Предоставляемые услуги
        </Heading>
      </AllServicesBlock>

      <ContactsBlock childrenUp={false}>
        <Box
          borderRadius='xl'
          overflow='hidden'
        >
          <iframe
            allowFullScreen={true}
            height='300'
            loading='lazy'
            src='https://yandex.by/map-widget/v1/org/nv_logistika_i_transport/184739043623/?from=mapframe&ll=23.685061%2C52.135697&z=16.76'
            width='100%'
          />
        </Box>
      </ContactsBlock>
    </>
  )
}

export default MainPage
