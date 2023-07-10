import { ICard } from '@/components/screens/home/types/ICard'
import { Text } from 'react-native'
import tw from 'twrnc'

const CardType = ({ card }: { card: ICard }) => {
  return <Text style={tw`text-slate-600 font-semibold`}>{card.type}</Text>
}

export default CardType
