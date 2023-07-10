import { ReactNode } from 'react'
import { View } from 'react-native'
import tw from 'twrnc'

const CardBody = ({ children }: { children: ReactNode }) => {
  return (
    <View
      style={tw`p-3 bg-slate-200 mt-4 rounded-lg flex-row justify-between items-center`}
    >
      {children}
    </View>
  )
}

export default CardBody
