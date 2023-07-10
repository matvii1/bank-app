import { Alert } from 'react-native'

interface IButton {
  text: string
  resolveValue: string
}

interface IAsyncAlert {
  title: string
  message?: string
  buttons: IButton[]
}

export const asyncAlert = ({ title, message, buttons }: IAsyncAlert) => {
  return new Promise((resolve) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: buttons[0].text,
          onPress: () => resolve(buttons[0].resolveValue),
        },
        {
          text: buttons[1].text,
          onPress: () => resolve(buttons[1].resolveValue),
        },
      ],
      { cancelable: false }
    )
  })
}
