import { Alert } from 'react-native'

const CURRENCY_BASE = 'UAH'
const API_KEY = 'ueVPr6ZN43kNsxtSNCgFBDGLtzWJOsOAQMHZOEzT&'

const CURRENCY_URL = `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=${CURRENCY_BASE}`

export const CurrencyService = {
  getCurrencies: async () => {
    try {
      const { data } = await request(CURRENCY_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return [
        {
          code: 'USD',
          value: data.USD.value,
        },
        {
          code: 'EUR',
          value: data.EUR.value,
        },
        {
          code: 'CAD',
          value: data.CAD.value,
        },
      ]
    } catch (error) {
      Alert.alert(JSON.stringify(error))
    }
  },
}

async function request(url: string, options: RequestInit = {}) {
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }

      return response.json()
    })
    .then((data) => data)
}
