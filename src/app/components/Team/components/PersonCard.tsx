import { PersonData } from "./models";
import Card from "@/app/components/Card";

export default function PersonCard(Item: PersonData, index:number) {
    const Name = Item.forename.concat(" ", Item.surname)
    return (
        <div key={`person-${index}`} className="md:w-full min-w-auto w-3/4">
            <Card title={Name} subtitle={Item.role} paragraph={undefined} />
        </div>
    );
};