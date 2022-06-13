import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <div className='h-screen flex flex-col text-white bg-[url("/img/background.jpg")] bg-fixed bg-center bg-no-repeat bg-cover'>
        <header className='bg-[rgba(0,0,0,0.5)] flex justify-between font-normal text-lg'>
          <div className='max-w-[11rem] p-3 flex items-center justify-center'>
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
          <div className='flex-1 flex items-center'>
            <nav className='flex-1'>
              <ul className='flex justify-evenly'>
                <li>
                  <a href='#'>Inicio</a>
                </li>
                <li>
                  <a href='#'>Sobre nós</a>
                </li>
                <li>
                  <a href='#'>Serviços</a>
                </li>
                <li>
                  <a href='#'>Contacto</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='flex items-center justify-center p-10'>Social</div>
        </header>
        <main className='bg-[rgba(0,0,0,0.5)] flex-1 flex flex-col justify-center p-20'>
          <div className='w-2/5 text-2xl'>
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
