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
      <div>
        <div className="flex">
          <Link className="hover:bg-[--background] hover:text-highlight" href="/corpus/documentation">
            {UturnIcon}
          </Link>
          <p className="font-light tracking-wide mt-2">
            Return to list of vocabularies.
          </p>
        </div>
        <p className="font-light tracking-wide mt-2 text-xs">
          Last updated on {lastModifiedOn.toDateString()}.
        </p>
      </div>

      <header className="text-center mb-4 md:mb-8">
          <h1 className="tracking-wide inline-block md:text-xl text-2xl font-bold text-slate-900 tracking-tight">
            {data.label}
          </h1>
          <div className="font-light px-4 md:px-16 tracking-wide">
            {SetInnerHTML(data.description)}
          </div>
      </header>
      
      <div className="relative overflow-x">
        <table className="md:w-full min-w-fit overflow-scroll table-fixed text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-500">
            <tr>
              <th scope="col" className="px-6 py-3">Label</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Reference URL</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.values(data.terms).map((term) => 
                <tr className="font-light tracking-tight bg-white border-b" key={`field-${term.id}`}>
                  <td className="font-normal tracking-wide px-6 py-4">{term.label}</td>
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
