import { TypeRootParamList } from '@/navigation/types'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TypeRootParamList {}
  }
}
