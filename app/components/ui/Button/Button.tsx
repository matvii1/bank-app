import { FC } from 'react'
import { Text, TouchableHighlight } from 'react-native'
import tw from 'twrnc'

type ButtonProps = {
  onPress?: () => void
  title: string
  className?: string
  colors?: [string, string]
}

const Button: FC<ButtonProps> = ({
  onPress,
  title,
  className,
  colors = ['bg-yellow-300', 'bg-yellow-200'],
}) => {
  const buttonStyles = `
    py-3 justify-center items-center ${className} ${colors[0]} rounded-md w-full
  `

  return (
    <TouchableHighlight
      style={tw`${buttonStyles}`}
      underlayColor={colors[1]}
      onPress={onPress}
    >
      <Text style={tw`text-gray-800`}>{title}</Text>
    </TouchableHighlight>
  )
}

export default Button
