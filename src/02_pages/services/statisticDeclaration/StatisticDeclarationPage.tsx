import { baseUrl } from '@/shared/lib'
import { BlockContainer } from '@/shared/ui'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { Heading, Highlight, Text } from '@chakra-ui/react'
import { importantPoints, servicePoints } from './lib/constants'
import ServiceImportance from '@/widgets/ServiceImportance'
import { ContactsBlock } from '@/widgets/ContactsBlock'

const StatisticDeclarationPage = () => {
  return (
    <>
      <ServiceMainBlock
        description='Мы подготавливаем и подаём документы через TRACES-NT, сопровождаем процесс до завершения контроля и обеспечиваем соответствие всем требованиям.'
        heading={`Статистическое декларирование`}
        headingHighlight={['CHED-PP, CHED-D']}
        imageSrc={`${baseUrl}/images/documents-2.jpg`}
      />

      <BlockContainer>
        <Heading>Что такое статистическое декларирование?</Heading>

        <Text
          fontSize='xl'
          whiteSpace='pre-wrap'
        >
          <Highlight
            query={['Статистическое декларирование товаров']}
            styles={{ fontWeight: 'semibold', whiteSpace: 'pre-wrap', color: 'primary.base' }}
          >
            {`Статистическое декларирование товаров — это подача сведений о внешнеторговых операциях, при которых не совершаются таможенные процедуры, но требуется учет объемов и номенклатуры экспорта и импорта. Оно применяется при торговле между странами ЕАЭС`}
          </Highlight>
        </Text>
      </BlockContainer>

      <ServiceConditionsBlock
        heading='Условия и особенности процедуры'
        imageSrc={`${baseUrl}/images/money.jpg`}
        servicePoints={servicePoints}
      />

      <ServiceImportance
        heading='Почему с нами удобно работать?'
        importantPoints={importantPoints}
        itemTextWidth='340px'
      />

      <ContactsBlock />
    </>
  )
}

export default StatisticDeclarationPage
