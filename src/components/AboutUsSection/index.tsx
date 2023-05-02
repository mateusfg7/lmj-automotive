import Link from 'next/link'
import { MainSection } from '../MainSection'

export function AboutUsSection() {
  const Value = ({ title }: { title: string }) => (
    <h1 className='text-[#CCCFD3] text-center text-3xl hover:text-white border-b-2 border-[#CCCFD3] hover:border-white py-5 duration-500'>
      {title}
    </h1>
  )

  const Contact = ({
    name,
    instagram,
  }: {
    name: string
    instagram: string
  }) => (
    <a
      href={`https://www.instagram.com/${instagram}/`}
      target='_blank'
      className='hover:underline'
    >
      {name}
    </a>
  )

  return (
    <div id='about-us' className='lg:h-screen text-white bg-[rgb(5,7,12)]'>
      <div className='content-w h-full flex py-12 lg:p-0'>
        <div className='hidden lg:flex flex-col justify-center w-full h-full flex-1'>
          <div className='h-[60%] flex flex-col justify-center items-start pr-20'>
            <Value title='Ética' />
            <Value title='Honestidade' />
            <Value title='Comprometimento' />
            <Value title='Excelência' />
          </div>
        </div>
        <div className='flex-1 flex flex-col justify-center px-7 lg:p-0'>
          <div className='lg:h-[60%] flex flex-col justify-between items-start'>
            <h1 className='w-full text-center lg:text-left text-3xl font-bold lg:p-0 mb-14 lg:m-0'>
              Quem Somos?
            </h1>
            <p className='text-xl text-justify leading-8'>
              A <span className='font-normal'>LMJ Automotive</span> é uma
              empresa do ramo de oficinas mecânicas. Foi fundada no ano de 2020
              pelos empreendedores Guilherme Augusto,{' '}
              <Contact name='Júlia Cristina' instagram='juliacristina_soares' />
              , <Contact
                name='Lívia Izabella'
                instagram='liviaizabella1'
              />,{' '}
              <Contact name='Lucas Alexandre' instagram='lucas_alexandre110' />,{' '}
              <Contact name='Maria Clara' instagram='d_claara' /> e{' '}
              <Contact name='Mateus Felipe' instagram='mateusfg7' /> com o
              intuito de inovar o mercado de automóveis por meio da
              implementação de oficinas móveis.
            </p>
            <div />
          </div>
        </div>
      </div>
    </div>
  )
}
