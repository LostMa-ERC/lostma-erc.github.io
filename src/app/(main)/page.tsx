'use client'
import Scroll from "./components/Scroll";

export default function HomePage() {

  return (
    <>
    <div className="md:flex items-start">

      <section className="order-2">
        <div className="md:px-4 md:pt-4 pt-2 pb-2 md:pb-0">
          <h1 className="inline-block text-3xl font-bold text-primary tracking-wide">
            Welcome to the LostMa ERC Project
          </h1>
        </div>
        <div className="w-fit order-2 md:p-4 text-sm md:text-base tracking-wide font-light">
          <p className="mt-2">
            LostMa aims at understanding how human cultures are constituted and evolve, through the question of the transmission of written cultural artefacts. It strives to establish in what measure the transmission (and subsequent preservation or loss) of written artefacts, texts and ideas deviates from pure chance, and, if it deviates, by how much and why it does. It will do so by analysing the way that texts in manuscript form were copied, transformed or destroyed, in a similar way to the evolution of living organisms or of language variants, through process of innovation/mutation, fixation or extinction.
          </p>
          <p className="mt-2">
            As such, the goal of this project is not only to understand the processes behind the transmission of texts, but also to grasp the extent to which humans are the actors of the transmission of their own culture and how much the survival of texts or the constitution of cultural canons are due to chance.
          </p>
          <p className="mt-2">
            If this notion may seem provocative to humanities researchers, evolutionary biologists have long discovered the role of random drift in the survival or extinction of genetic traits and species. 
          </p>
          <p className="mt-2">
            To investigate this question, this project will attempt a paradigm-shift in philological methods, by combining artificial intelligence, complexity science and philological expertise. Stochastic birth-and-death processes and computer multi-agent simulations will be used to emulate the process of textual transmission. 
          </p>
          <p className="mt-2">
            A case study will be taken, regarding chivalric literature in European context. Supported by deep learning methods, large-scale data collection will be made on a corpus of 4000 documents in Romance, Germanic and Celtic languages, with a full-text zoom on approx. 1000 Old French manuscripts. Data will provide observable values to be compared to simulation results, in order to measure deviations from chance, make inferences on non observable values such as loss/survival rates of works and manuscripts, and understand the dynamics at work behind the transmission of texts.
          </p>
        </div>
      </section>

      <div className="flex w-fit py-6 md:py-4" key="newsCarousel">
        <div className="md:min-w-96 max-w-96">
          <Scroll />
        </div>
      </div>

    </div>  
    </>
  );
}
