import { BOX_SHADOW } from '@/styles'
import { MaterialIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { Text, View } from 'react-native'
import tw from 'twrnc'
import { IService } from '../types'

type ServiceItemProps = {
  service: IService
}

const ServiceItem: FC<ServiceItemProps> = ({ service }) => {
  return (
    <View style={tw`flex-col items-center`}>
      <View
        style={{
          ...tw`h-18 w-18 rounded-md bg-slate-100 items-center justify-around bg-white`,
          ...BOX_SHADOW,
        }}
      >
        <MaterialIcons name={service.iconName} size={30} color="#35373A" />
      </View>
      <Text style={tw`text-xs text-slate-700 mt-1`}>{service.title}</Text>
    </View>
  )
}

export default ServiceItem
