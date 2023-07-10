import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { CurrencyService } from '../services'
import { ICurrency } from '../types'

export function useCurrencies() {
  const [currencies, setCurrencies] = useState<ICurrency[]>([])
  const [loading, setLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function getCurrencies() {
      try {
        const data = await CurrencyService.getCurrencies()

        if (data) {
          setCurrencies(data)
          setIsError(false)
        }
      } catch (error: any) {
        setIsError(true)
        Alert.alert(JSON.stringify(error))
      } finally {
        setLoading(false)
      }
    }

    getCurrencies()
  }, [])

  return {
    currencies,
    isLoading: loading && !isError,
    isError,
    isSuccess: !isError && !loading,
  }
}
