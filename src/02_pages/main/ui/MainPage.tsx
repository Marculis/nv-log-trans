import { FC } from 'react'
import { BlockContainer } from '@/shared/ui'
import { Box, Card, Flex, Heading, Highlight } from '@chakra-ui/react'
import { ghPagesUrl, services } from '@/shared/lib'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Link } from '@chakra-ui/next-js'

interface IMainPageProps {
  images: { src: string; alt: string }[]
  videos: string[]
}

const MAIN_HEADING_TEXT = `Таможенное оформление, логистика РБ, РФ, Европа`

const MainPage: FC<IMainPageProps> = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  const baseUrl2 = process.env.NEXT_PUBLIC_BASE_URL2
  console.log(baseUrl, 'BASE_URL')
  console.log(baseUrl2, 'BASE_URL2')

  return (
    <>
      <ServiceMainBlock
        description='Оказываем услуги по оформлению транспортных и таможенных документов для международных перевозок в странах ЕАЭС и ЕС'
        heading={MAIN_HEADING_TEXT}
        headingHighlight={['РБ, РФ, Европа']}
      />

      <BlockContainer id='services'>
        <Heading
          color='gray.600'
          size='2xl'
          textAlign='center'
        >
          Предоставляемые услуги
        </Heading>
        <Flex
          alignItems='center'
          flexDir='column'
          gap='8'
        >
          {services.map(({ description, highlight, Icon, url }) => (
            <Card
              _hover={{ shadow: 'lg', bg: 'bg.light' }}
              alignItems='center'
              borderRadius='xl'
              cursor='pointer'
              flexDir='row'
              gap='6'
              key={description}
              p='4'
              role='group'
              shadow='md'
              transition='0.3s'
              w={{ base: '100%', md: '80%' }}
              onClick={() => window.location.replace(`${ghPagesUrl}${url}`)}
            >
              <Link
                display='none'
                href={url}
              ></Link>
              <Box
                _groupHover={{ borderColor: 'primary.base' }}
                alignSelf='center'
                border='2px solid'
                borderColor='primary.light'
                borderRadius='full'
                p='3'
                transition='0.3s'
                w='fit-content'
              >
                <Icon
                  _groupHover={{ color: 'secondary.base' }}
                  boxSize={{ base: 8, md: 10 }}
                  color='secondary.200'
                  transition='0.3s'
                />
              </Box>
              <Heading
                _groupHover={{ color: 'secondary.medium' }}
                color='gray.600'
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight='semibold'
                lineHeight='normal'
                transition='0.3s'
                whiteSpace='pre-wrap'
              >
                <Highlight
                  query={highlight}
                  styles={{
                    color: 'primary.base',
                    fontWeight: 'bold',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {description}
                </Highlight>
              </Heading>
            </Card>
          ))}
        </Flex>
      </BlockContainer>
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
