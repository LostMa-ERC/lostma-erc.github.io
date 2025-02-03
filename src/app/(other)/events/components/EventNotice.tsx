import Image from "next/image";
import { EventDataType } from "@/types/EventData";
import EventLink from "./EventLink";
import PlaceHolder from "@/public/images/lostma_logo.png"

const EventNotice = ({data}: {data:EventDataType}) => {
    return (
        <>
          <h2 className="p-1 w-fit md:text-xl text-2xl">
            {data.title}
          </h2>
          <div className="flex gap-4 py-4 font-light">
            <div className="flex-none md:w-48 md:h-48 w-24 h-24">
              <Image width='0' height='0' src={PlaceHolder} alt="event-image-placeholder" className="object-scale-down max-h-full m-auto rounded"/>
            </div>
            <div className="flex-1">
              <p>{data.date}</p>
              <p>{data.venue} &#45; {data.city}</p>
              <p>{data.description}</p>
              <EventLink data={data.link} />
            </div>
          </div>
        </>
    )
};

export default EventNotice;