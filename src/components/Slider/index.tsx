import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'

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
      className='h-full relative flex justify-center items-center'
      interval={10}
      isPlaying
      infinite
      isIntrinsicHeight
    >
      <Slider className='w-full h-max'>
        {reports.map((report, index) => {
          return (
            <Slide key={index} index={index}>
              <div className='h-full flex justify-center items-center px-4 text-justify font-normal leading-7 text-lg text-white italic'>
                {report}
              </div>
            </Slide>
          )
        })}
      </Slider>
    </CarouselProvider>
  )
}
