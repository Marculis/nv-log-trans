import { baseUrl } from '@/shared/lib'
import { BlockContainer, DoneIcon } from '@/shared/ui'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Heading, Highlight, List, ListItem, Text } from '@chakra-ui/react'
import { importantPoints, requiredDocuments, servicesConditions } from './lib/constants'
import ServiceImportance from '@/widgets/ServiceImportance'
import { ContactsBlock } from '@/widgets/ContactsBlock'

const FitoDeclarationsPage = () => {
  return (
    <>
      <ServiceMainBlock
        description='Мы подготавливаем и подаём документы через TRACES-NT, сопровождаем процесс до завершения контроля и обеспечиваем соответствие всем требованиям.'
        heading={`Оформление фитосанитарных деклараций CHED-PP, CHED-D`}
        headingHighlight={['CHED-PP, CHED-D']}
        imageSrc={`${baseUrl}/images/fito.jpg`}
      />

      <BlockContainer>
        <Heading>Что такое CHED-PP и CHED-D?</Heading>

        <Text
          fontSize='xl'
          whiteSpace='pre-wrap'
        >
          <Highlight
            query={[
              'CHED-PP (Common Health Entry Document – Plant Products)',
              'CHED-D (Common Health Entry Document – Derogation)',
            ]}
            styles={{ fontWeight: 'semibold', color: 'primary.base', whiteSpace: 'pre-wrap' }}
          >
            {`CHED-PP (Common Health Entry Document – Plant Products) — это фитосанитарная въездная декларация, обязательная для ввоза в ЕС растений, продуктов растительного происхождения и других объектов, подлежащих фитосанитарному контролю.
            
CHED-D (Common Health Entry Document – Derogation) — используется для ввоза определённых категорий товаров, подпадающих под особые условия или исключения, включая отходы, корма, и другие специфические грузы, требующие контроля.`}
          </Highlight>
        </Text>
      </BlockContainer>

      <ServiceConditionsBlock
        heading='Необходимые документы для оформления'
        imageSrc={`${baseUrl}/images/documents.jpg`}
        servicePoints={requiredDocuments}
      />

      <ServiceImportance
        heading='Почему это важно?'
        importantPoints={importantPoints}
        itemTextWidth='380px'
      />

      <ContactsBlock>
        <Heading
          fontWeight='semibold'
          size='lg'
        >{`Условия работы`}</Heading>

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

export default FitoDeclarationsPage
