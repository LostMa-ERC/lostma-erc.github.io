import Link from "next/link";
import { InboxSVG, DownloadSVG, PresentationIcon, ToolsSVG, DatabaseSVG, PublicationIcon, QuestionMarkSVG as What, MailSVG as How, ClockSVG as When, GlobeSVG as Where } from "@/public/svgs";
import Team from "./components/Team/page";

export default function Home() {
  return (
    <div>
      <div className="section-block">
        <h1>What is LostMa?</h1>
        <p>
            A digital humanities research project that blends AI, complexity science, and philological expertise to unravel the mysteries behind the deviation from pure chance of a text&apos;s transmission.
        </p>
        <p>
            We are funded by the European Research Council (ERC) for five years, 2024-2029. Our offices are in the Campus Condorcet&apos;s Hôtel à projets and we are hosted by the École nationale des chartes in Paris, France.
        </p>
      </div>

      <div className="section-block">
        <div className="w-fit">
          <Link className="flex gap-2 p-1" href='/corpus'>
            {DatabaseSVG}
            <h2>Data</h2>
          </Link>
        </div>
        <p>A big milestone of the LostMa project is to assemble and publish a multilingual corpus of textual traditions. A narrative&apos;s inclusion in the corpus is defined by the following criteria:</p>
        <div className="grid md:grid-cols-4 pt-4 md:pt-0 gap-8 px-8">
          <div className="container">
            <div className="flex gap-4">
              {What}
              <h2>What</h2>
            </div>
            <p>Describes a hero or epic adventure.</p>
          </div>
          <div className="container">
            <div className="flex gap-4">
              {How}
              <h2>How</h2>
            </div>
            <p>First circulated in manuscript form.</p>
          </div>
          <div className="container">
            <div className="flex gap-4">
              {When}
              <h2>When</h2>
            </div>
            <p>First copies were written before the printing press.</p>
          </div>
          <div className="container">
            <div className="flex gap-4">
              {Where}
              <h2>Where</h2>
            </div>
            <p>Circulated within Western Europe.</p>
          </div>
        </div>
        <p>
          <Link className="p-1" href="/corpus">Learn more about the corpus, database, and data model.</Link>
        </p>
      </div>

      <div className="section-block">
        <div className="flex gap-2">
          {ToolsSVG}
          <h2>Methods</h2>
        </div>
          <p>...</p>
      </div>

      <div className="section-block">
        <div className="flex gap-2">
          {InboxSVG}
          <h2>Output</h2>
        </div>
        <div className="grid md:grid-cols-3 pt-4 md:pt-0 gap-8 px-8">
          <div className="container">
            <div className="w-fit">
              <Link className="flex gap-4 p-1" href="/publications">
                {PublicationIcon}
                <h2>Publications</h2>
              </Link>
            </div>
            <p>Scientific articles, conference presentatations, and other publications.</p>
          </div>
          <div className="container">
            <div className="w-fit">
              <Link className="flex gap-4 p-1" href="/releases">
                {DownloadSVG}
                <h2>Releases</h2>
              </Link>
            </div>
            <p>Versions of datasets, models, and software released for download.</p>
          </div>
          <div className="container">
            <div className="w-fit">
              <Link className="flex gap-4 p-1" href="/events">
                {PresentationIcon}
                <h2>Events</h2>
              </Link>
            </div>
            <p>Conferences, hackathons, and other in-person events.</p>
          </div>
        </div>
      </div>

      <div className="py-2" id="people">
        <Team />
      </div>
    </div>
  );
}
