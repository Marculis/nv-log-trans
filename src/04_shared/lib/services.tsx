import {
  ArrowsIcon,
  BoxIcon,
  ConnectIcon,
  DiagramIcon,
  HandshakeIcon,
  HorseIcon,
  LeafIcon,
  SheetIcon,
  TruckIcon,
  WarehouseIcon,
} from '@/shared/ui'
import { baseUrl } from './config'

const services = [
  {
    url: '/services/epi',
    name: 'Электронное предварительное информирование (ЭПИ)',
    description:
      'Электронное предварительное информирование (ЭПИ) таможенных органов Республики Беларусь',
    highlight: ['Электронное предварительное информирование (ЭПИ)'],
    Icon: ConnectIcon,
    image: `${baseUrl}/images/epi-bg.jpg`,
  },
  {
    url: '/services/pi',
    name: 'Предварительное информирование (ПИ)',
    description:
      'Предварительное информирование (ПИ) таможенных органов Российской Федерации, в т.ч. с выдачей таможенной гарантии',
    highlight: ['Предварительное информирование (ПИ)'],
    Icon: SheetIcon,
    image: `${baseUrl}/images/pi-bg.jpg`,
  },
  {
    url: '/services/import_70',
    name: 'Импорт 70 (Таможенный склад)',
    description: 'Оформление процедуры Импорт 70 (Таможенный склад)',
    highlight: ['Импорт 70'],
    Icon: WarehouseIcon,
    image: `${baseUrl}/images/import-70-bg.jpg`,
  },
  {
    url: '/services/declarations_transit',
    name: 'Транзитные декларации Т1, Т2',
    description: `Оформление транзитных деклараций формы Т1, Т2`,
    highlight: ['транзитных', 'Т1, Т2'],
    Icon: TruckIcon,
    image: `${baseUrl}/images/transit.jpg`,
  },
  {
    url: '/services/declarations_fito',
    name: 'Фитосанитарные декларации CHED-PP, CHED-D',
    description: `Оформление фитосанитарных деклараций CHED-PP, CHED-D`,
    highlight: ['фитосанитарных', 'CHED-PP, CHED-D'],
    Icon: LeafIcon,
    image: `${baseUrl}/images/fito.jpg`,
  },
  {
    url: '/services/declarations_vet',
    name: 'Ветеринарные декларации CHED-Р, CHED-А',
    description: `Оформление ветеринарных въездных деклараций CHED-Р, CHED-А`,
    highlight: ['ветеринарных', 'CHED-Р, CHED-А'],
    Icon: HorseIcon,
    image: `${baseUrl}/images/animals.jpg`,
  },
  {
    url: '/services/custom_declarations',
    name: 'Таможенное декларирование РБ',
    description: 'Таможенное декларирование товаров при ввозе/вывозе их в/из Республики Беларусь',
    highlight: ['Таможенное декларирование'],
    Icon: BoxIcon,
    image: `${baseUrl}/images/main-bg.jpg`,
  },
  {
    url: '/services/statistic_declarations',
    name: 'Статистическое декларирование товаров',
    description: 'Статистическое декларирование товаров',
    highlight: ['Статистическое'],
    Icon: DiagramIcon,
    image: `${baseUrl}/images/documents-2.jpg`,
  },
  {
    url: '/services/import_export',
    name: 'Импорт. Экспорт. Реэкспорт.',
    description:
      'Подготовка документов и взаимодействие с таможенными органами для осуществления импорта, экспорта, реэкспорта',
    highlight: ['импорта, экспорта, реэкспорта'],
    Icon: ArrowsIcon,
    image: `${baseUrl}/images/import-export.jpg`,
  },
  {
    url: '/services/surety',
    name: 'Поручительство',
    description:
      'Поручительство при таможенной процедуре таможенного транзита с использованием в качестве гарантии сертификата обеспечения платы таможенных пошлин, налогов',
    highlight: ['Поручительство'],
    Icon: HandshakeIcon,
    image: `${baseUrl}/images/handshake.jpg`,
  },
]

export default services
