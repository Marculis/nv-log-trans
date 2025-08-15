import { baseUrl, COMPANY } from '@/shared/lib'
import { DoneIcon, MetaContainer, WhatIsBlock } from '@/shared/ui'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Box, Flex, Heading, List, ListItem } from '@chakra-ui/react'
import {
  aboutService,
  requiredDocuments,
  servicesConditions,
  whatIsBlockTexts,
} from './lib/constants'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import ServiceImportance from '@/widgets/ServiceImportance'

const TransitDeclarationsPage = () => {
  return (
    <>
      <MetaContainer title={`Транзитные декларации Т1 Т2 - ${COMPANY}`} />

      <ServiceMainBlock
        description='Мы оформляем транзитные декларации Т1 и Т2, необходимые для законного перемещения товаров под таможенным контролем'
        heading={`Оформление транзитных деклараций формы Т1, Т2`}
        headingHighlight={['Т1, Т2']}
        imageSrc={`${baseUrl}/images/transit.jpg`}
      />

      <WhatIsBlock {...whatIsBlockTexts}>
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
      </WhatIsBlock>

      <ServiceConditionsBlock
        heading='Необходимые документы для оформления транзитной декларации'
        imageSrc={`${baseUrl}/images/documents.jpg`}
        isImageOnRight={false}
        servicePoints={requiredDocuments}
      />

      <ServiceImportance itemTextWidth='340px' />

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
