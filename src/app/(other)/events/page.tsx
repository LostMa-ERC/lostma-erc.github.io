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
        <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight">
          LostMa Events
        </h1>
        {Object.values(events).map((event, idx) =>
          <article className="p-1 w-full" key={`event-${idx}`}>
            <div className="my-2 p-4 rounded shadow-lg border-solid border-2">
              < EventNotice data={event} />
            </div>
          </article>
        )}
    </div>
  );
};

export default News;