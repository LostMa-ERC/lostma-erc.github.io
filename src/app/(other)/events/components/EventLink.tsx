import { EventLinkType } from "@/types/EventData";
import Link from "next/link";

const EventLink = ({data,}: {data: EventLinkType | null}) => {

    let button = <></>

    if (data) {
        if (data.page) {
            button = (
                <div className="w-fit button text-center">
                    <Link className="text-inherit bg-inherit hover:text-inherit hover:bg-inherit" href={data.url}>{data.label}</Link>
                </div>
            )
            
        }
        else {
            button = (
                <div className="w-fit button text-center">
                    <a className="text-inherit bg-inherit hover:text-inherit hover:bg-inherit" target="_blank" rel="noreferrer" href={data.url}>
                        {data.label}
                    </a>
                </div>
            )
        }
    }

    return button
}

export default EventLink