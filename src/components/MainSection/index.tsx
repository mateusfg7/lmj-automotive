interface MainSectionProps {
  children: React.ReactNode
}

export const MainSection = ({ children }: MainSectionProps) => {
  return (
    <div className='h-full flex flex-col m-auto md:w-[85%]'>{children}</div>
  )
}
