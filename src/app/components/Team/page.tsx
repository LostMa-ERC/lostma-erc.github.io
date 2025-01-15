import PersonCard from "./components/PersonCard";
import peopleJSON from '@/data/people.json';
import { PeopleSVG } from "@/public/svgs";

const TeamMemberData = Object.values(peopleJSON.Team).sort(
    (a, b) => a.surname.localeCompare(b.surname)
);

const CollaboratorData = Object.values(peopleJSON.Collaborators).sort(
    (a, b) => a.surname.localeCompare(b.surname)
);

export default async function Team() {
  return (
    <div className="flex flex-col space-y-4">
        <div className="bg-gradient-to-l from-gray-100 dark:from-gray-800 px-4 py-2 rounded-xl">
            <div className="flex gap-2 pb-4">
                {PeopleSVG}
                <h2>People</h2>
            </div>
            <div className="grid md:grid-cols-2 md:pt-0 gap-8">
                <div className="grid order-first md:order-last">
                    <div className="ms-lg-5 mb-5 content-around">
                        <span className="text-muted">LostMa / French Corpus</span>
                        <h2 className="display-5 fw-bold mb-3 mb-xl-5">Meet the Team</h2>
                        <p className="lead">Our core team is responsible for the project&apos;s milestones and the French-language part of the corpus.</p>
                    </div>
                </div>
                <div className="order-last md:order-first">
                    <div className="grid md:grid-cols-2 justify-items-center gap-8">
                        {
                            Object.values(TeamMemberData).map((p, index) => (PersonCard(p, index)))
                        }
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-gradient-to-r from-gray-100 dark:from-gray-800 px-4 py-2 rounded-xl">
            <div className="grid md:grid-cols-2 md:pt-0 gap-8">
                <div className="grid order-first md:ml-8">
                    <div className="ms-lg-5 mb-5 content-around">
                        <span className="text-muted">International</span>
                        <h2 className="display-5 fw-bold mb-3 mb-xl-5">Meet Our Collaborators</h2>
                        <p className="lead">We collaborate with specialists in various literary traditions. They contribute data from different language communities to broaden the scope of the project&apos;s corpus.</p>
                    </div>
                </div>
                <div className="order-last">
                    <div className="grid md:grid-cols-2 justify-items-center gap-8">
                        {
                            Object.values(CollaboratorData).map((p, index) => (PersonCard(p, index)))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}