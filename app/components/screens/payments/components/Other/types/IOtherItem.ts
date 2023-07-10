import { IFooterItem } from '@/components/layouts/Footer/IFooterItem'

export interface IOtherItem extends Pick<IFooterItem, 'iconName'> {
	title: string
}
