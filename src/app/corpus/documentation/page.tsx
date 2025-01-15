import Link from "next/link";
import loadData, { loadVocabData } from "./components/loadData";

export default async function DataModelPage() {
  const data = await loadData();
  const vocabs = await loadVocabData();

  const SortedData = Object.values(data).sort(
    (a, b) => a.metadata.rty_Name.localeCompare(b.metadata.rty_Name)
  );
  const SortedVocabs = Object.values(vocabs).sort(
    (a, b) => a.label.localeCompare(b.label)
  );

  return (
    <>
    <h1>Documentation</h1>

    <div className="py-2 container my-2 bg-gradient-to-l from-gray-100 dark:from-gray-800 p-4 rounded-xl">
      <h2>Bibliography</h2>
      <p>
        To enrich resources in the corpus, we use citations in a public Zotero library at this address: <a href="https://www.zotero.org/groups/5710605/lostma-international"
              target="_blank" rel="noopener noreferrer">https://www.zotero.org/groups/5710605/lostma-international</a>.
      </p>
      <button className="relative px-2 py-1 rounded-full dark:bg-primary-dark bg-primary hover:outline-none hover:ring-2 hover:ring-inset hover:ring-white">
        <Link href='/corpus/documentation/bibliography'>Click for Contributor Information</Link>
      </button>
    </div>

    <div className="py-2 container my-2 bg-gradient-to-l from-gray-100 dark:from-gray-800 p-4 rounded-xl">
      <h2>Data Model</h2>
      <p>Explore the ontologies and controlled vocabularies we&apos;re using in our data model.</p>
      <p>
        Ideally, our data model should map to existing ontologies used across the semantic web. 
        We&apos;re working to build clean, reusable data that can fit into other workflows thanks to an architecture based on existing and standardised ontologies.
      </p>
      <p className="text-muted">
        Note: In order to facilitate data entry and the orientation of new contributors, some of the names given to the entities and vocabularies in our data model are unique to our project.
        The goal is to link our entities, their properties, and vocabulary terms to equivalent properties and queries in standardised ontologies, regardless of how we call them internally.
      </p>
    </div>

    <div className="grid md:grid-cols-2 md:px-20 px-8">

      <div className="container">
        <h2>Ontologies</h2>
        <ul data-testid="entity-link-list" className="list-disc py-2">
          {
            Object.values(SortedData).map((value, index) => {
              const entityURL = "/corpus/documentation/entities/" + value.id;
              const entityLinkID = "entity-link-" + index;
              return (
                <li key={entityLinkID}><Link href={entityURL}>{value.metadata.rty_Name}</Link></li>
              );
            })
          }
        </ul>
      </div>

      <div className="container">
        <h2>Vocabularies</h2>
        <ul data-testid="vocab-link-list" className="list-disc py-2">
          {
            Object.values(SortedVocabs).map((value, index) => {
              const vocabURL = "/corpus/documentation/vocabs/" + value.id;
              const vocabLinkID = "vocab-link-" + index;
              return (
                <li key={vocabLinkID}><Link href={vocabURL}>{value.label}</Link></li>
              );
            })
          }
        </ul>
      </div>

    </div>
    </>
  );
}