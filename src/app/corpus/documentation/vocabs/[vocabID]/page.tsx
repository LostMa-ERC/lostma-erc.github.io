import { loadVocabData } from "../../components/loadData";
import { fetchVocab } from "../../components/fetchData";
import Hashtag from "@/app/components/Hashtag";
import Link from "next/link";
import SetInnerHTML from "@/app/components/innerHTML";
import { loadDataModificationDate } from "../../components/loadData";

const UturnIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
</svg>

export async function generateStaticParams(): Promise<object[]> {
    // Load the JSON data store
    const arr = await loadVocabData()

    // Generate slugs for only the valid entity IDs of the JSON data store
    const slugs = Object.values(arr).flatMap(({id}) => id ? {vocabID:id.toString()}: []);
    return slugs;
}
 
export default async function Page({params, }: {params: Promise<{ vocabID: string }>}) {
  const { vocabID } = await params;
  const data = await fetchVocab(vocabID);
  const dateResponse = await loadDataModificationDate()
  const lastModifiedOn = new Date(dateResponse);
  if (data) {
    return (
      <>
      <div className="flex">
        <Link className="hover:bg-[--background]" href="/corpus/documentation">
          {UturnIcon}
        </Link>
        <p>Return to list of vocabularies.</p>
      </div>
      <div className="flex justify-center items-center">
        <p>Last updated on {lastModifiedOn.toDateString()}.</p>
      </div>
      <h1>{data.label}</h1>
      {SetInnerHTML(data.description)}
      <div className="container relative overflow-x">
        <table className="md:w-full min-w-fit overflow-scroll table-fixed text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Label</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Reference URL</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.values(data.terms).map((term) => 
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={`field-${term.id}`}>
                  <td className="px-6 py-4">{term.label}</td>
                  <td className="px-6 py-4">
                    {SetInnerHTML(term.description)}
                  </td>
                  <td className="px-6 py-4"><Hashtag url={term.url}/></td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
      </>
    )
  }
}
