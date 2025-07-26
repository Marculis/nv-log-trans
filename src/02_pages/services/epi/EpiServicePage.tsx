import { BlockContainer } from '@/shared/ui'
import ServiceImportance from '@/widgets/ServiceImportance'
import { Heading, Highlight, List, ListItem, Text } from '@chakra-ui/react'
import { benefits, importantPoints, servicePoints } from './lib/constants'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { ghPagesUrl } from '@/shared/lib'

const EpiServicePage = () => {
  return (
    <>
      <ServiceMainBlock
        description='Профессиональные услуги по оформлению ЭПИ для перевозчиков, логистических операторов,
          импортеров и экспортеров, работающих на территории Беларуси, России и Европы'
        heading={`Электронное предварительное информирование (ЭПИ)`}
        headingHighlight={['(ЭПИ)']}
        imageSrc={`${ghPagesUrl}/images/epi-bg.jpg`}
      />

      <BlockContainer>
        <Heading>Что такое ЭПИ?</Heading>

        <Text
          fontSize='xl'
          whiteSpace='pre-wrap'
        >
          <Highlight
            query={['Электронное предварительное информирование']}
            styles={{ fontWeight: 'semibold', color: 'primary.base', whiteSpace: 'pre-wrap' }}
          >
            {`Электронное предварительное информирование — это обязательная процедура уведомления таможенных органов о прибытии товаров на территорию Республики Беларусь до фактического пересечения границы. 
ЭПИ позволяет ускорить прохождение таможенного контроля, снизить риски задержек и обеспечить прозрачность логистических операций.

С 1 июля 2021 года ЭПИ стало обязательным для всех транспортных средств, следующих в Беларусь с товарами, подлежащими таможенному декларированию.`}
          </Highlight>
        </Text>
      </BlockContainer>

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
          mt='6'
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
