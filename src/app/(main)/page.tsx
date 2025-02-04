import Links from "../(other)/about/components/links";


export default function HomePage() {
  return (
    <>
    <div>
      <h1 className="mt-2 md:mb-4 inline-block md:text-2xl text-3xl font-bold text-slate-900 tracking-tight">
        Welcome to the LostMa ERC Project
      </h1>
    </div>
  
    <div>
      <p className="font-light mt-2 tracking-wide">
        LostMa aims at understanding how human cultures are constituted and evolve, through the question of the transmission of written cultural artefacts. It strives to establish in what measure the transmission (and subsequent preservation or loss) of written artefacts, texts and ideas deviates from pure chance, and, if it deviates, by how much and why it does. It will do so by analysing the way that texts in manuscript form were copied, transformed or destroyed, in a similar way to the evolution of living organisms or of language variants, through process of innovation/mutation, fixation or extinction.
      </p>
      <p className="font-light mt-2 tracking-wide">
        As such, the goal of this project is not only to understand the processes behind the transmission of texts, but also to grasp the extent to which humans are the actors of the transmission of their own culture and how much the survival of texts or the constitution of cultural canons are due to chance.
      </p>
      <p className="font-light mt-2 tracking-wide">
        If this notion may seem provocative to humanities researchers, evolutionary biologists have long discovered the role of random drift in the survival or extinction of genetic traits and species. 
      </p>
      <p className="font-light mt-2 tracking-wide">
        To investigate this question, this project will attempt a paradigm-shift in philological methods, by combining artificial intelligence, complexity science and philological expertise. Stochastic birth-and-death processes and computer multi-agent simulations will be used to emulate the process of textual transmission. 
      </p>
      <p className="font-light mt-2 tracking-wide">
        A case study will be taken, regarding chivalric literature in European context. Supported by deep learning methods, large-scale data collection will be made on a corpus of 4000 documents in Romance, Germanic and Celtic languages, with a full-text zoom on approx. 1000 Old French manuscripts. Data will provide observable values to be compared to simulation results, in order to measure deviations from chance, make inferences on non observable values such as loss/survival rates of works and manuscripts, and understand the dynamics at work behind the transmission of texts.
      </p>
    </div>    
    </>
  );
}
