import {
  PriceCard,
  PriceCardHeader,
  PriceCardBody,
  LineDetail,
  LineDetailTitle,
  LineDetailService,
  LineDetailServiceTitle,
  LineDetailPrice,
  LineDetailPriceTitle,
} from './styles'

import prices from './prices.json'

export function PriceSection() {
  return (
    <div className='min-h-screen md:py-28 bg-gray-100' id='prices'>
      <div className='content-w flex justify-center'>
        <PriceCard>
          <PriceCardHeader>
            <h1>Tabela de preços</h1>
          </PriceCardHeader>
          <PriceCardBody>
            <LineDetailTitle>
              <LineDetailServiceTitle>Serviço</LineDetailServiceTitle>
              <LineDetailPriceTitle>Carro</LineDetailPriceTitle>
              <LineDetailPriceTitle>Caminhão</LineDetailPriceTitle>
            </LineDetailTitle>
            {prices.map((serviceDetail, index) => (
              <LineDetail key={index}>
                <LineDetailService>{serviceDetail.service}</LineDetailService>
                <LineDetailPrice>
                  R$ {serviceDetail.price_in_reais.car}
                </LineDetailPrice>
                <LineDetailPrice>
                  R$ {serviceDetail.price_in_reais.truck}
                </LineDetailPrice>
              </LineDetail>
            ))}
          </PriceCardBody>
        </PriceCard>
      </div>
    </div>
  )
}
