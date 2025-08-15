import { baseUrl, COMPANY } from '@/shared/lib'
import { MetaContainer, WhatIsBlock } from '@/shared/ui'
import ServiceConditionsBlock from '@/widgets/ServiceConditionsBlock'
import ServiceMainBlock from '@/widgets/ServiceMainBlock'
import { requiredDocuments, whatIsBlockTexts } from './lib/constants'
import ServiceImportance from '@/widgets/ServiceImportance'
import { ContactsBlock } from '@/widgets/ContactsBlock'

const ImportTemporaryPage = () => {
  return (
    <>
      <MetaContainer title={`Временный ввоз в РБ - ${COMPANY}`} />

      <ServiceMainBlock
        description='Берём на себя всю процедуру: от подготовки документов до взаимодействия с таможней. Гарантируем соблюдение сроков и требований законодательства'
        heading={`Временный ввоз в РБ`}
        headingHighlight={['импорт, экспорт и реэкспорт']}
        imageSrc={`${baseUrl}/images/skyline.jpg`}
      />

      <WhatIsBlock {...whatIsBlockTexts} />

      <ServiceConditionsBlock
        heading='Для оформления потребуется:'
        servicePoints={requiredDocuments}
      />

      <ServiceImportance itemTextWidth='360px' />

      <ContactsBlock />
    </>
  )
}

export default ImportTemporaryPage
