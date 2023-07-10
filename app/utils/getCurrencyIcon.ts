import { TypeCurrency } from '@/components/screens/home/types/ICard'

export function getCurrencyIcon(currency: TypeCurrency) {
  const dollarIcon = '\u0024'
  const uahIcon = '\u20B4'

  switch (currency) {
    case 'USD':
      return dollarIcon

    case 'UAH':
      return uahIcon

    default:
      break
  }
}
