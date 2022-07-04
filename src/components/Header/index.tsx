import Image from 'next/image'
import Link from 'next/link'

import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

export function Header() {
  return (
    <header className='flex flex-col items-center pt-5 font-normal text-xl text-[#acb2ba] lg:pt-10 lg:flex-row lg:justify-between'>
      <div className='max-w-[11rem] flex items-center justify-center'>
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
      <div className='hidden flex-1 items-center pl-28 lg:flex'>
        <nav className='flex-1'>
          <ul className='flex justify-left gap-16 min-gap-2'>
            <li>
              <Link href='/'>
                <a className='menu-item'>Inicio</a>
              </Link>
            </li>
            <li>
              <Link href='/#about-us'>
                <a className='menu-item'>Sobre nós</a>
              </Link>
            </li>
            <li>
              <a className='menu-item' href='#services'>
                Serviços
              </a>
            </li>
            {/* <li>
              <a className='menu-item' href='#contact'>
                Contacto
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
      <div className='hidden text-2xl items-center justify-center gap-6 lg:flex'>
        <a
          href='https://www.instagram.com/lmj_automotive/'
          className='menu-item'
        >
          <BsInstagram />
        </a>
        <a href='https://wa.me/+5537998440073' className='menu-item'>
          <BsWhatsapp />
        </a>
      </div>
    </header>
  )
}
