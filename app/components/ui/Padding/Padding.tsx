import { FC, ReactNode } from 'react'
import { View } from 'react-native'
import tw from 'twrnc'

type PaddingProps = {
  children: ReactNode
  style?: any
}

const Padding: FC<PaddingProps> = ({ children, style = {} }) => {
  return <View style={{ ...tw`px-4`, ...style }}>{children}</View>
}

export default Padding
