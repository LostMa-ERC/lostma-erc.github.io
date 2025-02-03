import EventNotice from "./components/EventNotice";
import jsonData from "@/data/events.json";

const News = () => {
  return (
    <div className="gap-4">
        <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight">
          LostMa Events
        </h1>

        <div className="container">
          {Object.values(jsonData).map((event, idx) =>
            <article className="p-1" key={`event-${idx}`}>
              <div className="my-2 p-4 rounded shadow-lg border-solid border-2">
                < EventNotice data={event} />
              </div>
            </article>
          )}
        </div>

    </div>
  );
};

export default News;