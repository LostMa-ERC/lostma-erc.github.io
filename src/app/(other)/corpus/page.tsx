'use client';
import Link from "next/link";
import { XMLFileSVG, ShareSVG, QuestionMarkSVG as What, MailSVG as How, ClockSVG as When, GlobeSVG as Where } from "@/public/svgs";

import HorizontalBarChart from "./components/HorizontalBarchart";
import RadialChart from "./components/RadialChart";
import { getLangData, getLastModified } from "./components/fetchData";


export default function Corpus() {

  const lang_data = getLangData()
  const lastModified = `Last modified ${getLastModified().toDateString()}.`

  return (
    <div>
      <header>
        <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight">
          Corpus
        </h1>

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

      </header>

      <div className="pt-6 md:pt-8">

        <h2 className="font-bold p-1 w-fit md:text-xl text-2xl">
          Resources
        </h2>

        <dl>

          <dt className="py-8 md:py-4">
            <h2 className="p-1 w-fit md:text-lg text-xl">
              <Link className="flex items-center gap-2 link" href='/corpus/documentation'>
                <div className="md:size-8 size-6">
                  {ShareSVG}
                </div>
                <span className="inline-block text-slate-900 tracking-tight">
                  Documentation / Data Model
                </span>
              </Link>
            </h2>
            <p className="font-light tracking-wide mt-2">
              Documentation explaining the data (entities) and their metadata.
            </p>
          </dt>

          <dt className="py-8 md:py-4">
            <h2 className="p-1 w-fit md:text-lg text-xl">
              <Link className="flex items-center gap-2 link" href='/corpus/metadata'>
                <div className="md:size-8 size-6">
                  {XMLFileSVG}
                </div>
                <span className="inline-block text-slate-900 tracking-tight">
                  Corpus Metadata
                </span>
              </Link>
            </h2>
            <p className="font-light tracking-wide mt-2">
              Metadata about the literary corpus, which describe works, versions of works, manuscripts, etc.
            </p>
            <p className="font-light tracking-wide mt-2">
              See the <button><Link className="link" href='/corpus/documentation'>data model</Link></button> for more information about how these entities and their metadata are defined. The documentation will also help you understand how to use this dataset for your own research purposes.
            </p>
          </dt>

          <dt className="py-8 md:py-4">
            <h2 className="p-1 w-fit md:text-lg text-xl">
              <Link className="flex items-center gap-2 link" href='/corpus/full-text'>
                <div className="md:size-8 size-6">
                  {XMLFileSVG}
                </div>
                <span className="inline-block text-slate-900 tracking-tight">
                  Corpus Full Text
                </span>
              </Link>
            </h2>
            <p className="font-light tracking-wide mt-2">
            TEI-XML documents that include the metadata of a witness and its full text, as predicted from an Handwritten Text Recognition (HRT) model.
            </p>
          </dt>

        </dl>

      </div>

      <div className="mt-4" id="stats">
        <Link href="/corpus#stats">
          <h2 className="font-bold p-1 w-fit md:text-xl text-2xl">
            In-progress stats
          </h2>
        </Link>
        <p className="font-light tracking-wide mt-2">
          As our specialist contributors assemble the corpus, you can observe some key indicators about its evolving composition.
          These indicators are updated at regular intervals and represent neither real-time information nor the composition of the finished corpus.
          This is collaborative work in progress.
        </p>
        <div id="dashboard" key="dashboard" className="
          relative flex flex-col min-w-0 break-words w-full mb-6 shadlow-lg rounded
        ">

          <div className="rounded-t mb-0 px-4 py-3">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h3 className="text-lg md:text-xl tracking-tight md:tracking-wide">
                Languages of records currently in database
                </h3>
                <h4 className="text-[0.65rem] md:text-xs uppercase">Excluding: draft text records entered without language</h4>
              </div>
            </div>
          </div>

          <div className="w-full" data-testid="HorizontalBarChart">
            <HorizontalBarChart data={lang_data}/>
          </div>

          <p className="text-sm tracking-tight md:tracking-wide">{lastModified}</p>

        </div>
      </div>

    </div>
  );
}