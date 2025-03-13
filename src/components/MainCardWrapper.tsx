import { cn } from "@/utils"

interface MainCardWrapperProps {
    className?: string
    children: React.ReactNode
}

const MainCardWrapper = ({children, className   }: MainCardWrapperProps) => {
        return <div className={cn("w-full h-full mx-auto max-w-screen-xl px-2.5 md:px-20", className)}>{children}</div>
}

export default MainCardWrapper