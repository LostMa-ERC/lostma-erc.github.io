import Image from "next/image";
import { EventData } from "./EventData";
import makeLink from "./makeLink";
import PlaceHolder from "@/public/images/lostma_logo.png"

export default function EventNotice(data: EventData) {
    return (
        <div className="my-2 p-4 rounded shadow-lg border-solid border-2">
          <h2 className="p-1 w-fit md:text-xl text-2xl">
            {data.title}
          </h2>
          <div className="flex gap-4 py-4 font-light">
            <div className="flex-none md:w-48 md:h-48 w-24 h-24">
              <Image src={PlaceHolder} alt="event-image-placeholder" className="object-scale-down max-h-full m-auto rounded"/>
            </div>
            <div className="flex-1">
              <p>{data.date}</p>
              <p>{data.venue} &#45; {data.city}</p>
              <p>{data.description}</p>
              {makeLink(data)}
            </div>
          </div>
        </div>
    )
}
