import { menuList } from '@/mocks/menuList'
import React from 'react'
import { View } from 'react-native'
import tw from 'twrnc'
import { MenuItem } from '../MenuItem'

const Menu = () => {
  return (
    <View style={tw`mt-5`}>
      {menuList.map((item) => (
        <MenuItem key={item.title} item={item} />
      ))}
    </View>
  )
}

export default Menu
