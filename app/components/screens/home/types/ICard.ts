export type TypeCurrency = 'USD' | 'UAH'
export type TypeName = 'Classic' | 'Kids'

export interface ICard {
  _id: string
  userId: string
  balance: number
  cardNumber: string
  currency: TypeCurrency
  type: TypeName
}
