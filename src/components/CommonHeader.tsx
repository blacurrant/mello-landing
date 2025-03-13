import { cn } from "@/utils"

interface CommonHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
  props?: React.HTMLAttributes<HTMLDivElement>
}

const CommonHeader = ({ className, children, ...props }: CommonHeaderProps) => {
  return (
    <div
      className={cn("w-full flex flex-col gap-4 text-3xl sm:text-5xl font-heading text-pretty", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export default CommonHeader
