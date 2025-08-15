import { COMPANY } from '@/shared/lib'
import { BlockContainer, MetaContainer } from '@/shared/ui'
import AllServicesBlock from '@/widgets/AllServicesBlock'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import ServiceImportance from '@/widgets/ServiceImportance'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

const ServicesPage = () => {
  return (
    <>
      <MetaContainer title={`Услуги таможни и логистики - ${COMPANY}`} />

      {/* <BlockContainer bg='gray.700'>
        <Flex
          borderRadius='xl'
          color='gray.100'
          flexDir='column'
          gap='8'
          p='24'
        >
          <Heading
            fontWeight='semibold'
            size='3xl'
            textAlign='center'
            whiteSpace='pre-wrap'
          >
            {COMPANY}
          </Heading>
          <Text
            color='currentColor'
            fontSize='2.5rem'
            lineHeight='normal'
          >
            Надежное оформление логистических документов и таможенных деклараций РБ, РФ, ЕС
          </Text>
        </Flex>
      </BlockContainer> */}

      <AllServicesBlock>
        <Heading
          color='gray.600'
          size='2xl'
          textAlign='center'
        >
          Список оказываемых услуг:
        </Heading>
      </AllServicesBlock>

      <ServiceImportance itemTextWidth='360px' />

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

export default ServicesPage
