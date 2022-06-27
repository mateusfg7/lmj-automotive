import Image from 'next/image'

const BlackFilter = () => (
  <div className='w-full h-full bg-[rgba(5,7,12,0.3)]' />
)

export function ServicesSection() {
  return (
    <div id='services' className='lg:h-screen text-black'>
      <div className='h-full grid grid-areas-services grid-cols-services grid-rows-services'>
        <section className='red-test grid-in-sec1 bg-white flex flex-col pl-[calc((100vw-85vw)/2)] py-5'>
          <header>
            <h1 className='text-3xl font-bold'>Nossos Serviços</h1>
          </header>
          <div className='flex-1 flex blue-test py-5'>
            <div className='flex-1'>
              <h2 className='text-2xl font-normal mb-4'>
                Falta de algo no Automóvel
              </h2>
              <ul className='list-disc list-inside text-lg'>
                <li>Fornecimento de combustível</li>
                <li>Troca de óleo</li>
                <li>Troca de refil de água do carro</li>
              </ul>
            </div>
            <div className='flex-1'>
              <h2 className='text-2xl font-normal mb-4'>Manutenção Simples</h2>
              <ul className='list-disc list-inside text-lg'>
                <li>Carro furou o pneu</li>
                <li>Bateria descarregou</li>
                <li>Roda saiu do carro</li>
                <li>Pane elétrica</li>
                <li>Troca do fluido de freio</li>
                <li>Aditivo de radiador</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='grid-in-sec2 bg-[url("/img/mechanics-lmj-uniform.jpg")] bg-center bg-no-repeat bg-cover'>
          <BlackFilter />
        </section>
        <section className='grid-in-sec3 bg-[url("/img/young-woman-calling-assistance.jpg")] bg-center bg-no-repeat bg-cover'>
          <BlackFilter />
        </section>
        <section className='grid-in-sec4 bg-[rgb(5,7,12)]'>Section 3</section>
      </div>
    </div>
  )
}
