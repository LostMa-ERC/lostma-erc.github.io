import { LinkButtonType } from "./LinkButtonType";
import { NewsCategory } from "./NewsCategory";
import { LocationType } from "./LocationType";

type NewsType = {
    start: Date
    category: NewsCategory
    title: string
    detail: string | string[]
    description: string
    location: LocationType | null
    link: LinkButtonType | null
}

export type { NewsType };