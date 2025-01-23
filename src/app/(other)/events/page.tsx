import EventNotice from "./components/EventNotice";
import jsonData from "@/public/data/events.json";


export default function News() {
  return (
    <div className="gap-4">
        <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight">
          LostMa Events
        </h1>

        <div className="container">
          {Object.values(jsonData).map((obj, idx) =>
            <article className="p-1" key={`event-${idx}`}>
              {EventNotice(obj)}
            </article>
          )}
        </div>

    </div>
  );
}