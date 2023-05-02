import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'

import { GrFormPreviousLink, GrFormNextLink } from 'react-icons/gr'

import 'pure-react-carousel/dist/react-carousel.es.css'

export function SliderCarousel() {
  const reports = [
    "Voltando do serviço, o carro do meu patrão, parou de funcionar, como a caminhonete era a diesel pensei que podia ser uma entrada de ar então bati desengripante na caixa do filtro de ar mais não resolveu, bom até hoje não fiquei sabendo o'que realmente era só sei, que fomes rebocando é cheguei em casa 23:00 hrs naquele dia",
    'Um dia de trabalho entregando panfleto de supermercado, em uma determinado local em uma roça não muito longe da cidade, pneu dianteiro do carro fura o pneu, ficamos mais ou menos uma hora esperando pegar sinal no celular pra ligar para informá-los,depois de uns minutos chegaram e fizeram a troca do pneu.',
    'Eu estava na via no horário de pico quando o carro apagou e não ligava de jeito nenhum e muitos carros e motos passando do meu lado e eu comecei a tremer igual vara verde, detalhe é que minha carteira era provisória, mas com muito custo consegui ligar ele e ir embora.',
  ]

  return (
    <CarouselProvider
      naturalSlideWidth={150}
      naturalSlideHeight={150}
      totalSlides={reports.length}
      className='h-full flex flex-col items-center'
      isPlaying
      infinite
      isIntrinsicHeight
    >
      <div className='flex-1 flex justify-center items-center'>
        <Slider className='w-full h-max'>
          {reports.map((report, index) => {
            return (
              <Slide key={index} index={index}>
                <div className='h-full flex justify-center items-center px-1 md:px-4 font-normal text-lg text-white italic'>
                  {report}
                </div>
              </Slide>
            )
          })}
        </Slider>
      </div>
      <div className='flex justify-center gap-5 w-full text-white text-xl pt-6 md:p-0'>
        <ButtonBack>
          <GrFormPreviousLink className='transition rounded-lg bg-[rgba(255,255,255,0.7)] hover:bg-white' />
        </ButtonBack>
        <ButtonNext>
          <GrFormNextLink className='transition rounded-lg bg-[rgba(255,255,255,0.7)] hover:bg-white' />
        </ButtonNext>
      </div>
    </CarouselProvider>
  )
}
