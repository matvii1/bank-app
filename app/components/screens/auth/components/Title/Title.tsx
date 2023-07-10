import { FC } from 'react'
import { Text } from 'react-native'
import tw from 'twrnc'

type TitleProps = {
  title: 'Sign in' | 'Sign up'
}

const Title: FC<TitleProps> = ({ title }) => {
  return (
    <Text style={tw`text-center mb-4 text-[1.5rem] font-bold mt-[-4rem]`}>
      {title}
    </Text>
  )
}

export default Title
