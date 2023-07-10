import { FC } from 'react'
import { Text } from 'react-native'
import tw from 'twrnc'
import { Padding } from '../Padding'

type HeadingProps = {
  text: string
  isCentered?: boolean
}

const Heading: FC<HeadingProps> = ({ text, isCentered = false }) => {
  const styles = tw`text-gray-800 font-bold text-2xl ${
    isCentered ? `text-center` : `text-left`
  }`

  return (
    <Padding>
      <Text style={styles}>{text}</Text>
    </Padding>
  )
}

export default Heading
