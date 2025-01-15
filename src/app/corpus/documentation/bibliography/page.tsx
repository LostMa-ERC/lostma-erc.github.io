'use client'
import Link from "next/link";

export default function BibliographyToolTip() {

  return (
    <>
      <h1>Contribute to Corpus Bibliography</h1>
      <div className="py-2 container my-2 bg-gradient-to-l from-gray-100 dark:from-gray-800 p-4 rounded-xl">
        <h2>Getting Started</h2>
        <ul className="list-decimal py-2">
          <li>Ask the administrator to join the Zotero group library.</li>
          <li>Add to the Zotero library the references you want to attach to information in the Heurist database.</li>
          <li>Notify the administrator that you&apos;ve updated the Zotero library. The administrator will then newly synchronise the database with the Zotero library.</li>
          <li>Log into the database and start creating <Link href="/corpus/documentation/entities/128"><code>Footnote</code></Link> entities, which have one of the imported Zotero references and some other identifying information (i.e. page number).</li>
        </ul>
        <div className="text-muted mb-3">Note: It&apos;s easiest to create <code>Footnote</code> entities directly from the entities you&apos;re editing / reviewing by clicking on their <code>described_by_source</code> attribute and adding a new <code>Footnote</code> from there. The new <code>Footnote</code> will be immediately linked to the entity you&apos;re editing / reviewing.</div>
      </div>
      <div className="py-2 container my-2 bg-gradient-to-l from-gray-100 dark:from-gray-800 p-4 rounded-xl">
        <h2>Zotero-Heurist Conversion</h2>
        <p>
          Heurist converts Zotero&apos;s various reference types into its own record types. We have tested the conversion and only recommend using the following types of Zotero references:
        </p>
        <ul className="list-disc">
            <li>Book -- converts to <code>Book</code></li>
            <li>Book Section -- converts to <code>Book chapter</code></li>
            <li>Journal Article -- converts to <code>Journal article</code></li>
            <li>Thesis -- converts to <code>Thesis</code></li>
        </ul>
      </div>
      <div className="py-2 container my-2 bg-gradient-to-l from-gray-100 dark:from-gray-800 p-4 rounded-xl">
        <h2>Known Issues</h2>
        <p>
            There are some known issues with the Zotero-to-Heurist conversion.
        </p>
        <ul className="list-disc">
            <li>Conference Paper (avoid) -- converts to <code>Book chapter</code> with errors</li>
            <li>Dictionary Entry (avoid) -- fails to convert</li>
            <li>Encyclopedia Article (avoid) -- fails to convert</li>
        </ul>
        <p>
            In our Heurist database, most of the LostMa record types have the ability to link to a reference or <Link href="/corpus/documentation/entities/128"><code>Footnote</code></Link>.
            The <Link href="/corpus/documentation/entities/128"><code>Footnote</code></Link> entity is intentionally simple, in order to facilitate its quick creation.
            It draws on a reference imported from Zotero (<code>Book</code>, <code>Book chapter</code>, <code>Journal article</code>, <code>Thesis</code>)
            and includes page number (<code>pages</code>), the prefix for a dictionary or encyclopedia reference (<code>reference_prefix</code>), and/or a quotation from the source (<code>quotation</code>).
        </p>
      </div>
    </>
  )
}