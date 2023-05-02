import tw from 'tailwind-styled-components'

export const PriceCard = tw.div`
  w-full md:w-2/3
  text-black
  font-normal
  md:text-xl
  md:bg-white
  shadow-2xl
  md:rounded-3xl
  flex flex-col
  overflow-hidden
`

export const PriceCardHeader = tw.header`
  flex justify-center items-center
  bg-[rgba(172,178,186,0.4)]
  p-2

  text-xl md:text-2xl
  font-bold
`

export const PriceCardBody = tw.div``

export const LineDetail = tw.div`
  flex odd:bg-[rgba(172,178,186,0.2)]
  p-4
`
export const LineDetailTitle = tw(LineDetail)`
  odd:bg-[rgba(172,178,186,0.4)]  
  md:text-2xl
`

export const LineDetailService = tw.div`
  w-3/5
  flex justify-start items-center
`

export const LineDetailServiceTitle = tw(LineDetailService)`
  font-normal
  justify-center
`

export const LineDetailPrice = tw.div`
  flex-1
  flex justify-center items-center
`

export const LineDetailPriceTitle = tw(LineDetailPrice)`
  font-normal
`
