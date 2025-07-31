import { COMPANY } from '@/shared/lib'
import axios from 'axios'

const TOKEN = 'token'
const CHAT_ID = 'CHAT_ID'

const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`

const sendRequest = (e: any, toast: any, onClose?: () => void) => {
  e.preventDefault()
  const { name, phone, email, comment } = Object.fromEntries(new FormData(e?.target))

  if (!email && !phone) {
    toast({
      title: 'Запрос не отправлен!',
      description: 'Для отправки укажите телефон или email',
      status: 'warning',
      duration: 5000,
      isClosable: true,
    })
    return
  }

  let message = `<b> Заявка с сайта ${COMPANY}</b> \n`
  message += name && `\nОтправитель - <b>${name}</b>`
  message += phone && `\nНомер - <b> ${phone} </b>`
  message += email && `\nEmail - <b> <a href='mailto:${email}'> ${email} </a> </b>`
  message += comment && `\nКомментарий - <b> ${comment} </b>`

  axios
    .post(API_URL, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
    .then(() => {
      toast({
        title: 'Запрос отправлен!',
        description: 'Скоро с Вами свяжется наш менеджер',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      onClose?.()
    })
    .catch(() =>
      toast({
        title: 'Ошибка отправки!',
        description: 'Проверте интернет соединение',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    )
}

export default sendRequest
