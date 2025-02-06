import NewsNotice from "./components/NewsNotice";
import jsonData from "@/data/news.json";
import { fetchAllNews } from "@/app/functions/fetchNews";

const news = await fetchAllNews({arrays:jsonData})

const News = () => {
  return (
    <div className="md:flex md:gap-8 justify-center">
      <div className="justify-center items-center">
        <h1 className="my-2 text-center text-2xl font-bold text-slate-900 tracking-tight md:order-2">
          News
        </h1>
        <div className="items-center grid grid-cols-1 gap-2 pb-8">
          <div className="flex h-full text-center justify-center">
            <div className="bg-highlight rounded-lg outline outline-gray-300 w-40">Publication</div>
          </div>
          <div className="flex h-full text-center justify-center">
            <div className="bg-secondary rounded-lg outline outline-gray-300 w-40">Event</div>
          </div>
          <div className="flex h-full text-center justify-center">
            <div className="bg-info rounded-lg outline outline-gray-300 w-40">Announcement</div>
          </div>
        </div>
      </div>
      <div className="md:py-2 flex justify-center">
        <div className="grid md:grid-cols-3 gap-x-12 md:gap-y-8 md:space-y-0 space-y-8">
          {Object.values(news).map((event, idx) =>
            <div className="max-w-96 max-h-80" id={`${idx}`} key={`event-${idx}`}>
              < NewsNotice data={event} index={idx} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;