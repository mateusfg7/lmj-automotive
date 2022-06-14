import Image from 'next/image'

export function Header() {
  return (
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
  )
}
