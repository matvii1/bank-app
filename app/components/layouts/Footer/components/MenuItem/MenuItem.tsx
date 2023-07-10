import { TypeRootParamList } from '@/navigation/types'
import { AntDesign } from '@expo/vector-icons'
import React, { FC } from 'react'
import { Pressable, Text } from 'react-native'
import tw from 'twrnc'
import { IFooterItem } from '../../IFooterItem'

type MenuItemProps = {
  item: IFooterItem
  navigate: (path: keyof TypeRootParamList) => void
  selectedPage: string | undefined
}

const MenuItem: FC<MenuItemProps> = ({ item, navigate, selectedPage }) => {
  function handleNavigate() {
    navigate(item.title)
  }

  const isCurrentPage =
    selectedPage?.toLowerCase() === item.title?.toLowerCase()

  return (
    <Pressable
      onPress={handleNavigate}
      style={{
        ...tw`items-center justify-center`,
        width: '20%',
      }}
    >
      <AntDesign
        name={item.iconName}
        style={tw`text-xl ${isCurrentPage ? 'text-blue-500' : 'text-gray-500'}`}
      />
      <Text
        style={{
          ...tw`text-xs ${isCurrentPage ? 'text-blue-500' : 'text-gray-500'}`,
          marginTop: 1,
        }}
      >
        {item.title}
      </Text>
    </Pressable>
  )
}

export default MenuItem
