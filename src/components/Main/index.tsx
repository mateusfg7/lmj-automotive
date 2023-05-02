export function Main() {
  return (
    <main
      className='content-w h-full flex flex-col justify-start md:justify-center px-5 pt-32 md:p-0'
      id='home'
    >
      <div className='flex flex-col justify-between gap-5 md:gap-28 lg:w-1/2'>
        <h1 className='font-bold text-4xl lg:text-5xl text-center lg:text-left'>
          O melhor socorro,
          <br className='hidden md:block' /> na pior hora!
        </h1>
        <p className='italic text-justify text-2xl text-[#EBEBEB] lg:text-left md:leading-relaxed'>
          Atendendo a <span className='font-normal'>emergências</span> na
          estrada, com o uso de{' '}
          <span className='font-normal'>métodos e ferramentas portáteis</span>,
          fornecendo um amparo e até o{' '}
          <span className='font-normal'>transporte</span> se necessário.
        </p>
      </div>
    </main>
  )
}
