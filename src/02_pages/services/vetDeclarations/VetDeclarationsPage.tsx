import { baseUrl, COMPANY } from '@/shared/lib'
import { DoneIcon, MetaContainer, WhatIsBlock } from '@/shared/ui'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Heading, List, ListItem } from '@chakra-ui/react'
import { requiredDocuments, servicesConditions, whatIsBlockTexts } from './lib/constants'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import ServiceImportance from '@/widgets/ServiceImportance'

const VetDeclarationsPage = () => {
  return (
    <>
      <MetaContainer title={`Ветеринарные декларации - ${COMPANY}`} />

      <ServiceMainBlock
        description='Мы подаём документы через систему TRACES-NT, обеспечиваем соответствие ветеринарным требованиям и сопровождаем процесс до завершения контроля'
        heading={`Оформление ветеринарных деклараций CHED-Р, CHED-А`}
        headingHighlight={['CHED-Р, CHED-А']}
        imageSrc={`${baseUrl}/images/animals.jpg`}
      />

      <WhatIsBlock {...whatIsBlockTexts} />

      <ServiceConditionsBlock
        heading='Необходимые документы для оформления'
        imageSrc={`${baseUrl}/images/documents.jpg`}
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

export default VetDeclarationsPage
