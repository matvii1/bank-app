import { Layout } from '@/components/layouts'
import { Padding } from '@/components/ui'
import { FC } from 'react'
import { ScrollView } from 'react-native'
import { Header } from '../Header'
import { Message } from '../Message'
import { SupportField } from '../SupportField'
import { useMessages } from '../hooks'

const Support: FC = () => {
  const { messages } = useMessages()

  return (
    <Layout isScrollView={false}>
      <Header />

      <Padding style={{
        height: '90%',
      }}>
        <ScrollView
          contentContainerStyle={{
            borderColor: 'gray',
            borderRadius: 10,
            paddingTop: 10,
            justifyContent: 'flex-end',
          }}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((message) => (
            <Message key={message._id} message={message} />
          ))}
        </ScrollView>

        <SupportField />
      </Padding>
    </Layout>
  )
}

export default Support
