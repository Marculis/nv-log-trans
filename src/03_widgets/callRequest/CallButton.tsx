import {
  Button,
  ButtonProps,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { FC } from 'react'

const RequestForm = dynamic(() => import('src/03_widgets/callRequest/RequestForm'))

const CallButton: FC<ButtonProps> = ({ ...props }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Button
        borderColor='primary.base'
        color='primary.base'
        variant='outline'
        onClick={onOpen}
        {...props}
      >
        Заказать звонок
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody py='6'>
            <Heading
              color='primary.base'
              fontSize='3xl'
              textAlign='center'
            >
              Запрос на звонок
            </Heading>
            <RequestForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default CallButton
