import { Layout } from '@/components/layouts'
import { Heading } from '@/components/ui'
import { services } from '@/mocks/services'
import { FC } from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import { ServiceItem } from '../ServiceItem'

const Services: FC = () => {
  return (
    <Layout>
      <Heading text="Kyiv" isCentered />
      <View style={tw`flex-row flex-wrap justify-center gap-7 mt-16`}>
        {services.map((service) => (
          <ServiceItem key={service.title} service={service} />
        ))}
      </View>
    </Layout>
  )
}

export default Services
