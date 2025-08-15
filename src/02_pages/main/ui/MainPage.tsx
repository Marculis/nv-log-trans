import { FC } from 'react'
import { MetaContainer } from '@/shared/ui'
import { Box, Heading } from '@chakra-ui/react'
import { baseUrl } from '@/shared/lib'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import AllServicesBlock from '@/widgets/AllServicesBlock'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import { servicePoints } from './lib/constants'

interface IMainPageProps {
  images: { src: string; alt: string }[]
  videos: string[]
}

const MAIN_HEADING_TEXT = `Таможенное оформление, логистика РБ, РФ, Европа`

const MainPage: FC<IMainPageProps> = () => {
  return (
    <>
      <MetaContainer />
      <ServiceMainBlock
        description='Оказываем услуги по оформлению транспортных и таможенных документов для международных перевозок в странах ЕАЭС и ЕС'
        heading={MAIN_HEADING_TEXT}
        headingHighlight={['РБ, РФ, Европа']}
      />

      <ServiceConditionsBlock
        heading='Что мы предлагаем:'
        imageSrc={`${baseUrl}/images/documents-4.jpg`}
        servicePoints={servicePoints}
      />

      <AllServicesBlock>
        <Heading
          color='gray.600'
          mb='8'
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
