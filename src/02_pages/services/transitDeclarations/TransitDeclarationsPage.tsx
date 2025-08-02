import { baseUrl } from '@/shared/lib'
import { BlockContainer, DoneIcon } from '@/shared/ui'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Box, Flex, Heading, Highlight, List, ListItem, Text } from '@chakra-ui/react'
import {
  aboutService,
  importantPoints,
  requiredDocuments,
  servicesConditions,
} from './lib/constants'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceImportance from '@/widgets/ServiceImportance'
import { ContactsBlock } from '@/widgets/ContactsBlock'

const TransitDeclarationsPage = () => {
  return (
    <>
      <ServiceMainBlock
        description='Мы оформляем транзитные декларации Т1 и Т2, необходимые для законного перемещения товаров под таможенным контролем'
        heading={`Оформление транзитных деклараций формы Т1, Т2`}
        headingHighlight={['Т1, Т2']}
        imageSrc={`${baseUrl}/images/transit.jpg`}
      />

      <BlockContainer>
        <Heading>Что такое транзитные декларации?</Heading>

        <Text
          fontSize='xl'
          whiteSpace='pre-wrap'
        >
          <Highlight
            query={['Транзитные декларации']}
            styles={{ fontWeight: 'semibold', color: 'primary.base', whiteSpace: 'pre-wrap' }}
          >
            {`Транзитные декларации — это документы, используемые для оформления перемещения товаров через границы стран без уплаты пошлин и налогов в промежуточных точках. Они позволяют контролировать груз до его прибытия в конечную страну назначения.`}
          </Highlight>
        </Text>

        <Flex
          flexDir='column'
          gap='12'
          justifyContent='space-between'
        >
          {aboutService.map(({ heading, aboutList }) => (
            <Flex
              flexDir='column'
              key={heading}
            >
              <Heading size='md'>{heading}</Heading>
              <List
                display='flex'
                flexDir='column'
                gap='2'
                mt='6'
              >
                {aboutList.map((item) => (
                  <ListItem
                    alignItems={{ base: 'start', md: 'center' }}
                    display='flex'
                    fontSize='lg'
                    gap='4'
                    key={item}
                    whiteSpace='pre-wrap'
                  >
                    <Box
                      bgColor='primary.dark'
                      border='5px solid'
                      borderColor='primary.base'
                      borderRadius='100%'
                      maxH='5'
                      maxW='5'
                      minH='5'
                      minW='5'
                      mt={{ base: 2, md: 0 }}
                    />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Flex>
          ))}
        </Flex>
      </BlockContainer>

      <ServiceConditionsBlock
        heading='Необходимые документы для оформления транзитной декларации'
        imageSrc={`${baseUrl}/images/documents.jpg`}
        isImageOnRight={false}
        servicePoints={requiredDocuments}
      />

      <ServiceImportance
        heading='Почему с нами удобно работать?'
        importantPoints={importantPoints}
        itemTextWidth='340px'
      />

      <ContactsBlock>
        <Heading
          fontWeight='semibold'
          size='lg'
        >{`Как мы работаем`}</Heading>

        <List
          display='flex'
          flexDir='column'
          gap='2'
          mt='2'
        >
          {servicesConditions.map((text) => (
            <ListItem
              alignItems='center'
              display='flex'
              fontSize='lg'
              gap='4'
              key={text}
            >
              <DoneIcon
                boxSize='6'
                color='primary.base'
              />
              {text}
            </ListItem>
          ))}
        </List>
      </ContactsBlock>
    </>
  )
}

export default TransitDeclarationsPage
