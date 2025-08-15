import { MetaContainer, WhatIsBlock } from '@/shared/ui'
import { Heading, List, ListItem } from '@chakra-ui/react'
import { benefits, importantPoints, servicePoints, whatIsBlockTexts } from './lib/constants'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { baseUrl, COMPANY } from '@/shared/lib'
import ServiceImportance from '@/widgets/ServiceImportance'

const EpiServicePage = () => {
  return (
    <>
      <MetaContainer title={`Электронное предварительное информирование - ${COMPANY}`} />

      <ServiceMainBlock
        description='Профессиональные услуги по оформлению ЭПИ для перевозчиков, логистических операторов,
          импортеров и экспортеров, работающих на территории Беларуси, России и Европы'
        heading={`Электронное предварительное информирование (ЭПИ)`}
        headingHighlight={['(ЭПИ)']}
        imageSrc={`${baseUrl}/images/epi-bg.jpg`}
      />

      <WhatIsBlock {...whatIsBlockTexts} />

      <ServiceConditionsBlock
        heading='Наша компания предлагает полный спектр услуг по оформлению ЭПИ'
        servicePoints={servicePoints}
      />

      <ServiceImportance
        heading='Почему ЭПИ важно?'
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

export default EpiServicePage
