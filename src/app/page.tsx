import Link from "next/link";
import { InboxSVG, DownloadSVG, PresentationIcon, ToolsSVG, DatabaseSVG, PublicationIcon, QuestionMarkSVG as What, MailSVG as How, ClockSVG as When, GlobeSVG as Where } from "@/public/svgs";

import peopleJSON from '@/data/people.json';
import { PeopleSVG } from "@/public/svgs";

const TeamMemberData = Object.values(peopleJSON.Team).sort(
    (a, b) => a.surname.localeCompare(b.surname)
);

const CollaboratorData = Object.values(peopleJSON.Collaborators).sort(
    (a, b) => a.surname.localeCompare(b.surname)
);

async function Team() {
  return (
    <div>

      <h2 className="p-1 w-fit md:text-xl text-2xl">
          <div className="flex items-center gap-2">
            <div className="md:size-8 size-6">
              {PeopleSVG}
            </div>
            <span className="inline-block font-bold text-slate-900 tracking-tight dark:text-slate-200">
              People
            </span>
          </div>
        </h2>

        <div className="grid md:grid-cols-3 pt-4 md:pt-6 gap-8">
            <div className="grid order-first md:order-last">
                <div className="ms-lg-5 mb-5 content-around">
                    <span className="text-muted">
                        LostMa / French Corpus
                    </span>
                    <h2 className="font-light text-xl md:text-lg mb-3 mb-xl-5">
                        Meet the Team
                    </h2>
                    <p className="font-light">
                      Our core team is responsible for the project&apos;s milestones and the French-language part of the corpus.
                    </p>
                </div>
            </div>
            <div className="order-last col-span-2 md:order-first">
                <dl className="grid md:grid-cols-3 justify-items-center gap-8">
                    {
                        Object.values(TeamMemberData).map((p, index) => 
                            <dt key={`team-member-${index}`} className="w-full">
                                <div className="md:w-full min-w-auto w-3/4 rounded shadow-lg border-solid border-2">
                                    <div className="px-6 py-4">
                                        <div className="text-lg mb-2">
                                            {p.forename.concat(" ", p.surname)}
                                        </div>
                                        <div className="text-muted text-sm font-light mb-2">
                                            {p.role}
                                        </div>
                                    </div>
                                </div>
                            </dt>
                        )
                    }
                </dl>
          </div>
        </div>

        <div className="grid md:grid-cols-3 pt-8 md:pt-12 gap-8">
            <div className="grid order-first md:ml-8">
                <div className="ms-lg-5 mb-5 content-around">
                    <span className="text-muted">International</span>
                    <h2 className="font-light text-xl md:text-lg mb-3 mb-xl-5">
                      Meet Our Collaborators
                    </h2>
                    <p className="font-light">
                      We collaborate with specialists in various literary traditions. They contribute data from different language communities to broaden the scope of the project&apos;s corpus.
                    </p>
                </div>
            </div>
            <div className="order-last col-span-2">
                <div className="grid md:grid-cols-3 justify-items-center gap-8">
                    {
                        Object.values(CollaboratorData).map((p, index) => 
                            <dt key={`team-member-${index}`} className="w-full">
                                <div className="md:w-full min-w-auto w-3/4 rounded shadow-lg border-solid border-2">
                                    <div className="px-6 py-4">
                                        <div className="text-lg mb-2">
                                            {p.forename.concat(" ", p.surname)}
                                        </div>
                                        <div className="text-muted text-sm font-light mb-2">
                                            {p.role}
                                        </div>
                                    </div>
                                </div>
                            </dt>
                    )
                    }
                  </div>
              </div>
          </div>
      </div>
  );
}

export default function Home() {
  return (
    <div>
      <header>
        <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200">
          What is LostMa?
        </h1>
      </header>
      <div>
        <p className="font-light mt-2 tracking-wide">
            A digital humanities research project that blends AI, complexity science, and philological expertise to unravel the mysteries behind the deviation from pure chance of a text&apos;s transmission.
        </p>
        <p className="font-light mt-2 tracking-wide">
            We are funded by the European Research Council (ERC) for five years, 2024-2029. Our offices are in the Campus Condorcet&apos;s Hôtel à projets and we are hosted by the École nationale des chartes in Paris, France.
        </p>
      </div>

      <div id="data-header" className="
        py-8 md:py-4 rounded-xl
      ">
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

      <div className="py-2" id="people">
        <Team />
      </div>
    </div>
  );
}
