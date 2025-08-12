import { baseUrl } from '@/shared/lib'
import { BlockContainer, DoneIcon } from '@/shared/ui'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Flex, Heading, Highlight, List, ListItem, Text } from '@chakra-ui/react'
import { documentsRequired, importantPoints } from './lib/constants'
import ServiceImportance from '@/widgets/ServiceImportance'
import { ContactsBlock } from '@/widgets/ContactsBlock'

const ImportExportReexportPage = () => {
  return (
    <>
      <ServiceMainBlock
        description='Оформляем импорт, экспорт и реэкспорт товаров в Республике Беларусь - быстро, точно и с соблюдением всех требований'
        heading={`Импорт. Экспорт. Реэкспорт.`}
        headingHighlight={['импорт, экспорт и реэкспорт']}
        imageSrc={`${baseUrl}/images/import-export.jpg`}
      />
      <BlockContainer>
        <Heading> Что такое импорт, экспорт и реэкспорт?</Heading>

        <Text
          fontSize='xl'
          whiteSpace='pre-wrap'
        >
          <Highlight
            query={['Импорт', 'Экспорт', 'Реэкспорт']}
            styles={{ fontWeight: 'semibold', color: 'primary.base', whiteSpace: 'pre-wrap' }}
          >
            {`Импорт - ввоз товаров на таможенную территорию Республики Беларусь с целью их использования, продажи или переработки.

Экспорт - вывоз товаров с территории РБ за границу, чаще всего для продажи или передачи.

Реэкспорт - вывоз товаров, ранее ввезённых в РБ, обратно за пределы ЕАЭС, без их использования или переработки на территории страны. Это может быть возврат некачественного товара, изменение условий сделки или перепродажа.
`}
          </Highlight>
        </Text>
      </BlockContainer>
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

      <ServiceImportance
        heading='Почему с нами удобно работать?'
        importantPoints={importantPoints}
      />

      <ContactsBlock></ContactsBlock>
    </>
  )
}

export default ImportExportReexportPage
