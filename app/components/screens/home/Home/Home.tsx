import { FC } from 'react'
import { Cards, Header, NewCard } from '../components'
import { Layout } from '@/components/layouts'

const Home: FC = () => {
  return (
    <Layout>
      <Header />
      <Cards />
      <NewCard />
    </Layout>
  )
}

export default Home
