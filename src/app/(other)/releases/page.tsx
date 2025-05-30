import Image from "next/image";

export default function News() {

  return (
    <div>
      <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight">
        Releases
      </h1>

      {/* Block for dataset releases */}
      <div className="section-block">
        <h2 className="p-1 w-fit md:text-xl text-2xl">
          Datasets
        </h2>

        {/* First dataset release */}
        <div className="bg-white/50 rounded-md md:rounded-lg">
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

      {/* Block for code releases */}
      <div className="section-block py-2">
        <h2 className="p-1 w-fit md:text-xl text-2xl">
          Code
        </h2>

        {/* Heurist CLI */}
        <div className="bg-white/50 rounded-md md:rounded-lg">
          <div className="bg-light/30 text-white rounded-md md:rounded-lg">
            <div className="grid md:grid-cols-2 p-4">
              <div className="pt-4 md:pt-2 text-black">
                <h2 className="md:text-2xl text-xl italic">
                  <a target="_blank" rel="noreferrer" href="https://pypi.org/project/heurist-api/">Heurist API</a>
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

      </div>

      <div className="section-block py-2">
        <h2 className="p-1 w-fit md:text-xl text-2xl">
          ML Models
        </h2>

        {/* First model release */}
        <div className="bg-white/50 rounded-md md:rounded-lg">
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