'use client'
import { NewsType } from "@/types/NewsType";
import React, { createContext } from "react";
import HeaderComponent from "./Header";
import NewsLink from "./NewsLink";
import Link from "next/link";

const HeaderContextData = createContext<NewsType|null>(null);

const NewsComponent = ({data, index}: {data:NewsType, index:number}) => {

  if (data.location) {
    var location = <>
      <div className="font-light tracking-wide text-sm">
        {data.location?.venue} &#45; {data.location?.city}
      </div>
      <hr className="m-2" />
    </>
  }
  else {
    var location = <></>
  }

  if (data.description.length > 250) {
    var description = <div className="space-y-2">
      <div className="flex items-center justify-center bg-gray-300">
        <NewsLink data={data.link} />
      </div>
      <div className="font-light text-sm">{data.description}</div>
    </div>
  }
  else {
    var description = <div>
      <div className="font-light text-base">{data.description}</div>
      <div className="pt-4 flex items-center justify-center">
        <NewsLink data={data.link} />
      </div>
    </div>
  }

  return (
    <article className="rounded md:rounded-lg border-solid border-2 h-full bg-white/50 overflow-y-scroll">

      <Link href={`/news#${index}`}>
        <HeaderContextData.Provider value={data}>
          <HeaderComponent />
        </HeaderContextData.Provider>
      </Link>

      <section className="p-4 md:px-4 rounded md:rounded-lg">
         <div className="flex font-light">
           <div className="flex-1 w-full h-full">
             {location}
             {description}
           </div>
         </div>
       </section>

    </article>
  )
}

export default NewsComponent;
export { HeaderContextData };