export type CurCodeType = 'USD' | 'EUR' | 'PLN' | 'RUB'

export interface CurrencyData {
  Cur_ID: number
  Date: string
  Cur_Abbreviation: CurCodeType
  Cur_Scale: number
  Cur_Name: string
  Cur_OfficialRate: number
}
