import Image from "next/image";
import { EventData } from "./EventData";
import makeLink from "./makeLink";

export default function EventNotice(data: EventData) {
    return (
        <div className="container my-2 bg-gradient-to-l from-gray-100 dark:from-gray-800 p-4 rounded-xl">
          <h2>{data.title}</h2>
          <div className="flex gap-4 py-4">
            <div className="flex-none w-48 h-48">
              <Image width={500} height={500} src={data.image} alt="event-image-placeholder" className="object-scale-down max-h-full m-auto"/>
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
