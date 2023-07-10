import { FC } from 'react'
import { TextInput } from 'react-native'
import tw from 'twrnc'

type FieldProps = {
  placeholder: string
  onChange: (value: string) => void
  value: string
  isSecure?: boolean
}

const Field: FC<FieldProps> = ({ placeholder, onChange, value, isSecure }) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={isSecure}
      value={value}
      onChangeText={onChange}
      autoCapitalize="none"
      style={tw`rounded-lg bg-gray-100 border border-gray-400 mt-2 p-3`}
    />
  )
}

export default Field
