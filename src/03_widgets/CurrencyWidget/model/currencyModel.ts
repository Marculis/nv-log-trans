import { CurrencyData } from './types'

const currencies = [
  {
    name: 'USD',
    code: 431,
  },
  {
    name: 'EUR',
    code: 451,
  },
  {
    name: 'PLN',
    code: 452,
  },
  {
    name: 'RUB',
    code: 456,
  },
]

const getCurrencyExchange = async (code: string | number) => {
  const apiUrl = `https://api.nbrb.by/exrates/rates/${code}`
  let currencyData

  try {
    const response = await fetch(apiUrl)
    if (!response.ok) {
      console.error(`Can't get currency exchange`)
    }

    currencyData = await response.json()
  } catch (error: any) {
    console.error(error?.message ? error.message : error)
  }

  return currencyData
}

export const getAllCurrenciesData = async () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const storage = window.localStorage
  const stgCurs = 'currencies'

  if (typeof window !== 'undefined' && window.localStorage) {
    const savedCurrencies = storage.getItem(stgCurs)

    if (savedCurrencies) {
      const { loadedTime, data } = JSON.parse(savedCurrencies)

      if (loadedTime === today.getTime()) {
        return data as CurrencyData[]
      }
    }
  }

  const allRequests = currencies.map(({ code }) => getCurrencyExchange(code))
  const data: CurrencyData[] = await Promise.all(allRequests)

  const dataToSave = JSON.stringify({
    loadedTime: today.getTime(),
    data,
  })

  storage.setItem(stgCurs, dataToSave)

  return data
}

// const defaultData: CurrencyData[] = [
//   {
//     Cur_ID: 431,
//     Date: '2025-08-09T00:00:00',
//     Cur_Abbreviation: 'USD',
//     Cur_Scale: 1,
//     Cur_Name: 'Доллар США',
//     Cur_OfficialRate: 2.9905,
//   },
//   {
//     Cur_ID: 451,
//     Date: '2025-08-09T00:00:00',
//     Cur_Abbreviation: 'EUR',
//     Cur_Scale: 1,
//     Cur_Name: 'Евро',
//     Cur_OfficialRate: 3.4905,
//   },
//   {
//     Cur_ID: 452,
//     Date: '2025-08-09T00:00:00',
//     Cur_Abbreviation: 'PLN',
//     Cur_Scale: 10,
//     Cur_Name: 'Злотых',
//     Cur_OfficialRate: 8.1891,
//   },
//   {
//     Cur_ID: 456,
//     Date: '2025-08-09T00:00:00',
//     Cur_Abbreviation: 'RUB',
//     Cur_Scale: 100,
//     Cur_Name: 'Российских рублей',
//     Cur_OfficialRate: 3.7138,
//   },
// ]
