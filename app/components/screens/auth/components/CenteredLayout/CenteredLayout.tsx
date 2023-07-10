import { FC, ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import tw from 'twrnc'

type CenteredLayoutProps = {
  children: ReactNode
}

const CenteredLayout: FC<CenteredLayoutProps> = ({ children }) => {
  return (
    <View style={tw`h-full mx-5 justify-center items-center`}>{children}</View>
  )
}

const styles = StyleSheet.create({})

export default CenteredLayout
