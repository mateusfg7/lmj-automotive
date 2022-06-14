import Link from 'next/link'
import { MainSection } from '../MainSection'

export function AboutUs() {
  return (
    <div id='about-us' className='h-screen text-white bg-[rgb(5,7,12)]'>
      <MainSection>
        <div className='w-full h-full flex'>
          <div className='h-full flex-1 flex flex-col justify-center'>
            <div className='h-[60%] flex flex-col justify-center items-start pr-20'>
              <h1 className='text-[#CCCFD3] text-3xl py-5 border-b-2 border-[#CCCFD3] duration-500 hover:text-white hover:border-white'>
                Ética
              </h1>
              <h1 className='text-[#CCCFD3] text-3xl py-5 border-b-2 border-[#CCCFD3] duration-500 hover:text-white hover:border-white'>
                Honestidade
              </h1>
              <h1 className='text-[#CCCFD3] text-3xl py-5 border-b-2 border-[#CCCFD3] duration-500 hover:text-white hover:border-white'>
                Comprometimento
              </h1>
              <h1 className='text-[#CCCFD3] text-3xl py-5 border-b-2 border-[#CCCFD3] duration-500 hover:text-white hover:border-white'>
                Excelência
              </h1>
            </div>
          </div>
          <div className='h-full flex-1 flex flex-col justify-center'>
            <div className='h-[60%] flex flex-col justify-between items-start'>
              <h1 className='text-3xl font-bold italic'>Quem Somos?</h1>
              <p className='text-xl text-justify leading-8'>
                A <span className='font-normal'>LMJ Automotive</span> é uma
                empresa do ramo de oficinas mecânicas. Foi fundada no ano de
                2020 pelos empreendedores Guilherme Augusto, Júlia Cristina,
                Lívia Izabella, Lucas Alexandre, Maria Clara e Mateus Felipe com
                o intuito de inovar o mercado de automóveis por meio da
                implementação de oficinas móveis.
              </p>
              <div className='w-full flex justify-end'>
                <Link href='/about-us'>
                  <a className='w-max duration-300 text-xl font-normal border-white border-2 p-5 rounded-3xl hover:bg-white hover:text-[rgb(5,7,12)]'>
                    Leia Mais
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MainSection>
    </div>
  )
}
