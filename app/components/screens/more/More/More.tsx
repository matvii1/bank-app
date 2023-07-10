import { Layout } from '@/components/layouts'
import { Heading, Padding } from '@/components/ui'
import { FC } from 'react'
import { Text } from 'react-native'
import tw from 'twrnc'
import { Currencies, Menu } from '../components'

const More: FC = () => {
  return (
    <Layout>
      <Heading text="More" />

      <Padding>
        <Currencies />
        <Menu />
        <Text style={tw`text-xs text-slate-500 text-center mt-5`}>
          Version 1.0.
        </Text>
      </Padding>
    </Layout>
  )
}

export default More
