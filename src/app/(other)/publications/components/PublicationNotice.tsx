'use client'
import { NewsType } from "@/types/NewsType";
import React, { createContext } from "react";
import HeaderComponent from "./Header";

const HeaderContextData = createContext<NewsType|null>(null);

const PublicationNotice = ({data}: {data:NewsType}) => {

    const date = data.start.toString()

    if (Array.isArray(data.detail)) {
      var authors = data.detail.join(', ')
    }
    else {
      var authors = data.detail
    }

    return (
        <article className="bg-white/50 rounded-md md:rounded-lg overflow-hidden">
  <HeaderContextData.Provider value={data}>
    <HeaderComponent />
  </HeaderContextData.Provider>
  <div className="grid md:grid-cols-2 gap-4 p-4 items-center">
    <div>
      <p className="font-light text-xs md:text-base tracking-wide max-h-40 overflow-y-scroll mb-4">
        {data.description}
      </p>
      <div className="flex justify-center md:justify-start">
        <div className="w-fit mx-auto button text-center">
          <a
            className="text-inherit text-sm md:text-base bg-inherit hover:text-inherit hover:bg-inherit"
            target="_blank"
            rel="noreferrer"
            href={data.link?.url}
          >
            {data.link?.label}
          </a>
        </div>
      </div>
    </div>
    {data.image && (
      <div className="flex justify-center">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-48 md:h-64 object-contain rounded-md"
        />
      </div>
    )}
  </div>
</article>

    )
};

export default PublicationNotice;
export { HeaderContextData };