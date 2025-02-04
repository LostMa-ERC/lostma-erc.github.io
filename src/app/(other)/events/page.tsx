import EventNotice from "./components/EventNotice";
import jsonData from "@/data/events.json";
import { fetchChronologicalData } from "@/app/functions/fetchData";
import { EventDataType } from "@/types/EventData";

// Fetch the sorted event data and convert it to unknown / undo the generic fetch function's type
const array:unknown = await fetchChronologicalData({arrays: jsonData})
// Cast the sorted array's items to the event data type
let events = array as Array<EventDataType>;

const News = () => {
  return (
    <div className="gap-4">
        <h1 className="my-2 inline-block text-2xl font-bold text-slate-900 tracking-tight md:hidden">
          Events
        </h1>
        <div className="md:py-2 flex justify-center">
          <div className="md:grid md:grid-cols-3 gap-x-12 md:gap-y-8 md:space-y-0 space-y-8">
            {Object.values(events).map((event, idx) =>
              <article className="max-w-96 h-96 overflow-y-scroll" id={`${idx}`} key={`event-${idx}`}>
                < EventNotice data={event} />
              </article>
            )}
          </div>
        </div>
    </div>
  );
};

export default News;