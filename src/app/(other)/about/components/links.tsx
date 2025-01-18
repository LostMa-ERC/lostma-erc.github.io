import Link from "next/link";
import { InboxSVG, DownloadSVG, PresentationIcon, ToolsSVG, DatabaseSVG, PublicationIcon, QuestionMarkSVG as What, MailSVG as How, ClockSVG as When, GlobeSVG as Where } from "@/public/svgs";

export default function Links() {
    return (
    <>
        <div id="data-header" className="py-8 md:py-4 rounded-xl">
            <h2 className="p-1 w-fit md:text-xl text-2xl dark:bg-gray-800 dark:hover:bg-inherit rounded-xl p-1">
                <Link className="flex items-center gap-2" href='/corpus'>
                <div className="md:size-8 size-6">
                    {DatabaseSVG}
                </div>
                    Data
                </Link>
            </h2>

            <p className="font-light tracking-wide mt-2">
                A big milestone of the LostMa project is to assemble and publish a multilingual corpus of textual traditions. A narrative&apos;s inclusion in the corpus is defined by the following criteria:
            </p>

            <dl className="grid md:grid-cols-4 pt-4 md:pt-0 gap-8 px-4 md:px-8">

                <dt className="rounded shadow-lg border-solid border-2 p-2">
                <h2 className="flex gap-4 items-center text-lg">
                    <div className="md:size-8 size-6">
                    {What}
                    </div>
                    What
                </h2>
                <p className="font-light text-sm tracking-wide mt-2">
                    Describes a hero or epic adventure.
                </p>
                </dt>

                <dt className="rounded shadow-lg border-solid border-2 p-2">
                <h2 className="flex gap-4 items-center text-lg">
                    <div className="md:size-8 size-6">
                    {How}
                    </div>
                    How
                </h2>
                <p className="font-light text-sm tracking-wide mt-2">
                    First circulated in manuscript form.
                </p>
                </dt>

                <dt className="rounded shadow-lg border-solid border-2 p-2">
                <h2 className="flex gap-4 items-center text-lg">
                    <div className="md:size-8 size-6">
                    {When}
                    </div>
                    When
                </h2>
                <p className="font-light text-sm tracking-wide mt-2">
                    First copies were written before the printing press.
                </p>
                </dt>

                <dt className="rounded shadow-lg border-solid border-2 p-2">
                <h2 className="flex gap-4 items-center text-lg">
                    <div className="md:size-8 size-6">
                    {Where}
                    </div>
                    Where
                </h2>
                <p className="font-light text-sm tracking-wide mt-2">
                    Circulated within Western Europe.
                </p>
                </dt>

            </dl>

            <p className="font-light tracking-tight mt-4">
                <Link className="p-1" href="/corpus">Learn more about the corpus, database, and data model.</Link>
            </p>
        </div>

        <div id="methods-header" className="py-8 md:py-4">

            <h2 className="p-1 w-fit md:text-xl text-2xl">
                <div className="flex items-center gap-2">
                <div className="md:size-8 size-6">
                    {ToolsSVG}
                </div>
                <span className="inline-block font-bold text-slate-900 tracking-tight dark:text-slate-200">
                    Methods
                </span>
                </div>
            </h2>

            <p className="font-light tracking-wide mt-2">
                ...
            </p>

        </div>

        <div id="output-header" className="md:py-4 py-8">

            <h2 className="p-1 w-fit md:text-xl text-2xl">
                <div className="flex items-center gap-2">
                <div className="md:size-8 size-6">
                    {InboxSVG}
                </div>
                <span className="inline-block font-bold text-slate-900 tracking-tight dark:text-slate-200">
                    Output
                </span>
                </div>
            </h2>

            <p className="font-light tracking-wide mt-2">
                Scientific articles, conference presentatations, and other publications.
            </p>

            <dl className="grid md:grid-cols-3 pt-4 md:pt-0 gap-8 px-4 md:px-8">

                <dt>
                <h2 className="text-xl w-fit dark:bg-gray-800 dark:hover:bg-inherit rounded-xl p-1">
                    <Link className="flex items-center gap-4 px-4" href='/publications'>
                    <div className="md:size-8 size-6">
                        {PublicationIcon}
                    </div>
                    Publications
                    </Link>
                </h2>
                <p className="inline-block tracking-tight font-light">
                    Scientific articles, conference presentatations, and other publications.
                </p>
                </dt>

                <dt>
                <h2 className="text-xl w-fit dark:bg-gray-800 dark:hover:bg-inherit rounded-xl p-1">
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
                <h2 className="text-xl w-fit dark:bg-gray-800 dark:hover:bg-inherit rounded-xl p-1">
                    <Link className="flex items-center gap-4 px-4" href='/events'>
                    <div className="md:size-8 size-6">
                        {PresentationIcon}
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