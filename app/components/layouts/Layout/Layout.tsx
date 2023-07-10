import { styleCenter } from '@/styles'
import { FC, ReactNode } from 'react'
import { ScrollView, View } from 'react-native'

type Props = {
  children: ReactNode
  isScrollView?: boolean
}

const Layout: FC<Props> = ({ children, isScrollView = true }) => {
  return (
    <View style={styleCenter}>
      {isScrollView ? (
        <ScrollView>{children}</ScrollView>
      ) : (
        <View>{children}</View>
      )}
    </View>
  )
}

export default Layout
