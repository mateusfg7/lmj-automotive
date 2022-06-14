import { Header } from '../Header'
import { Main } from '../Main'
import { MainSection } from '../MainSection'

export function InitialPage() {
  return (
    <div className='h-screen text-white bg-[url("/img/background.jpg")] bg-scroll bg-center bg-no-repeat bg-cover'>
      <div className='bg-[rgba(13,15,20,0.6)] h-full'>
        <MainSection>
          <Header />
          <Main />
        </MainSection>
      </div>
    </div>
  )
}
