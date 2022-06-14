interface MainSectionProps {
  children: React.ReactNode
}

export const MainSection = ({ children }: MainSectionProps) => {
  return <div className='h-full w-[85%] flex flex-col m-auto'>{children}</div>
}
