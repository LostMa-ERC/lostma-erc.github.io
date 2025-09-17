import { NewsType } from "@/types/NewsType";
import jsonData from "@/data/news.json";
import { fetchChronologicalData } from "@/app/functions/fetchData";
import PublicationNotice from "./components/PublicationNotice";
import { NewsCategory } from "@/app/types/NewsCategory";
import { PubCategory } from "@/app/types/PubCategory";

// Fetch the sorted event data and convert it to unknown / undo the generic fetch function's type
const preprints = await fetchChronologicalData({arrays: jsonData, category: NewsCategory.Publication, pub_category: PubCategory.Preprint})
const others = await fetchChronologicalData({arrays: jsonData,  category: NewsCategory.Publication, exclude_pub_category: PubCategory.Preprint})
// Cast the sorted array's items to the event data type
let pubs = [...preprints, ...others] as Array<NewsType>;

const Publications = () => {
  return (
    <div className="gap-4">
      <h1 className="my-2 inline-block text-2xl font-bold text-slate-900 tracking-tight md:hidden">
        Publications
      </h1>
      {Object.values(pubs).map((pub, idx) =>
        <div className="p-1 w-auto" id={`${idx}`} key={`article-${idx}`}>
          <div className="my-2 rounded md:rounded-lg border-solid border-2">
            < PublicationNotice data={pub} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Publications;
