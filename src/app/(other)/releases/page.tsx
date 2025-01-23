export default function News() {
  return (
    <div>
        <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight">
          Releases
        </h1>
        <p className="font-light mt-2 tracking-wide">
          Check back in for more information later.
        </p>
      
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
          <p className="font-light mt-2 tracking-wide">
            ...
          </p>
        </div>

    </div>
  );
}