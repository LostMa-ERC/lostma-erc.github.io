import Team from "./components/team";
import Links from "./components/links";

export default function Page() {
  return (
    <div>

    <div>
      <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight">
        What is LostMa?
      </h1>
    </div>

    <div>
      <p className="font-light mt-2 tracking-wide">
          A digital humanities research project that blends AI, complexity science, and philological expertise to unravel the mysteries behind the deviation from pure chance of a text&apos;s transmission.
      </p>
      <p className="font-light mt-2 tracking-wide">
          We are funded by the European Research Council (ERC) for five years, 2024-2029. Our offices are in the Campus Condorcet&apos;s Hôtel à projets and we are hosted by the École nationale des chartes in Paris, France.
      </p>
    </div>

    <Links />

    <div className="py-2" id="people">
      <Team />
    </div>

    </div>
  );
}
