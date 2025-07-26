import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Textarea,
  VStack,
  useToast,
} from '@chakra-ui/react'
import sendRequest from './sendRequest'
import { FC } from 'react'

interface IRequestFormProps {
  onClose?: () => void
}

const RequestForm: FC<IRequestFormProps> = ({ onClose }) => {
  const toast = useToast()

  return (
    <form onSubmit={(e) => sendRequest(e, toast, onClose)}>
      <VStack
        gap='6'
        mt='6'
      >
        <FormControl>
          <FormLabel color='secondary.base'>Имя</FormLabel>
          <Input
            name='name'
            placeholder='Ваше имя'
            type='text'
          />
        </FormControl>
        <FormControl>
          <FormLabel color='secondary.base'>Номер телефона</FormLabel>
          <Input
            name='phone'
            placeholder='Контактный номер'
            type='number'
          />
        </FormControl>
        <FormControl>
          <FormLabel color='secondary.base'>Email</FormLabel>
          <Input
            name='email'
            placeholder='Электронная почта'
            type='email'
          />
        </FormControl>
        <FormControl>
          <FormLabel color='secondary.base'>Комментарий</FormLabel>
          <Textarea
            name='comment'
            placeholder='Оставьте комментарий'
          />
        </FormControl>
        <HStack>
          <Button
            colorScheme='secondary'
            mr={3}
            variant='outline'
            onClick={onClose}
          >
            Отмена
          </Button>
          <Button
            colorScheme='primary'
            type='submit'
          >
            Отправить
          </Button>
        </HStack>
      </VStack>
    </form>
  )
}

export default RequestForm
