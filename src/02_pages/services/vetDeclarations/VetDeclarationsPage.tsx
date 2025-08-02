import { baseUrl } from '@/shared/lib'
import { BlockContainer, DoneIcon } from '@/shared/ui'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Heading, Highlight, List, ListItem, Text } from '@chakra-ui/react'
import { importantPoints, requiredDocuments, servicesConditions } from './lib/constants'
import ServiceImportance from '@/widgets/ServiceImportance'
import { ContactsBlock } from '@/widgets/ContactsBlock'

const VetDeclarationsPage = () => {
  return (
    <>
      <ServiceMainBlock
        description='Мы подаём документы через систему TRACES-NT, обеспечиваем соответствие ветеринарным требованиям и сопровождаем процесс до завершения контроля'
        heading={`Оформление ветеринарных деклараций CHED-Р, CHED-А`}
        headingHighlight={['CHED-Р, CHED-А']}
        imageSrc={`${baseUrl}/images/animals.jpg`}
      />

      <BlockContainer>
        <Heading>Что такое CHED-P и CHED-A?</Heading>

        <Text
          fontSize='xl'
          whiteSpace='pre-wrap'
        >
          <Highlight
            query={['CHED-P', 'CHED-A']}
            styles={{ fontWeight: 'semibold', color: 'primary.base', whiteSpace: 'pre-wrap' }}
          >
            {`CHED-P — декларации для живых животных, включая сельскохозяйственных, домашних и декоративных.

CHED-A — декларации для продуктов животного происхождения: мясо, молочные изделия, яйца, корма, субпродукты и др.`}
          </Highlight>
        </Text>
      </BlockContainer>

      <ServiceConditionsBlock
        heading='Необходимые документы для оформления'
        imageSrc={`${baseUrl}/images/documents.jpg`}
        servicePoints={requiredDocuments}
      />

      <ServiceImportance
        heading='Почему с нами удобно работать?'
        importantPoints={importantPoints}
        itemTextWidth='340px'
      />

      <ContactsBlock>
        <Heading
          fontWeight='semibold'
          size='lg'
        >{`Как мы работаем`}</Heading>

        <List
          display='flex'
          flexDir='column'
          gap='2'
          mt='2'
        >
          {servicesConditions.map((text) => (
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

export default VetDeclarationsPage
