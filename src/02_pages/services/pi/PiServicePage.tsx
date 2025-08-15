import { WhatIsBlock } from '@/shared/ui'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import { Heading, List, ListItem } from '@chakra-ui/react'
import { benefits, importantPoints, servicePoints, whatIsBlockTexts } from './lib/constants'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { baseUrl } from '@/shared/lib'
import ServiceImportance from '@/widgets/ServiceImportance'

const PiServicePage = () => {
  return (
    <>
      <ServiceMainBlock
        description='Мы предоставляем услуги ПИ в соответствии с требованиями Федеральной таможенной службы РФ, включая оформление таможенной гарантии'
        heading={`Предварительное информирование (ПИ)`}
        headingHighlight={['(ПИ)']}
        imageSrc={`${baseUrl}/images/pi-bg.jpg`}
      />

      <WhatIsBlock {...whatIsBlockTexts} />

      <ServiceConditionsBlock
        heading='Что входит в услугу?'
        servicePoints={servicePoints}
      />

      <ServiceImportance
        heading='Почему ПИ важно?'
        importantPoints={importantPoints}
      />
      <ContactsBlock>
        <Heading
          fontWeight='semibold'
          size='lg'
        >{`Преимущества наших услуг`}</Heading>

        <List
          display='flex'
          flexDir='column'
          gap='2'
          mt='2'
        >
          {benefits.map(({ text, Icon }) => (
            <ListItem
              alignItems='center'
              display='flex'
              fontSize='lg'
              gap='4'
              key={text}
            >
              <Icon
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

export default PiServicePage
