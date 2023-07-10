export function getRandomCardNumber() {
  const cardNumber = Math.floor(Math.random() * 10000000000000000).toString()
  let formattedNumber = ''

  for (let i = 0; i < cardNumber.length; i++) {
    if (i !== 0 && i % 4 === 0) {
      formattedNumber += ` ${cardNumber[i]}`
    } else {
      formattedNumber += cardNumber[i]
    }
  }

  return formattedNumber.trim()
}
