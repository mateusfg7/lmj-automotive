import type { NextPage } from 'next'
import { AboutUsSection } from '../components/AboutUsSection'
import { InitialPage } from '../components/InitialPage'

const Home: NextPage = () => {
  return (
    <div>
      <InitialPage />
      <AboutUsSection />
    </div>
  )
}

export default Home
