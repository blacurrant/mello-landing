import Image from "next/image"

interface DiscordMessageProps {
  userName: string
  timeStamp: string
  avatarSrc?: string
  avatarAlt: string
  badgeText?: string
  badgeColor?: string
  title?: string
  content: {
    [key: string]: string
  }
}

export const DiscordMessage = ({
  userName,
  timeStamp,
  avatarSrc,
  avatarAlt,
  badgeText,
  badgeColor = "#43b581",
  title,
  content,
}: DiscordMessageProps) => {
  return (
    <div className="flex w-full items-start justify-start">
      <div>
        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
        {/* <Image src={avatarSrc} alt={avatarAlt} width={40} height={40} className="object-cover rounded-full mr-3"/> */}
      </div>

      <div className="size-full">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">{userName}</p>
            <div className="text-sm bg-discord-brand-color/70 text-brand-25 rounded-sm px-2">APP</div>
            <p className="text-xs text-gray-500">Today at {timeStamp}</p>

          </div>
        </div>
        <div className="flex flex-col w-full max-w-xl ring-1 ring-black/20 bg-black/20 rounded-sm p-2">
          <div className="flex justify-between items-center">
            <p className="text-sm font-semibold ">{title}</p>
            <p className="text-xs bg-green-500/30 min-w-24 p-1 text-center rounded-sm ring-1 ring-green-500/80 text-brand-25">
              {badgeText}
            </p>
          </div>
          <div className="flex flex-col gap-1 p-4">
            {Object.entries(content).map(([key, value]) => (
              <div className="flex gap-2 items-center" key={key}>
                <p className="text-sm font-light text-gray-400/60">{key}:</p>
                <p className="text-sm text-gray-400">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
