import { BacteriaIcon, OkayIcon, UnsuccessRouteIcon } from '@/shared/ui'

export const requiredDocuments = [
  'Фитосанитарный сертификат',
  'Коммерческий инвойс и проформа',
  'Упаковочный лист',
  'Документы на перевозку (CMR и др.)',
  'Экспортная декларация (если есть)',
]

export const importantPoints = [
  {
    Icon: UnsuccessRouteIcon,
    text: 'Без CHED-PP или CHED-D невозможно пройти фитосанитарный контроль на границе',
  },
  {
    Icon: BacteriaIcon,
    text: 'Документ подтверждает отсутствие заболеваний у растений и товаров растительного происхождения',
  },
  {
    Icon: OkayIcon,
    text: 'Обязателен для всех стран ЕС с 14 декабря 2019 года',
  },
]

export const servicesConditions = [
  'Работаем с любыми типами продукции',
  'Сопровождение до завершения контроля',
  'Оформление в кратчайшие сроки',
  'Регистрация в системе TRACES-NT',
]
