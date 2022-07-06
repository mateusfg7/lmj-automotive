import tw from 'tailwind-styled-components'

export const Container = tw.div`
  h-full w-full
  flex items-center justify-center
  md:p-8
`

export const PriceCard = tw.div`
  w-full md:w-2/3
  p-3 md:p-6
  text-black
  font-normal
  md:text-xl
  md:bg-white
  shadow-2xl
  md:rounded-3xl
  flex flex-col
`

export const PriceCardHeader = tw.header`
  flex justify-center items-center
  p-2 md:p-4
  border border-black
  rounded-2xl
  mb-2 md:mb-8

  h1 {
    text-xl md:text-2xl
    font-bold
  }
`

export const PriceCardBody = tw.div`
  flex-1
`

export const LineDetail = tw.div`
  flex
  py-4 md:p-4
  border-t border-black
`
export const LineDetailTitle = tw(LineDetail)`
  border-t-0  
  border-b-2 border-black
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
