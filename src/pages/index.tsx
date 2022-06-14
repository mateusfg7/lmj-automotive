import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { MainSection } from '../components/MainSection'

const Home: NextPage = () => {
  return (
    <div>
      <div className='h-screen text-white bg-[url("/img/background.jpg")] bg-fixed bg-center bg-no-repeat bg-cover'>
        <div className='bg-[rgba(0,0,0,0.5)] h-full'>
          <MainSection>
            <Header />
            <Main />
          </MainSection>
        </div>
      </div>
    </div>
  )
}

export default Home
