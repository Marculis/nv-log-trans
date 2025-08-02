import { baseUrl } from '@/shared/lib'
import { BlockContainer, DoneIcon } from '@/shared/ui'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Heading, Highlight, List, ListItem, Text } from '@chakra-ui/react'
import { benefits, importantPoints, servicePoints } from './lib/constants'
import ServiceImportance from '@/widgets/ServiceImportance'
import { ContactsBlock } from '@/widgets/ContactsBlock'

const SuretyServicePage = () => {
  return (
    <>
      <ServiceMainBlock
        description='Мы оформляем таможенное поручительство для транзита, временного ввоза и других процедур, обеспечивая законность и безопасность перемещения грузов по РБ, РФ и ЕАЭС'
        heading={`Таможенное поручительство`}
        headingHighlight={['']}
        imageSrc={`${baseUrl}/images/handshake.jpg`}
      />

      <BlockContainer>
        <Heading>Что такое Таможенное поручительство?</Heading>
        <Text
          fontSize='xl'
          whiteSpace='pre-wrap'
        >
          <Highlight
            query={['Таможенное поручительство']}
            styles={{ fontWeight: 'semibold', color: 'primary.base', whiteSpace: 'pre-wrap' }}
          >
            {`Таможенное поручительство — это один из способов обеспечения исполнения обязанности по уплате таможенных пошлин, налогов и иных обязательств, предусмотренных таможенным законодательством. Оно предоставляется третьим лицом (поручителем) в пользу таможенного органа и применяется при перемещении товаров через границу или в рамках процедуры таможенного транзита.`}
          </Highlight>
        </Text>
      </BlockContainer>

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
