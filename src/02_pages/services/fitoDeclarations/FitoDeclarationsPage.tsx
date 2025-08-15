import { baseUrl, COMPANY } from '@/shared/lib'
import { DoneIcon, MetaContainer, WhatIsBlock } from '@/shared/ui'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Heading, List, ListItem } from '@chakra-ui/react'
import {
  importantPoints,
  requiredDocuments,
  servicesConditions,
  whatIsBlockTexts,
} from './lib/constants'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import ServiceImportance from '@/widgets/ServiceImportance'

const FitoDeclarationsPage = () => {
  return (
    <>
      <MetaContainer title={`Фитосанитарные декларации - ${COMPANY}`} />

      <ServiceMainBlock
        description='Мы подготавливаем и подаём документы через TRACES-NT, сопровождаем процесс до завершения контроля и обеспечиваем соответствие всем требованиям.'
        heading={`Оформление фитосанитарных деклараций CHED-PP, CHED-D`}
        headingHighlight={['CHED-PP, CHED-D']}
        imageSrc={`${baseUrl}/images/fito.jpg`}
      />

      <WhatIsBlock {...whatIsBlockTexts} />

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
