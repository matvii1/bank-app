import { TypeRootParamList } from '@/navigation/types'
import React, { FC } from 'react'
import { IFooterItem } from '../../IFooterItem'
import { MenuItem } from '../MenuItem'

const menu: IFooterItem[] = [
  {
    iconName: 'creditcard',
    title: 'Home',
  },
  {
    iconName: 'pay-circle1',
    title: 'Payments',
  },
  {
    iconName: 'switcher',
    title: 'Services',
  },
  {
    iconName: 'message1',
    title: 'Support',
  },
  {
    iconName: 'ellipsis1',
    title: 'More',
  },
]

type MenuListProps = {
  navigate: (path: keyof TypeRootParamList) => void
  selectedPage: string | undefined
}

const MenuList: FC<MenuListProps> = ({ navigate, selectedPage }) => {
  return (
    <>
      {menu.map((item) => (
        <MenuItem
          key={item.title}
          item={item}
          navigate={navigate}
          selectedPage={selectedPage}
        />
      ))}
    </>
  )
}

export default MenuList
