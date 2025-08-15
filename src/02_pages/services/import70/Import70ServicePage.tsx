import { baseUrl } from '@/shared/lib'
import { DoneIcon, WhatIsBlock } from '@/shared/ui'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Heading, List, ListItem } from '@chakra-ui/react'
import { benefits, servicePoints, whatIsBlockTexts } from './lib/constants'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import ServiceImportance from '@/widgets/ServiceImportance'

const Import70ServicePage = () => {
  return (
    <>
      <ServiceMainBlock
        description='Мы предоставляем оформление услуги Таможенный склад в соответствии с требованиями таможенной службы'
        heading={`Оформление процедуры\n«Импорт 70» (Таможенный склад)`}
        headingHighlight={['(Таможенный склад)']}
        imageSrc={`${baseUrl}/images/import-70-bg.jpg`}
      />

      <WhatIsBlock {...whatIsBlockTexts} />

      <ServiceConditionsBlock
        heading='Преимущества услуги «Импорт 70»'
        imageSrc={`${baseUrl}/images/import-70-2.jpg`}
        servicePoints={servicePoints}
      />

      <ServiceImportance />

      <ContactsBlock>
        <Heading
          fontWeight='semibold'
          size='lg'
        >{`Что мы делаем`}</Heading>

        <List
          display='flex'
          flexDir='column'
          gap='2'
          mt='2'
        >
          {benefits.map(({ text }) => (
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

export default Import70ServicePage
