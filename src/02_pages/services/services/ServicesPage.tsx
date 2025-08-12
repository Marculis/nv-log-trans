import { BlockContainer } from '@/shared/ui'
import AllServicesBlock from '@/widgets/AllServicesBlock'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import { Box, Heading } from '@chakra-ui/react'

const ServicesPage = () => {
  return (
    <>
      <BlockContainer>
        <Heading>Все услуги </Heading>
      </BlockContainer>
      <AllServicesBlock />
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
