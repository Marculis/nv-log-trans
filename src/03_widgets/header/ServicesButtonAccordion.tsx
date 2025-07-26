import { ghPagesUrl, services } from '@/shared/lib'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
} from '@chakra-ui/react'

const ServicesButtonAccordion = () => (
  <Accordion
    defaultIndex={0}
    minW='100%'
    allowToggle
  >
    <AccordionItem border='none'>
      <AccordionButton
        fontSize='lg'
        fontWeight='medium'
        px={0}
      >
        Наши услуги
        <AccordionIcon ml='auto' />
      </AccordionButton>
      <AccordionPanel
        pl={4}
        pr={0}
        py={0}
      >
        {services.map(({ name, url }) => (
          <Link
            _hover={{ color: 'primary.base' }}
            display='block'
            fontSize='md'
            fontWeight='medium'
            href={`${ghPagesUrl}${url}`}
            key={name}
            py={2}
          >
            {name}
          </Link>
        ))}
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
)

export default ServicesButtonAccordion
