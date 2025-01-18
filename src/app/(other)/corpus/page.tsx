'use client';
import { useState } from "react";
import Link from "next/link";
import { XMLFileSVG, ShareSVG, QuestionMarkSVG as What, MailSVG as How, ClockSVG as When, GlobeSVG as Where } from "@/public/svgs";

export default function Corpus() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
          setIsOpen(!isOpen);
      };
  
  return (
    <div>
      <header>
        <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200">
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
              <Link className="flex items-center gap-2" href='/corpus/documentation'>
                <div className="md:size-8 size-6">
                  {ShareSVG}
                </div>
                <span className="inline-block text-slate-900 tracking-tight dark:text-slate-200">
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
              <Link className="flex items-center gap-2" href='/corpus/metadata'>
                <div className="md:size-8 size-6">
                  {XMLFileSVG}
                </div>
                <span className="inline-block text-slate-900 tracking-tight dark:text-slate-200">
                  Corpus Metadata
                </span>
              </Link>
            </h2>
            <p className="font-light tracking-wide mt-2">
              Metadata about the literary corpus, which describe works, versions of works, manuscripts, etc.
            </p>
            <p className="font-light tracking-wide mt-2">
              See the <button><Link href='/corpus/documentation'>data model</Link></button> for more information about how these entities and their metadata are defined. The documentation will also help you understand how to use this dataset for your own research purposes.
            </p>
          </dt>

          <dt className="py-8 md:py-4">
            <h2 className="p-1 w-fit md:text-lg text-xl">
              <Link className="flex items-center gap-2" href='/corpus/full-text'>
                <div className="md:size-8 size-6">
                  {XMLFileSVG}
                </div>
                <span className="inline-block text-slate-900 tracking-tight dark:text-slate-200">
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

      <div className="mt-4">
        <h2 className="font-bold p-1 w-fit md:text-xl text-2xl">
          In-progress stats
        </h2>
        <p className="font-light tracking-wide mt-2">
          As our specialist contributors assemble the corpus, you can observe some key indicators about its evolving composition.
        </p>
{/* 
        <button 
          id="developer-popup-button"
          type="button" 
          className="
              relative rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
          " 
          aria-controls="developer-popup" 
          aria-expanded="false"
          aria-label="developer-popup"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          Are you a developer? Want to know how we&apos;re doing this in-progress observability?
        </button>
        {isOpen && (
        <div className="rounded-xl ml-4 py-1 px-3 bg-info text-[14px] text-gray-100">
          <p>
            You&apos;re currently looking at a static site generated with NextJS and hosted by GitHub Pages.
            What you&apos;re not seeing is the LostMa corpus, which is being developed in real time via an OLTP relational database on a different server / platform, specifically Heurist.
          </p>
          <p className="my-2">
            On GitHub, a continuous integration / continuous deployment (CI/CD) periodically performs a process.
            First, the workflow extracts the current data from our Heurist server; 
            then, it transforms the relational data into flat information; 
            finally, it loads the cleaned data into a data store that this static site&apos;s JavaScript then parses--without needing to communicate with the Heurist server.
          </p>
          <p>
            Furthermore, if we want to stop updating the statistics on this page for some reason, we can halt the workflow whilst we continue developing the corpus on the OLTP database. 
            When we&apos;re ready to share the most up-to-date data again, we can restart the CI workflow and update the data store.
          </p>
          <p className="my-2">
            Check out the source code on our <a className="dark:text-blue-800" target="_blank" rel="noreferrer" href="https://github.com/kat-kel/lostma-website-test">open-source GitHub project</a> to learn more.
          </p>
        </div>
        )
      } */}
      <div key="dashboard" className="text-center">
        <p className="font-light italic tracking-wide mt-2">
          Dashboard is currently under construction...
        </p>
      </div>
      </div>
    </div>
  );
}