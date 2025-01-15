import NewsItem from "./components/NewsItem";
import jsonData from "@/data/feed.json";


const SortedNewsData = Object.values(jsonData).sort(
    (a, b) => a.date.localeCompare(b.date)
).reverse();

export default function News() {
  return (
    <>
    <h1 className="mb-2">What are we up to?</h1>
    <div className="md:-ml-4 mb-6 bg-gradient-to-r from-gray-100 dark:from-gray-800 py-2 md:rounded-s-full rounded-xl">
      <p className="md:ml-8 ml-4">Follow the latest updates from the LostMa project.</p>
      <p className="md:ml-8 ml-4 text-center">{SortedNewsData.length} news items have been added.</p>
    </div>
    <div className="grid grid-flow-row auto-rows-max gap-8">
      {
        Object.values(SortedNewsData).map((i, index) =>
          <article key={`news-${i.date}-${index}`} className="w-10/12 sm:w-full md:w-full lg:w-full xl:w-full lg:w-full">
            < NewsItem item={i} />
          </article>
        )
      }
    </div>
    </>
  );
}