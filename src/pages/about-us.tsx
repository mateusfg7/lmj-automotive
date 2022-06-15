import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { MainSection } from '../components/MainSection'

function AboutUs() {
  return (
    <div className='bg-[rgb(5,7,12)] text-white h-screen'>
      <Head>
        <title>LMJ Automotive | Sobre Nós</title>
      </Head>

      <MainSection>
        <Header />
        <div className='mt-52 flex flex-col gap-10 justify-center items-center lg:items-start'>
          <h1 className='text-2xl lg:text-5xl text-center'>
            Esta Página esta em desenvolvimento...
          </h1>
          <Link href='/'>
            <a className='w-max text-lg border-2 border-[#CCCFD3] text-[#CCCFD3] font-bold rounded-xl p-5 hover:bg-[#CCCFD3] hover:text-[rgb(5,7,12)] duration-300'>
              Página Inicial
            </a>
          </Link>
        </div>
      </MainSection>
    </div>
  )
}

export default AboutUs
