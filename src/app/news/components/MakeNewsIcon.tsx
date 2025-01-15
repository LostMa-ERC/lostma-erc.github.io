import {PublicationIcon, PresentationIcon, MeetingIcon, ConferenceIcon, OtherIcon} from "@/public/svgs";
import NewsItemClassifications from "./iconTypes";

class IconData {
    icon: any | undefined;
    label: string | undefined;
}

export default function MakeIcon(str: string) {
    const icon = new IconData();

    if (NewsItemClassifications.Publication === str ) {
        icon.icon = PublicationIcon;
        icon.label = NewsItemClassifications.Publication;
    }
    else if (NewsItemClassifications.Presentation === str ) {
        icon.icon = PresentationIcon;
        icon.label = NewsItemClassifications.Presentation;
    }
    else if (NewsItemClassifications.Conference === str ) {
        icon.icon = ConferenceIcon;
        icon.label = NewsItemClassifications.Conference;
    }
    else if (NewsItemClassifications.Meeting === str ) {
        icon.icon = MeetingIcon;
        icon.label = NewsItemClassifications.Meeting;
    }
    else {
        icon.icon = OtherIcon;
        icon.label = NewsItemClassifications.Other;
    }

    return (
        <div className="min-w-10 max-w-14 h-12 text-[10px] grid justify-center items-center mx-2">
            <label className="ps-2 pt-1">{icon.label}</label>
            <span className="h-10 mx-auto ps-2">{icon.icon}</span>
        </div>
    )

}