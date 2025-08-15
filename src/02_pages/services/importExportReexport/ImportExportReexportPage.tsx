import { baseUrl, COMPANY } from '@/shared/lib'
import { BlockContainer, DoneIcon, MetaContainer, WhatIsBlock } from '@/shared/ui'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Flex, Heading, List, ListItem } from '@chakra-ui/react'
import { documentsRequired, whatIsBlockTexts } from './lib/constants'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import ServiceImportance from '@/widgets/ServiceImportance'

const ImportExportReexportPage = () => {
  return (
    <>
      <MetaContainer title={`Импорт. Экспорт. Реэкспорт - ${COMPANY}`} />

      <ServiceMainBlock
        description='Оформляем импорт, экспорт и реэкспорт товаров в Республике Беларусь - быстро, точно и с соблюдением всех требований'
        heading={`Импорт. Экспорт. Реэкспорт.`}
        headingHighlight={['импорт, экспорт и реэкспорт']}
        imageSrc={`${baseUrl}/images/import-export.jpg`}
      />

      <WhatIsBlock {...whatIsBlockTexts} />

      <BlockContainer>
        <Heading textAlign='center'>Какие документы нужны для оформления?</Heading>
        <Flex
          flexWrap='wrap'
          gap='8'
          justifyContent={{ base: 'center', xl: 'space-between' }}
        >
          {documentsRequired.map(({ name, documentsList }) => (
            <Flex
              flexDir='column'
              key={name}
              w={{ base: '100%', md: '45%', xl: '31%' }}
            >
              <Heading fontSize='2xl'> {name}</Heading>
              <List>
                {documentsList.map((text) => (
                  <ListItem
                    alignItems='center'
                    display='flex'
                    fontSize='lg'
                    fontWeight='medium'
                    gap='3'
                    key={text}
                    lineHeight='normal'
                    mt='3'
                  >
                    <DoneIcon
                      boxSize={4}
                      color='primary.base'
                    />
                    {text}
                  </ListItem>
                ))}
              </List>
            </Flex>
          ))}
        </Flex>
      </BlockContainer>

      <ServiceImportance />

      <ContactsBlock></ContactsBlock>
    </>
  )
}

export default ImportExportReexportPage
