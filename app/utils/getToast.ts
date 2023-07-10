import Toast from 'react-native-root-toast'

export function getToast(error: string) {
	Toast.show(error, {
		duration: Toast.durations.LONG,
		position: -80,
		shadow: false,
		animation: true,
		hideOnPress: true,
		delay: 0,
		backgroundColor: '#F9D7DA',
		textColor: '#721C23',
	})
}