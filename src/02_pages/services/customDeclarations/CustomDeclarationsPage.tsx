import { baseUrl } from '@/shared/lib'
import { BlockContainer, DoneIcon } from '@/shared/ui'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Heading, Highlight, List, ListItem, Text } from '@chakra-ui/react'
import { benefits, importantPoints, requiredDocuments } from './lib/constants'
import ServiceImportance from '@/widgets/ServiceImportance'
import { ContactsBlock } from '@/widgets/ContactsBlock'

const CustomDeclarationsPage = () => {
  return (
    <>
      <ServiceMainBlock
        description='Мы обеспечиваем точность, соответствие требованиям и оперативную подачу документов для законного перемещения грузов через границу'
        heading={`Таможенное декларирование`}
        headingHighlight={['']}
        imageSrc={`${baseUrl}/images/main-bg.jpg`}
      />

      <BlockContainer>
        <Heading>Что такое Таможенное декларирование?</Heading>
        <Text
          fontSize='xl'
          whiteSpace='pre-wrap'
        >
          <Highlight
            query={['Таможенное декларирование']}
            styles={{ fontWeight: 'semibold', color: 'primary.base', whiteSpace: 'pre-wrap' }}
          >
            {`Таможенное декларирование — это представление таможенному органу сведений о товарах, перемещаемых через границу, с целью помещения их под соответствующий таможенный режим. Оно осуществляется путем подачи письменной или электронной таможенной декларации.
            
Подача таможенной декларации необходима всем, кто перемещает товары через границу — от импортёров и экспортёров до логистических компаний и физических лиц. Услуга особенно актуальна для бизнеса, занимающегося международной торговлей, а также для тех, кто оформляет транзитные перевозки или заказывает товары из-за рубежа.

Корректное декларирование — ключ к законному и своевременному выпуску груза. Ошибки в оформлении могут привести к задержкам, штрафам и дополнительным расходам. Мы обеспечиваем точность, соответствие требованиям и прозрачность на каждом этапе.`}
          </Highlight>
        </Text>
      </BlockContainer>

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
