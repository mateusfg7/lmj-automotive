import type { NextPage } from 'next'
import { AboutUs } from '../components/AboutUs'
import { InitialPage } from '../components/InitialPage'

const Home: NextPage = () => {
  return (
    <div>
      <InitialPage />
      <AboutUs />
    </div>
  )
}

export default Home
