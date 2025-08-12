import { baseUrl, services } from '@/shared/lib'
import { Link } from '@chakra-ui/next-js'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { FC } from 'react'

const ServicesButtonAccordion: FC<{ onClose: () => void }> = ({ onClose }) => (
  <Accordion
    defaultIndex={0}
    minW='100%'
    px='3'
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
            display='block'
            fontSize='md'
            fontWeight='medium'
            href={`${baseUrl}${url}`}
            key={name}
            py={2}
            onClick={onClose}
          >
            {name}
          </Link>
        ))}
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
)

export default ServicesButtonAccordion
