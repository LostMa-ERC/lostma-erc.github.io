'use client'
import Link from "next/link";

const Footnote = <Link href="/corpus/documentation/entities/128"><code>Footnote</code></Link>

export default function BibliographyToolTip() {

  return (
    <>
      <header>
        <p className="mb-2 leading-6 font-light tracking-wide">
          How to contribute to the bibliography
        </p>
        <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight">
          Bibliography
        </h1>
      </header>
      
      <div key="section-1" className="pb-8 md:pb-4">
        <h2 className="p-1 w-fit md:text-xl text-2xl">
          Getting Started
        </h2>
        <ul className="list-decimal mx-4 md:mx-8 py-2 space-y-2 font-light">
          <li>Ask the administrator to join the Zotero group library.</li>
          <li>Add to the Zotero library the references you want to attach to information in the Heurist database.</li>
          <li>Notify the administrator that you&apos;ve updated the Zotero library. The administrator will then newly synchronise the database with the Zotero library.</li>
          <li>Log into the database and start creating {Footnote} entities, which have one of the imported Zotero references and some other identifying information (i.e. page number).</li>
        </ul>
        <p className="font-light tracking-wide mt-2 text-muted mb-3">
          Note: It&apos;s easiest to create {Footnote} entities directly from the entities you&apos;re editing / reviewing by clicking on their <code>described_by_source</code> attribute and adding a new {Footnote} from there. The new {Footnote} will be immediately linked to the entity you&apos;re editing / reviewing.
        </p>
      </div>

      <div key="section-2" className="py-8 md:py-4">
        <h2 className="p-1 w-fit md:text-xl text-2xl">
          Zotero-Heurist Conversion
        </h2>
        <p className="font-light tracking-wide mt-2">
          Heurist converts Zotero&apos;s various reference types into its own record types. We have tested the conversion and only recommend using the following types of Zotero references:
        </p>
        <ul className="list-disc mx-4 md:mx-8 py-2 space-y-2 font-light">
            <li>Book &#45; converts to <code>Book</code></li>
            <li>Book Section &#45; converts to <code>Book chapter</code></li>
            <li>Journal Article &#45; converts to <code>Journal article</code></li>
            <li>Thesis &#45; converts to <code>Thesis</code></li>
        </ul>
      </div>

      <div key="section-3" className="py-8 md:py-4">
        <h2 className="p-1 w-fit md:text-xl text-2xl">
          Known Issues
        </h2>
        <p className="font-light tracking-wide mt-2">
            There are some known issues with the Zotero-to-Heurist conversion.
        </p>
        <ul className="list-disc mx-4 md:mx-8 py-2 space-y-2 font-light">
            <li>Conference Paper (avoid) &#45; converts to <code>Book chapter</code> with errors</li>
            <li>Dictionary Entry (avoid) &#45; fails to convert</li>
            <li>Encyclopedia Article (avoid) &#45; fails to convert</li>
        </ul>
        <p className="font-light tracking-wide mt-2">
            In our Heurist database, most of the LostMa record types have the ability to link to a reference or <Link href="/corpus/documentation/entities/128"><code>Footnote</code></Link>.
            The <Link href="/corpus/documentation/entities/128"><code>Footnote</code></Link> entity is intentionally simple, in order to facilitate its quick creation.
            It draws on a reference imported from Zotero (<code>Book</code>, <code>Book chapter</code>, <code>Journal article</code>, <code>Thesis</code>)
            and includes page number (<code>pages</code>), the prefix for a dictionary or encyclopedia reference (<code>reference_prefix</code>), and/or a quotation from the source (<code>quotation</code>).
        </p>
      </div>
    </>
  )
}