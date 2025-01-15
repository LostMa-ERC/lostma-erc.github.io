import { EventData } from "./EventData";
import Link from "next/link";

export default function makeLink(data: EventData) {

    let button = <></>

    if (data.label) {
        if (data.a) {
            button = (
                <button className="rounded-md outline outline-1">
                    <a target="_blank" rel="noreferrer" href={data.a}>
                    {data.label}
                    </a>
                </button>
            )
        }
        else if (data.link) {
            button = (
                <button className="rounded-md outline outline-1"><Link href={data.link}>{data.label}</Link></button>
            )
        }
    }

    return button
}