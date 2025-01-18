import peopleJSON from '@/data/people.json';

const TeamMemberData = Object.values(peopleJSON.Team).sort(
    (a, b) => a.surname.localeCompare(b.surname)
);

const CollaboratorData = Object.values(peopleJSON.Collaborators).sort(
    (a, b) => a.surname.localeCompare(b.surname)
);

export { TeamMemberData, CollaboratorData }