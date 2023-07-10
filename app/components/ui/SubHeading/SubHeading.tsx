import { FC } from 'react'
import { Text } from 'react-native'
import tw from 'twrnc'
import { Padding } from '../Padding'

type SubHeadingProps = {
  text: string
}

const SubHeading: FC<SubHeadingProps> = ({ text }) => {
  const styles = tw`text-gray-800 font-bold text-xl`

  return (
    <Padding>
      <Text style={styles}>{text}</Text>
    </Padding>
  )
}

export default SubHeading
