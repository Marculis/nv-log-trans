import { BlockContainer } from '@/shared/ui'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import ServiceImportance from '@/widgets/ServiceImportance'
import { Heading, Highlight, List, ListItem, Text } from '@chakra-ui/react'
import { benefits, importantPoints, servicePoints } from './lib/constants'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { baseUrl } from '@/shared/lib'

const PiServicePage = () => {
  return (
    <>
      <ServiceMainBlock
        description='Мы предоставляем услуги ПИ в соответствии с требованиями Федеральной таможенной службы РФ, включая оформление таможенной гарантии'
        heading={`Предварительное информирование (ПИ)`}
        headingHighlight={['(ПИ)']}
        imageSrc={`${baseUrl}/images/epi-bg.jpg`}
      />

      <BlockContainer>
        <Heading>Что такое ПИ?</Heading>

        <Text
          fontSize='xl'
          whiteSpace='pre-wrap'
        >
          <Highlight
            query={['Предварительное информирование', 'таможенная гарантия']}
            styles={{ fontWeight: 'semibold', color: 'primary.base' }}
          >
            {`Предварительное информирование — это процедура предоставления сведений о товаре, транспортном средстве и маршруте до прибытия груза на таможенную территорию России. Она обязательна при перемещении товаров через границу, особенно при транзите, и позволяет ускорить прохождение таможенных формальностей.

В рамках ПИ может потребоваться таможенная гарантия — обязательство уплаты таможенных платежей в случае нарушения условий транзита. Она оформляется через аккредитованных гарантов и обеспечивает финансовую защиту государства.`}
          </Highlight>
        </Text>
      </BlockContainer>

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
              />{' '}
              {text}
            </ListItem>
          ))}
        </List>
      </ContactsBlock>
    </>
  )
}

export default PiServicePage
