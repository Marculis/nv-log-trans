import { baseUrl } from '@/shared/lib'
import { DoneIcon, WhatIsBlock } from '@/shared/ui'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Heading, List, ListItem } from '@chakra-ui/react'
import { benefits, importantPoints, requiredDocuments, whatIsBlockTexts } from './lib/constants'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import ServiceImportance from '@/widgets/ServiceImportance'

const CustomDeclarationsPage = () => {
  return (
    <>
      <ServiceMainBlock
        description='Мы обеспечиваем точность, соответствие требованиям и оперативную подачу документов для законного перемещения грузов через границу'
        heading={`Таможенное декларирование`}
        headingHighlight={['']}
        imageSrc={`${baseUrl}/images/main-bg.jpg`}
      />

      <WhatIsBlock {...whatIsBlockTexts} />

      <ServiceConditionsBlock
        heading='Документы, необходимые для оформления'
        imageSrc={`${baseUrl}/images/documents.jpg`}
        servicePoints={requiredDocuments}
      />

      <ServiceImportance
        heading='Работа с нами это'
        importantPoints={importantPoints}
        itemTextWidth='360px'
      />

      <ContactsBlock>
        <Heading
          fontWeight='semibold'
          size='lg'
        >{`Почему с нами удобно работать?`}</Heading>

        <List
          display='flex'
          flexDir='column'
          gap='2'
          mt='2'
        >
          {benefits.map((text) => (
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

export default CustomDeclarationsPage
