import { ICurrency } from './ICurrency'

export interface ICurrencyFromServer {
	[curr: string]: ICurrency
}