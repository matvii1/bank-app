import { Padding } from '@/components/ui'
import React, { FC } from 'react'
import tw from 'twrnc'
import { MenuList } from './components'
import { TypeRootParamList } from '@/navigation/types'


type FooterProps = {
  navigate: (path: keyof TypeRootParamList) => void
  selectedPage: string | undefined
}

const Footer: FC<FooterProps> = ({ navigate, selectedPage}) => {
  return (
    <Padding
      style={{
        ...tw`flex-row justify-between items-center bg-gray-50 px-0 pb-5 pt-2`,
        borderTopColor: '#E1E1E1',
        borderTopWidth: 1,
      }}
    >
      <MenuList navigate={navigate} selectedPage={selectedPage} />
    </Padding>
  )
}

export default Footer
