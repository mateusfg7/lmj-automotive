import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Main } from '../components/Main'

const Home: NextPage = () => {
  return (
    <div>
      <div className='h-screen flex flex-col text-white bg-[url("/img/background.jpg")] bg-fixed bg-center bg-no-repeat bg-cover'>
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default Home
