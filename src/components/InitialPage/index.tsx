import { Header } from '../Header'
import { Main } from '../Main'
import { MainSection } from '../MainSection'

export function InitialPage() {
  return (
    <div className='h-screen text-white bg-[url("/img/background.jpg")] bg-fixed bg-center bg-no-repeat bg-cover'>
      <div className='bg-[rgba(0,0,0,0.5)] h-full'>
        <MainSection>
          <Header />
          <Main />
        </MainSection>
      </div>
    </div>
  )
}
