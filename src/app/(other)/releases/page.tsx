import Image from "next/image";
import { CLISVG } from "@/public/svgs";

export default function News() {

  return (
    <div>
      <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight">
        Releases
      </h1>

      {/* Block for code releases */}
      <div className="section-block py-2">
        <h2 className="p-1 w-fit md:text-xl text-2xl">
          Code
        </h2>

        {/* Heurist CLI */}
        <div className="rounded-md md:rounded-lg py-2">
          <div className="bg-light/30 text-white rounded-md md:rounded-lg">
            <div className="grid md:grid-cols-2 p-4">
              <div className="pt-4 md:pt-2 text-black">
                <h2 className="flex space-x-1">
                  <div className="md:w-[32px] w-[28px]">{CLISVG}</div>
                  <a className="md:text-2xl text-xl italic" target="_blank" rel="noreferrer" href="https://pypi.org/project/heurist-api/">Heurist API</a>
                </h2>
                <p className="font-light text-xs md:text-base tracking-wide md:px-8 min-h-20">
                  This Python package provides an API wrapper for Heurist as well as a command-line interface (CLI) that Extracts, Transforms, and Loads (ETL) data from a Heurist database server into a local DuckDB database file.
                </p>
                <p className="font-light text-xs md:text-base tracking-wide md:px-8 min-h-10">
                  The Python packaged is published on the <a className="link" href="https://pypi.org/project/heurist-api/" target="_blank" rel="noreferrer">Python Package Index (PyPI)</a>.
                  Documentation is available <a className="link" href="https://lostma-erc.github.io/heurist-api/" target="_blank" rel="noreferrer">here</a>.
                  </p>
              </div>
              <div className="pt-4 md:pt-2">
                <a href="https://lostma-erc.github.io/heurist-api/" target="_blank" rel="noreferrer">
                  <Image alt="Heurist API logo" width={800} height={300} src="https://raw.githubusercontent.com/LostMa-ERC/heurist-api/main/docs/assets/logo-transparent-1.png"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* French scrapers */}
        <div className="rounded-md md:rounded-lg py-2">
          <div className="bg-light/30 pt-4 md:pt-2 text-black rounded-md md:rounded-lg">
            <h3 className="text-lg md:text-xl p-4">Scrapers for Cultural Heritage sites</h3>
            <div className="grid lg:grid-cols-2">
              <div className="border p-2 m-4 rounded">
                <h2 className="flex space-x-1">
                  <div className="md:w-[32px] w-[28px]">{CLISVG}</div>
                  <a className="md:text-2xl text-xl italic" href="https://github.com/LostMa-ERC/JonasScraper" target="_blank" rel="noreferrer">Jonas</a>
                </h2>
                <p className="font-light text-xs md:text-base tracking-wide md:px-8">
                  Scrape metadata about manuscripts and works on the <a className="link" href="https://jonas.irht.cnrs.fr/" target="_blank" rel="noreferrer">website Jonas</a> and its <em>Répertoire des textes et livres français et occitans (850-1550)</em> database, which is managed by the <a className="link" href="https://www.irht.cnrs.fr" target="_blank" rel="noreferrer">Institut de Recherche et d&apos;Histoire des Textes (IRHT)</a>.
                </p>
                <p className="font-light text-xs md:text-base tracking-wide md:px-8">
                  Provide the scraper with the URL of a manuscript (jonas.irht.cnrs.fr/manuscrit/) or work (jonas.irht.cnrs.fr/oeuvre/) and receive relational tables of the manuscrit or work, depending on the URL, and the witnesses related to it.
                </p>
                <a className="grid place-content-center" href="https://github.com/LostMa-ERC/JonasScraper" target="_blank" rel="noreferrer">
                  <p className="link font-light text-xs md:text-base tracking-wide md:px-8 w-fit">https://github.com/LostMa-ERC/JonasScraper</p>
                </a>
              </div>
              <div className="border p-2 m-4 rounded">
                <h2 className="flex space-x-1">
                  <div className="md:w-[32px] w-[28px]">{CLISVG}</div>
                  <a className="md:text-2xl text-xl italic" href="https://github.com/LostMa-ERC/french-catalogue-scraper" target="_blank" rel="noreferrer">Catalogue collectif de France, Archives et Manuscrits</a>
                </h2>
                <p className="font-light text-xs md:text-base tracking-wide md:px-8">
                  Scrape bibliographic metadata from notices in the <a className="link" href="https://ccfr.bnf.fr/" target="_blank" rel="noreferrer">Catalogue collectif de France (CCfr)</a> and/or the Bibliothèque nationale de France&apos;s <a className="link" href="https://archivesetmanuscrits.bnf.fr/" target="_blank" rel="noreferrer">Archives et Manuscrits</a> catalogue.
                </p>
                <p className="font-light text-xs md:text-base tracking-wide md:px-8">
                  Both scrapers are installed with the same Python package and require the URL of the notice to be scraped.
                </p>
                <a className="grid place-content-center" href="https://github.com/LostMa-ERC/french-catalogue-scraper" target="_blank" rel="noreferrer">
                  <p className="link font-light text-xs md:text-base tracking-wide md:px-8 w-fit">https://github.com/LostMa-ERC/french-catalogue-scraper</p>
                </a>
              </div>
              <div className="border p-2 m-4 rounded">
                <h2 className="flex space-x-1">
                  <div className="md:w-[32px] w-[28px]">{CLISVG}</div>
                  <a className="md:text-2xl text-xl italic" href="https://github.com/LostMa-ERC/search-archives-manuscrits" target="_blank" rel="noreferrer">Archives et Manuscrits (search)</a>
                </h2>
                <p className="font-light text-xs md:text-base tracking-wide md:px-8">
                  A CLI that runs the advanced search feature of the Bibliothèque nationale de France&apos;s <a className="link" href="https://archivesetmanuscrits.bnf.fr/" target="_blank" rel="noreferrer">Archives et Manuscrits</a> website.
                </p>
                <p className="font-light text-xs md:text-base tracking-wide md:px-8">
                  Using the department (i.e. Arsenal) and the shelfmark (<em>cote</em>), find the notice for the document in the Archives et Manuscrits catalogue. This tool is particularly useful when combined with the Archives et Manuscrits scraper, which takes the discovered notice URL.
                </p>
                <a className="grid place-content-center" href="https://github.com/LostMa-ERC/search-archives-manuscrits" target="_blank" rel="noreferrer">
                  <p className="link font-light text-xs md:text-base tracking-wide md:px-8 w-fit">https://github.com/LostMa-ERC/search-archives-manuscrits</p>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Block for dataset releases */}
      <div className="section-block">
        <h2 className="p-1 w-fit md:text-xl text-2xl">
          Datasets
        </h2>

        {/* First dataset release */}
        <div className="rounded-md md:rounded-lg py-2">
          <div className="bg-light/30 text-white rounded-md md:rounded-lg">
            <div className="grid md:grid-cols-2 p-4">
              <div className="pt-4 md:pt-2 text-black">
                <h2 className="md:text-2xl text-xl italic">
                  {/* <a target="_blank" rel="noreferrer" href="LINK GOES HERE">Dataset name</a> */}
                </h2>
                <p className="font-light text-xs md:text-base tracking-wide md:px-8"> {/* ADD THE FOLLOWING: min-h-20 */}
                  {/* Dataset description */}
                </p>
              </div>
              <div className="pt-4 md:pt-2">
                {/* <Image alt="IMAGE DESCRIPTION GOES HERE" width={800} height={300} src="IMAGE LINK GOES HERE"/> */}
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="section-block py-2">
        <h2 className="p-1 w-fit md:text-xl text-2xl">
          ML Models
        </h2>

        {/* First model release */}
        <div className="rounded-md md:rounded-lg py-2">
          <div className="bg-light/30 text-white rounded-md md:rounded-lg">
            <div className="grid md:grid-cols-2 p-4">
              <div className="pt-4 md:pt-2 text-black">
                <h2 className="md:text-2xl text-xl italic">
                  {/* <a target="_blank" rel="noreferrer" href="LINK GOES HERE">Model name</a> */}
                </h2>
                <p className="font-light text-xs md:text-base tracking-wide md:px-8"> {/* ADD THE FOLLOWING: min-h-20 */}
                  {/* Model description */}
                </p>
              </div>
              <div className="pt-4 md:pt-2">
                {/* <Image alt="IMAGE DESCRIPTION GOES HERE" width={800} height={300} src="IMAGE LINK GOES HERE"/> */}
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}