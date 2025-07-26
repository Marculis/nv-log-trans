import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
  useToast,
} from '@chakra-ui/react'
import { FC } from 'react'

interface IRequestFormProps {
  onClose?: () => void
}

const ContactUsForm: FC<IRequestFormProps> = () => {
  const toast = useToast()

  return (
    <VStack
      alignItems='start'
      as='form'
      gap='6'
      w={{ base: '100%', md: '40%' }}
    >
      <Heading
        fontWeight='semibold'
        size='lg'
      >
        Мы свяжемся с вами
      </Heading>
      <FormControl>
        <FormLabel color='primary.base'>Имя</FormLabel>
        <Input
          name='name'
          placeholder='Ваше имя'
          type='text'
        />
      </FormControl>
      <FormControl>
        <FormLabel color='primary.base'>Номер телефона</FormLabel>
        <Input
          name='phone'
          placeholder='Контактный номер'
          type='number'
        />
      </FormControl>
      <FormControl>
        <FormLabel color='primary.base'>Email</FormLabel>
        <Input
          name='email'
          placeholder='Электронная почта'
          type='email'
        />
      </FormControl>
      <FormControl>
        <FormLabel color='primary.base'>Комментарий</FormLabel>
        <Textarea
          name='comment'
          placeholder='Оставьте комментарий'
        />
      </FormControl>

      <Button
        colorScheme='primary'
        type='submit'
        w='100%'
      >
        Отправить
      </Button>
    </VStack>
  )
}

export default ContactUsForm
