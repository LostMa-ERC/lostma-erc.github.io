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
    <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight dark:text-slate-200">
      Documentation
    </h1>

    <div id="bibliography" className="py-4 md:py-2">
      <h2 className="p-1 w-fit md:text-xl text-2xl">
        Bibliography
      </h2>
      <p className="font-light tracking-wide mt-2">
        To enrich resources in the corpus, we use citations in a public Zotero library at this address: <a href="https://www.zotero.org/groups/5710605/lostma-international"
              target="_blank" rel="noopener noreferrer">https://www.zotero.org/groups/5710605/lostma-international</a>.
      </p>
        <Link className="button" href='/corpus/documentation/bibliography'>Click for Contributor Information</Link>
    </div>

    <div id="data-model" className="py-4 md:py-2">
      <h2 className="p-1 w-fit md:text-xl text-2xl">
        Data Model
      </h2>
      <p className="font-light tracking-wide mt-2">
        Explore the ontologies and controlled vocabularies we&apos;re using in our data model.
      </p>
      <p className="font-light tracking-wide mt-2">
        Ideally, our data model should map to existing ontologies used across the semantic web. 
        We&apos;re working to build clean, reusable data that can fit into other workflows thanks to an architecture based on existing and standardised ontologies.
      </p>

      <div className="grid md:grid-cols-2 md:px-20 px-8">

        <div className="container">
          <h2 className="p-1 w-fit md:text-lg text-xl">
            Ontologies
          </h2>
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
          <h2 className="p-1 w-fit md:text-lg text-xl">
            Vocabularies
          </h2>
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

      <p className="p-4 font-light tracking-wide mt-2 text-muted">
        Note: In order to facilitate data entry and the orientation of new contributors, some of the names given to the entities and vocabularies in our data model are unique to our project.
        The goal is to link our entities, their properties, and vocabulary terms to equivalent properties and queries in standardised ontologies, regardless of how we call them internally.
      </p>

    </div>
    </>
  );
}