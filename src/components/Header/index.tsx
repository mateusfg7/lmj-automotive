import Image from 'next/image'

export function Header() {
  return (
    <header className='flex justify-between font-normal text-xl pt-10 text-[#acb2ba]'>
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
      <div className='flex-1 flex items-center pl-28'>
        <nav className='flex-1'>
          <ul className='flex justify-left gap-16'>
            <li>
              <a className='menu-item' href='#home'>
                Inicio
              </a>
            </li>
            <li>
              <a className='menu-item' href='#about-us'>
                Sobre nós
              </a>
            </li>
            <li>
              <a className='menu-item' href='#services'>
                Serviços
              </a>
            </li>
            <li>
              <a className='menu-item' href='#contact'>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex items-center justify-center'>Social</div>
    </header>
  )
}
