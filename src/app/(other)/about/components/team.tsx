import { TeamMemberData, CollaboratorData } from "./fetchData";
import { PeopleSVG } from "@/public/svgs";

export default async function Team() {
    return (
      <div id="team">
  
        <h2 className="p-1 w-fit md:text-xl text-2xl">
            <div className="flex items-center gap-2">
              <div className="md:size-8 size-6">
                {PeopleSVG}
              </div>
              <span className="inline-block font-bold text-slate-900 tracking-tight">
                People
              </span>
            </div>
          </h2>
  
          <div className="grid md:grid-cols-3 pt-4 md:pt-6 gap-8">
              <div className="grid order-first md:order-last">
                  <div className="ms-lg-5 mb-5 content-around">
                      <span className="text-muted">
                          LostMa
                      </span>
                      <h2 className="font-light text-xl md:text-lg mb-3 mb-xl-5">
                          Meet the Team
                      </h2>
                      <p className="font-light">
                        Our core team is responsible for the project&apos;s milestones and much of the French-language part of the corpus.
                      </p>
                  </div>
              </div>
              <div className="order-last col-span-2 md:order-first">
                  <dl className="grid md:grid-cols-3 justify-items-center gap-8">
                      {
                          Object.values(TeamMemberData).map((p, index) => 
                              <dt key={`team-member-${index}`} className="w-full">
                                  <div className="md:w-full min-w-auto w-3/4 rounded shadow-lg border-solid border-2">
                                      <div className="px-6 py-4">
                                          <div className="text-lg mb-2">
                                              {p.forename.concat(" ", p.surname)}
                                          </div>
                                          <div className="text-muted text-sm font-light mb-2">
                                              {p.role}
                                          </div>
                                      </div>
                                  </div>
                              </dt>
                          )
                      }
                  </dl>
            </div>
          </div>
  
          <div className="grid md:grid-cols-3 pt-8 md:pt-12 gap-8">
              <div className="grid order-first md:ml-8">
                  <div className="ms-lg-5 mb-5 content-around">
                      <span className="text-muted">International</span>
                      <h2 className="font-light text-xl md:text-lg mb-3 mb-xl-5">
                        Meet Our Collaborators
                      </h2>
                      <p className="font-light">
                        We collaborate with specialists in various literary traditions. They contribute data from different language communities to broaden the scope of the project&apos;s corpus.
                      </p>
                  </div>
              </div>
              <div className="order-last col-span-2">
                  <div className="grid md:grid-cols-3 justify-items-center gap-8">
                      {
                          Object.values(CollaboratorData).map((p, index) => 
                              <dt key={`team-member-${index}`} className="w-full">
                                  <div className="md:w-full min-w-auto w-3/4 rounded shadow-lg border-solid border-2">
                                      <div className="px-6 py-4">
                                          <div className="text-lg mb-2">
                                              {p.forename.concat(" ", p.surname)}
                                          </div>
                                          <div className="text-muted text-sm font-light mb-2">
                                              {p.role}
                                          </div>
                                      </div>
                                  </div>
                              </dt>
                      )
                      }
                    </div>
                </div>
            </div>
        </div>
    );
  }