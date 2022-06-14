import Image from 'next/image'

interface MenuProps {
  href: string
  children: React.ReactNode
}

const Menu = ({ href, children }: MenuProps) => {
  return (
    <a href={href} className='hover:text-white underline-offset-4'>
      {children}
    </a>
  )
}

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
              <Menu href='#'>Inicio</Menu>
            </li>
            <li>
              <Menu href='#'>Sobre nós</Menu>
            </li>
            <li>
              <Menu href='#'>Serviços</Menu>
            </li>
            <li>
              <Menu href='#'>Contacto</Menu>
            </li>
          </ul>
        </nav>
      </div>
      <div className='flex items-center justify-center'>Social</div>
    </header>
  )
}
