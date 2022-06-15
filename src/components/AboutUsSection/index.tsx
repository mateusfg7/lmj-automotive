import Link from 'next/link'
import { MainSection } from '../MainSection'

export function AboutUsSection() {
  return (
    <div id='about-us' className='lg:h-screen text-white bg-[rgb(5,7,12)]'>
      <MainSection>
        <div className='w-full h-full flex py-12 lg:p-0'>
          <div className='hidden lg:flex flex-col justify-center w-full h-full flex-1 '>
            <div className='h-[60%] flex flex-col justify-center items-start pr-20'>
              <h1 className='lmj-value-titles'>Ética</h1>
              <h1 className='lmj-value-titles'>Honestidade</h1>
              <h1 className='lmj-value-titles'>Comprometimento</h1>
              <h1 className='lmj-value-titles'>Excelência</h1>
            </div>
          </div>
          <div className='h-full flex-1 flex flex-col justify-center px-7 lg:p-0'>
            <div className='lg:h-[60%] flex flex-col justify-between items-start'>
              <h1 className='w-full text-center lg:text-left text-3xl font-bold lg:p-0 mb-14 lg:m-0'>
                Quem Somos?
              </h1>
              <p className='text-xl text-justify leading-8'>
                A <span className='font-normal'>LMJ Automotive</span> é uma
                empresa do ramo de oficinas mecânicas. Foi fundada no ano de
                2020 pelos empreendedores Guilherme Augusto, Júlia Cristina,
                Lívia Izabella, Lucas Alexandre, Maria Clara e Mateus Felipe com
                o intuito de inovar o mercado de automóveis por meio da
                implementação de oficinas móveis.
              </p>
              <div className='w-full flex justify-center lg:justify-end mt-12 lg:m-0'>
                <Link href='/about-us'>
                  <a className='w-2/3 lg:w-max duration-300 text-center text-xl font-normal border-white border-2 p-5 rounded-xl hover:bg-white hover:text-[rgb(5,7,12)]'>
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
