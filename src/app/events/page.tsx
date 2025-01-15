import EventNotice from "./components/EventNotice";
import jsonData from "@/public/data/events.json";


export default function News() {
  return (
    <div className="gap-4">
        <h1>LostMa Events</h1>

        <div className="container">
          {Object.values(jsonData).map((obj, idx) =>
            <article key={`event-${idx}`}>
              {EventNotice(obj)}
            </article>
          )}
        </div>

    </div>
  );
}