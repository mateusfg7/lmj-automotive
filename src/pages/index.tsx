import type { NextPage } from 'next'
import Head from 'next/head'
import { AboutUsSection } from '../components/AboutUsSection'
import { InitialPage } from '../components/InitialPage'
import { PriceSection } from '../components/PricesSection'
import { ServicesSection } from '../components/ServicesSection'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LMJ Automotive | O melhor socorro, na pior hora!</title>
      </Head>

      <InitialPage />
      <AboutUsSection />
      <ServicesSection />
      <PriceSection />
    </div>
  )
}

export default Home
