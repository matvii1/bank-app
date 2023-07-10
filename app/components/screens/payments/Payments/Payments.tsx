import { Layout } from '@/components/layouts'
import { Heading, Padding } from '@/components/ui'
import { FC } from 'react'
import { Contacts, Other } from '../components'

const Payments: FC = () => {
  return (
    <Layout>
      <Padding>
        <Heading text="Payments" />
        <Contacts />
      </Padding>
      <Other />
    </Layout>
  )
}

export default Payments
