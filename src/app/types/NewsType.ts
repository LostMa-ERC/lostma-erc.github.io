import { LinkButtonType } from "./LinkButtonType";
import { NewsCategory } from "./NewsCategory";
import { PubCategory } from "./PubCategory";
import { LocationType } from "./LocationType";

type NewsType = {
    start: Date
    category: NewsCategory
    title: string
    detail: string | string[]
    description: string
    location: LocationType | null
    link: LinkButtonType | null
    image: string | null
    pub_category: PubCategory | null
}

export type { NewsType };