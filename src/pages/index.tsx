import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <div className='h-screen flex flex-col text-white bg-[url("/img/background.jpg")] bg-fixed bg-center bg-no-repeat bg-cover'>
        <header className='border-red-600 border-2 bg-[rgba(0,0,0,0.5)] flex justify-between'>
          <div className='border-red-600 border-2 max-w-[11rem] flex items-center justify-center'>
            <Image
              src='/img/logo.png'
              width={95.44}
              height={100}
              layout='intrinsic'
              alt='LMJ Automotive'
              title='Logo'
            />
            <Image
              src='/img/tipografia.png'
              width={147.82}
              height={54.77}
              layout='intrinsic'
              alt='LMJ Automotive'
              title='Logo'
            />
          </div>
          <div className='border-red-600 border-2 flex items-center justify-center'>
            Menu
          </div>
          <div className='border-red-600 border-2 flex items-center justify-center'>
            Social
          </div>
        </header>
        <main className='border-red-600 border-2 bg-[rgba(0,0,0,0.5)] flex-1 flex flex-col justify-center p-20'>
          <div className='border-red-600 border-2 w-2/5 text-3xl'>
            <h1 className='font-normal text-5xl mb-20'>
              Seu problema, nossa especialidade!
            </h1>
            <p className='italic'>
              Atendendo a <span className='font-normal'>emergências</span> na
              estrada, com o uso de{' '}
              <span className='font-normal'>
                métodos e ferramentas inovadores
              </span>
              , fornecendo um amparo e até o{' '}
              <span className='font-normal'>transporte</span> se necessário.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
