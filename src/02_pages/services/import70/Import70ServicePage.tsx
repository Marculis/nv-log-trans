import { baseUrl } from '@/shared/lib'
import { BlockContainer, DoneIcon } from '@/shared/ui'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Heading, Highlight, List, ListItem, Text } from '@chakra-ui/react'
import { benefits, importantPoints, servicePoints } from './lib/constants'
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
      <BlockContainer>
        <Heading>Что такое процедура «Импорт 70»?</Heading>

        <Text
          fontSize='xl'
          whiteSpace='pre-wrap'
        >
          <Highlight
            query={[
              '«Импорт 70»',
              'ИМ 70',
              'временно размещать иностранные товары на таможенном складе',
            ]}
            styles={{ fontWeight: 'semibold', whiteSpace: 'pre-wrap', color: 'primary.base' }}
          >
            {`Процедура «Импорт 70» — это таможенный режим, позволяющий временно размещать иностранные товары на таможенном складе без уплаты пошлин, налогов и применения мер нетарифного регулирования. Это решение идеально подходит для компаний, которым нужно отложить финансовые обязательства или провести дополнительные операции с грузом до его окончательного оформления.

Таможенная процедура «Импорт 70» применяется, когда необходимо временно разместить импортируемый товар на закрытом складе для выполнения логистических операций. Ключевым этапом оформления является подача декларации, содержащей сведения о грузе и условиях его ввоза.

В декларации указывается специальный код процедуры - ИМ 70, который определяет режим хранения и обращения с товаром. Этот код означает, что груз будет находиться на территории таможенного склада, где допускается проведение определённых операций, но запрещено вывозить его за пределы склада до завершения процедуры.

            `}
          </Highlight>
        </Text>
      </BlockContainer>

      <ServiceConditionsBlock
        heading='Преимущества услуги «Импорт 70»'
        imageSrc={`${baseUrl}/images/import-70-2.jpg`}
        servicePoints={servicePoints}
      />

      <ServiceImportance
        heading='Почему с нами удобно работать?'
        importantPoints={importantPoints}
      />

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
