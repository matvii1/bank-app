import { MaterialIcons } from '@expo/vector-icons'

export interface IMoreItem {
	title: string
	description: string
	icon: keyof typeof MaterialIcons.glyphMap
}