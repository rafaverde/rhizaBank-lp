import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="flex md:flex md:flex-row flex-col-reverse lg:justify-between items-center md:items-center lg:m-auto px-4 xl:px-0 py-7 md:py-14 w-full lg:max-w-[1170]">
      {children}
    </div>
  )
}
