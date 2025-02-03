import { PublicationDataType } from "@/app/types/PublicationData";
import jsonData from "@/data/publications.json";
import { fetchChronologicalData } from "@/app/functions/fetchData";
import PublicationNotice from "./components/PublicationNotice";

// Fetch the sorted event data and convert it to unknown / undo the generic fetch function's type
const array:unknown = await fetchChronologicalData({arrays: jsonData})
// Cast the sorted array's items to the event data type
let pubs = array as Array<PublicationDataType>;

const Publications = () => {
  return (
    <div className="gap-4">
        <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight">
          LostMa Publications
        </h1>
        {Object.values(pubs).map((pub, idx) =>
          <article className="p-1 w-auto" key={`event-${idx}`}>
            <div className="my-2 p-4 rounded shadow-lg border-solid border-2">
              < PublicationNotice data={pub} />
            </div>
          </article>
        )}
    </div>
  );
};

export default Publications;
