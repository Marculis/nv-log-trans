import { baseUrl } from '@/shared/lib'
import { WhatIsBlock } from '@/shared/ui'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { servicePoints, whatIsBlockTexts } from './lib/constants'
import { ContactsBlock } from '@/widgets/ContactsBlock'
import ServiceImportance from '@/widgets/ServiceImportance'

const StatisticDeclarationPage = () => {
  return (
    <>
      <ServiceMainBlock
        description='Мы подготавливаем и подаём документы через TRACES-NT, сопровождаем процесс до завершения контроля и обеспечиваем соответствие всем требованиям.'
        heading={`Статистическое декларирование`}
        headingHighlight={['CHED-PP, CHED-D']}
        imageSrc={`${baseUrl}/images/documents-2.jpg`}
      />

      <WhatIsBlock {...whatIsBlockTexts} />

      <ServiceConditionsBlock
        heading='Условия и особенности процедуры'
        imageSrc={`${baseUrl}/images/money.jpg`}
        servicePoints={servicePoints}
      />

      <ServiceImportance itemTextWidth='340px' />

      <ContactsBlock />
    </>
  )
}

export default StatisticDeclarationPage
