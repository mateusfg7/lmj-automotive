import Image from 'next/image'

export function ServicesSection() {
  return (
    <div
      id='services'
      className='lg:h-screen bg-[url("/img/background.jpg")] bg-fixed bg-center bg-no-repeat bg-cover text-black'
    >
      <div className='bg-[rgba(5,7,12,0.6)] h-full grid grid-areas-services grid-cols-services grid-rows-services'>
        <section className='grid-in-sec1 bg-white'>Section 1</section>
        <section className='grid-in-sec2'>Section 2</section>
        <section className='grid-in-sec3'>
          <div className='relative h-full'>
            <Image
              src='/img/man-having-problem-with-his-car.jpg'
              width={1500}
              height={1000}
              layout='fill'
              objectFit='cover'
              alt='Homem tendo problemas com o carro'
            />
          </div>
        </section>
        <section className='grid-in-sec4 bg-[rgb(5,7,12)] text-white'>
          Section 4
        </section>
      </div>
    </div>
  )
}
