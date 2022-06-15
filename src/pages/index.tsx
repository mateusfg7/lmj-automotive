import type { NextPage } from 'next'
import Head from 'next/head'
import { AboutUsSection } from '../components/AboutUsSection'
import { InitialPage } from '../components/InitialPage'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LMJ Automotive | O melhor socorro, na pior hora!</title>
      </Head>

      <InitialPage />
      <AboutUsSection />
    </div>
  )
}

export default Home
