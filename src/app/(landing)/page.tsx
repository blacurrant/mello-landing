import CommonHeader from "@/components/CommonHeader"
import { DiscordMessage } from "@/components/discord-message"
import MainCardWrapper from "@/components/MainCardWrapper"
import { MockDiscordUI } from "@/components/mock-discord-ui"
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Star } from "lucide-react"
import Image from "next/image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

const Page = () => {
  const codeSnippet = `await fetch("http://localhost:3000/api/v1/events", {
  method: "POST",
  body: JSON.stringify({
    category: "sale",
    fields:{
      plan:  "PRO",,
      email: "zoe.martinez2001@email.com",
      amount: 49.00
      }
  }),
  headers: {
    Authorization: "Bearer <YOU_API_KEY>"}
  })`

  return (
    <>
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-brand-100 via-white to-brand-200">
        <MainCardWrapper className="text-center">
          <div className="w-full flex flex-col gap-10 items-center text-center">
            <CommonHeader className="font-bold text-7xl">
              Elevate Your Sponsorship ROI Game!
              <span className="bg-gradient-to-r text-4xl p-2 from-brand-500 to-brand-900 bg-clip-text text-transparent ">
                MelloUp bridges gap between event marketing, sales and data
              </span>
            </CommonHeader>
            <div className="flex flex-col gap-2">
              <p className="text-lg  font-heading">
                Convert More Customers at Conferences by getting AI-powered
                insights on attendees of B2B events
              </p>
              {/* <p className="text-lg  font-heading">
                Get{" "}
                <span className="italic font-bold">instant notifications</span>{" "}
                on your Discord server when your SaaS metrics change.
              </p> */}
            </div>
            <ul className="space-y-2 text-base/7 text-gray-500 text-left flex flex-col items-start">
              {[
                "Set Clear Goals for Your Event",
                "Enrich & Target the Right Audience",
                "Engage & Track Leads Seamlessly",
              ].map((item, index) => (
                <li
                  className=" flex gap-1.5 items-center text-left"
                  key={index}
                >
                  <Check className="size-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="relative w-full max-w-80 py-2 group bg-brand-950 hover:bg-gradient-to-r hover:from-brand-950 hover:via-brand-800 hover:to-brand-950">
              Request Demo{" "}
              <span className="transition-transform group-hover:translate-x-1">
                <ArrowRight className="size-4 shrink-0" />
              </span>
            </Button>
          </div>
        </MainCardWrapper>
      </section>
      <section className="relative pb-4 bg-gradient-to-b from-brand-200 via-brand-25 to-brand-25">
        <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-500" />
        <div className="relative mx-auto">
          <MainCardWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4 lg:-m-4">
              {/* <MockDiscordUI>
                <AnimatedList>
                  <DiscordMessage
                    userName="mySaasProject"
                    timeStamp="12:00PM"
                    avatarSrc="/"
                    avatarAlt="mySaasProject"
                    title="👤New User Joined"
                    badgeText="SignUp"
                    content={{
                      name: "Nishant",
                      email: "soemthing@gmail.com",
                    }}
                  />
                  <DiscordMessage
                    userName="mySaasProject"
                    timeStamp="12:00PM"
                    avatarSrc="/"
                    avatarAlt="mySaasProject"
                    badgeText="Payment"
                    title="💰Payment Received"
                    content={{
                      name: "Hridey",
                      plan: "Pro",
                      amount: "$49.99",
                    }}
                  />
                  <DiscordMessage
                    userName="mySaasProject"
                    timeStamp="12:00PM"
                    avatarSrc="/"
                    avatarAlt="mySaasProject"
                    badgeText="Event"
                    title="🌟Upcoming Event"
                    content={{
                      name: "Product Launch",
                      date: "2024-11-10",
                      time: "10:00AM",
                    }}
                  />
                </AnimatedList>
              </MockDiscordUI> */}
              <Image
                className="rounded-lg w-[100rem]"
                src="/melloup.png"
                alt="melloup"
                width={500}
                height={700}
              />
            </div>
          </MainCardWrapper>
        </div>
      </section>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MainCardWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h1 className="text-center text-base/7 font-semibold text-brand-600">
              Intuitive Monitoring
            </h1>
            <CommonHeader className="text-center">
              How you can leverage MelloUp for your Entire Event Marketing
              Funnel{" "}
            </CommonHeader>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />

              <div className="relative flex h-full flex-col gap-4  overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px) lg:rounded-l-calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Plan with Precision
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Plan smarter with advanced analytics tailored to your goals.
                    Enrich attendee data Get actionable talking points
                    Seamlessly integrate with your CRMs
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border border-gray-700 bg-gray-900 shadow-2xl">
                    <Image
                      className="size-full object-cover object-top"
                      src="/phone-screen.png"
                      alt="phone-screen-displaying-app-interface"
                      fill
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute  inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]" />
            </div>

            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white mac-lg:rounded-t-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Engage Smarter at Events
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Our in-event app equips you with real-time tools to Connect
                    with key attendees Take meaningful notes Auto sync in-event
                    app and platform
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src="/bento-any-event.png"
                    alt="Bento-box-illustration-event-tracking"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]" />
            </div>

            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Enrich & Target the Right Audience
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Get enriched data & insights based on your target audience
                    attending the event
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src="/bento-custom-data.png"
                    alt="Bento-box-illustration-custom-data-tracking"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute  inset-px rounded-lg shadow ring-1 ring-black/5 " />
            </div>

            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
              <div className="relative flex flex-col h-full overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:pb-0 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    Measure Success
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Visualize your sponsorship success with intuitive ROI
                    Metrics Track leads Measure impact Refine your strategies
                    for future events.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          mySaasProject.js
                        </div>
                      </div>
                    </div>
                    x
                    <div className="overflow-hidden">
                      <div className="max-h-[30rem]">
                        <SyntaxHighlighter
                          language="typescript"
                          style={{
                            ...oneDark,
                            'pre[class*="language-"]': {
                              ...oneDark['pre[class*="language-"]'],
                              background: "transparent",
                              overflow: "hidden",
                            },
                            'code[class*="language-"]': {
                              ...oneDark['code[class*="language-"]'],
                              background: "transparent",
                              overflow: "hidden",
                            },
                          }}
                        >
                          {codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            </div>
          </div>
        </MainCardWrapper>
      </section>
      <section className="relative py-24 sm:py-32 bg-white">
        <MainCardWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h2 className="text-center text-base/7 font-semibold text-brand-600">
              Real-World Experiences
            </h2>
            <CommonHeader className="text-center">
              What our customer say
            </CommonHeader>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 px-4 lg:mx-0 mg:max-w-none lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            <div className="flex flex-auto flex-col gap-4 bg-brand-100 p-6 sm:p-8 lg:p-16 rounded-t-[2rem] lg:rounded-tr-none lg:rounded-r-[2rem]">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
                {[1, 2, 3, 4, 5].map((e, i) => {
                  return (
                    <Star
                      key={i}
                      className="size-5 text-brand-600 fill-brand-600"
                    />
                  )
                })}
              </div>
              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
                Ping-Panda has been a game changer for me. I&apos;ve been usin
                it for two months now and seeing sales pop up in real time is
                super satisfying.
              </p>
              <div className="flex flex-col  justify-center lg:justify-start sm:flex-row items-center sm:items-center gap-4 mt-2">
                <Image
                  src="/user-2.png"
                  className="rounded-full object-cover"
                  alt="random user"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col items-center ">
                  <p className="font-semibold flex items-center">
                    Freya Larsson
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col gap-4 bg-brand-100 p-6 sm:p-8 lg:p-16 rounded-t-[2rem] lg:rounded-tr-none lg:rounded-r-[2rem]">
              <div className="flex gap-0.5 mb-2 justify-center lg:justify-start">
                {[1, 2, 3, 4, 5].map((e, i) => {
                  return (
                    <Star
                      key={i}
                      className="size-5 text-brand-600 fill-brand-600"
                    />
                  )
                })}
              </div>
              <p className="text-base sm:text-lg lg:text-lg/8 font-medium tracking-tight text-brand-950 text-center lg:text-left text-pretty">
                Everything Freya on my left said and more, it&apos;s just better
                being on discord and getting all the important popups right
                there.
              </p>
              <div className="flex flex-col  justify-center lg:justify-start sm:flex-row items-center sm:items-center gap-4 mt-2">
                <Image
                  src="/user-1.png"
                  className="rounded-full object-cover"
                  alt="random user"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col items-center ">
                  <p className="font-semibold flex items-center">
                    Bibek glassis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MainCardWrapper>
      </section>
    </>
  )
}

export default Page
