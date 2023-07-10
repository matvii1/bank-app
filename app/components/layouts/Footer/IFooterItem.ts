import { TypeRootParamList } from '@/navigation/types'
import { AntDesign } from '@expo/vector-icons'

export interface IFooterItem {
  title: keyof TypeRootParamList
  iconName: keyof typeof AntDesign['glyphMap']
}
