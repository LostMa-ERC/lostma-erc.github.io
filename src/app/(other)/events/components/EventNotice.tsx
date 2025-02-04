import { EventDataType } from "@/types/EventData";
import EventLink from "./EventLink";

const EventNotice = ({data}: {data:EventDataType}) => {
    return (
      <div className="rounded md:rounded-lg border-solid border-2 h-full bg-white/50">
        {/* Header */}
        <div className="bg-primary rounded md:rounded-lg text-white">
          <div className="p-4 ">
            <div className="font-light tracking-wide text-sm pb-2">
              {data.date}
            </div>
            <h2 className="w-fit md:text-xl text-xl">
              {data.title}
            </h2>
          </div>
        </div>
        {/* Body */}
        <div className="p-4 md:px-4 rounded md:rounded-lg">
          <div className="flex font-light">
            <div className="flex-1">
              <div className="font-light tracking-wide text-sm md:text-base">
                {data.venue} &#45; {data.city}
              </div>
              <hr className="m-2" />
              <div className="font-light tracking-wide pb-4">
                {data.description}
              </div>
              <EventLink data={data.link} />
            </div>
          </div>
        </div>
      </div>
    )
};

export default EventNotice;