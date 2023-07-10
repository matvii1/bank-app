import { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import tw from 'twrnc'

type SuccessAlertProps = {
	text: string
}

const SuccessAlert: FC<SuccessAlertProps> = ({ text }) => {
	return (
		<View style={tw`bg-green-500 p-3 py-4 mt-5 rounded-lg`}>
			<Text style={tw`text-white text-center`}>{text}</Text>
		</View>
	);
};

export default SuccessAlert;
