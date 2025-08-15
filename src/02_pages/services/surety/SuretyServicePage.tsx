import { baseUrl } from '@/shared/lib'
import { DoneIcon, WhatIsBlock } from '@/shared/ui'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Heading, List, ListItem } from '@chakra-ui/react'
import { benefits, importantPoints, servicePoints, whatIsBlockTexts } from './lib/constants'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import ServiceImportance from '@/widgets/ServiceImportance'

const SuretyServicePage = () => {
  return (
    <>
      <ServiceMainBlock
        description='Мы оформляем таможенное поручительство для транзита, временного ввоза и других процедур, обеспечивая законность и безопасность перемещения грузов по РБ, РФ и ЕАЭС'
        heading={`Таможенное поручительство`}
        headingHighlight={['']}
        imageSrc={`${baseUrl}/images/handshake.jpg`}
      />

      <WhatIsBlock {...whatIsBlockTexts} />

      <ServiceConditionsBlock
        heading='Особенности поручительства'
        imageSrc={`${baseUrl}/images/deal.jpg`}
        servicePoints={servicePoints}
      />

      <ServiceImportance
        heading='Применение'
        importantPoints={importantPoints}
        itemTextWidth='380px'
      />

      <ContactsBlock>
        <Heading
          fontWeight='semibold'
          size='lg'
        >{`Что мы предлагаем`}</Heading>

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

export default SuretyServicePage
