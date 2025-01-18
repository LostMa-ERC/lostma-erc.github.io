import { EventData } from "./EventData";
import Link from "next/link";

export default function makeLink(data: EventData) {

    let button = <></>

    if (data.label) {
        if (data.a) {
            button = (
                <div className="w-fit button text-center">
                    <a className="text-inherit bg-inherit hover:text-inherit hover:bg-inherit" target="_blank" rel="noreferrer" href={data.a}>
                        {data.label}
                    </a>
                </div>
            )
        }
        else if (data.link) {
            button = (
                <div className="w-fit button text-center">
                    <Link className="text-inherit bg-inherit hover:text-inherit hover:bg-inherit" href={data.link}>{data.label}</Link>
                </div>
            )
        }
    }

    return button
}