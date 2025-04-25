export default function News() {

  return (
    <div>
        <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight">
          Releases
        </h1>
      
        <div>
          <h2 className="p-1 w-fit md:text-xl text-2xl">
            Datasets
          </h2>
          <p className="font-light mt-2 tracking-wide">
            ...
          </p>
        </div>

        <div className="section-block">
          <h2 className="p-1 w-fit md:text-xl text-2xl">
            ML Models
          </h2>
          <p className="font-light mt-2 tracking-wide">
            ...
          </p>
        </div>

        <div className="section-block">
          <h2 className="p-1 w-fit md:text-xl text-2xl">
            Code
          </h2>

          <div className="bg-white/50 rounded-md md:rounded-lg">
          <div className="bg-light text-white rounded-md md:rounded-lg">
            <div className="grid md:grid-cols-2 p-4">
              <div className="pt-4 md:pt-2 text-black">
                <h2 className="md:text-2xl text-xl italic">
                  <a target="_blank" rel="noreferrer" href="https://test.pypi.org/project/heurist/">Heurist ETL</a>
                </h2>
                <p className="font-light text-xs md:text-base tracking-wide md:px-8 max-h-40 overflow-y-scroll">
                  Python tool to Extract, Transform, and Load (ETL) data from a remote Heurist database into a local DuckDB database file. 
                </p>
                <p className="font-light text-xs md:text-base tracking-wide md:px-8 max-h-40 overflow-y-scroll">
                  The beta is published to <a className="link" href="https://test.pypi.org/project/heurist/" target="_blank" rel="noreferrer">Test PyPI</a>.
                  Documentation is available <a className="link" href="https://lostma-erc.github.io/heurist-etl-pipeline/" target="_blank" rel="noreferrer">here</a>.
                  </p>
              </div>
              <div className="pt-4 md:pt-2">
                <img src="https://raw.githubusercontent.com/LostMa-ERC/heurist-etl-pipeline/main/docs/assets/logo-transparent-1.png"/>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="font-light tracking-wide">
                Version 0.0.1a25
            </div>
            <hr className="mt-2" />
          </div>
        </div>

      </div>

    </div>
  );
}