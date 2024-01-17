import { Main } from "../Main";
import { Header } from "../header";

export function InitialPage() {
  return (
    <div className='h-screen text-white bg-[url("/img/background.jpg")] bg-fixed bg-center bg-no-repeat bg-cover'>
      <div className="bg-[rgba(5,7,12,0.8)] h-full">
        <Header />
        <Main />
      </div>
    </div>
  );
}
