import Link from "next/link";
import { InboxSVG, DownloadSVG, ChartSVG, ToolsSVG, DatabaseSVG, BeakerSVG } from "@/public/svgs";

export default function Links() {
    return (
    <>
        <div id="data-header" className="py-8 md:py-4 rounded-xl">
            <h2 className="p-1 w-fit md:text-xl text-2xl shadow-md border-solid border-2 hover:bg-gray-300 hover:border-dark rounded-xl p-1 bg-white/50">
                <Link className="flex items-center gap-2 mx-2" href='/corpus'>
                <div className="md:size-8 size-6">
                    {DatabaseSVG}
                </div>
                    Data
                </Link>
            </h2>
            <p className="px-4 font-light tracking-wide">
                A big milestone of the LostMa project is to assemble and publish a multilingual corpus of textual traditions.
                <br />
                <Link className="-mx-1 link font-light tracking-tight" href="/corpus">Learn more about the corpus, database, and data model.</Link>
            </p>
        </div>

        {/* <div id="methods-header" className="py-8 md:py-4">

            <h2 className="p-1 w-fit md:text-xl text-2xl">
                <div className="flex items-center gap-2">
                <div className="md:size-8 size-6">
                    {ToolsSVG}
                </div>
                <span className="inline-block font-bold text-slate-900 tracking-tight">
                    Methods
                </span>
                </div>
            </h2>

            <p className="font-light tracking-wide mt-2">
                ...
            </p>

        </div> */}

        <div id="output-header" className="md:py-4 py-8">

            <h2 className="p-1 w-fit md:text-xl text-2xl">
                <div className="flex items-center gap-2">
                <div className="md:size-8 size-6">
                    {InboxSVG}
                </div>
                <span className="inline-block font-bold text-slate-900 tracking-tight">
                    Output
                </span>
                </div>
            </h2>

            <p className="font-light tracking-wide mt-2">
                Scientific articles, conference presentatations, and other publications.
            </p>

            <dl className="grid md:grid-cols-3 pt-4 md:pt-0 gap-8 px-4 md:px-8">

                <dt>
                <h2 className="text-xl w-fit shadow-md border-solid border-2 hover:bg-gray-300 hover:border-dark rounded-xl p-1 bg-white/50">
                    <Link className="flex items-center gap-4 px-4" href='/publications'>
                    <div className="md:size-8 size-6">
                        {BeakerSVG}
                    </div>
                    Publications
                    </Link>
                </h2>
                <p className="inline-block tracking-tight font-light">
                    Scientific articles, conference presentatations, and other publications.
                </p>
                </dt>

                <dt>
                <h2 className="text-xl w-fit shadow-md border-solid border-2 hover:bg-gray-300 hover:border-dark rounded-xl p-1 bg-white/50">
                    <Link className="flex items-center gap-4 px-4" href='/releases'>
                    <div className="md:size-8 size-6">
                        {DownloadSVG}
                    </div>
                    Releases
                    </Link>
                </h2>
                <p className="inline-block tracking-tight font-light">
                Versions of datasets, models, and software released for download.
                </p>
                </dt>

                <dt>
                <h2 className="text-xl w-fit shadow-md border-solid border-2 hover:bg-gray-300 hover:border-dark rounded-xl p-1 bg-white/50">
                    <Link className="flex items-center gap-4 px-4" href='/events'>
                    <div className="md:size-8 size-6">
                        {ChartSVG}
                    </div>
                    Events
                    </Link>
                </h2>
                <p className="inline-block tracking-tight font-light">
                Conferences, hackathons, and other in-person events.
                </p>
                </dt>

            </dl>
        </div>
    </>
    )
}