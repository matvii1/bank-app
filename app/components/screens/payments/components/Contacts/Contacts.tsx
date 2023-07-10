import { Loader } from '@/components/ui'
import { SubHeading } from '@/components/ui/SubHeading'
import React from 'react'
import { ScrollView, View } from 'react-native'
import tw from 'twrnc'
import { useContacts } from '../../hooks'
import { ContactItem } from '../ContactItem'

const Contacts = () => {
  const { contacts, isLoading } = useContacts()

  return (
    <View style={tw`my-8`}>
      <SubHeading text="Contacts" />
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={tw`flex-row gap-2 mt-5`}
        >
          {contacts.map((contact) => (
            <ContactItem key={contact._id} contact={contact} />
          ))}
        </ScrollView>
      )}
    </View>
  )
}

export default Contacts
