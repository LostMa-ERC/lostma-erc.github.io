import { NewsCategory } from "../types/NewsCategory"
import { PubCategory } from "../types/PubCategory"

interface ChronologicalData {
    start: string
    [key: string]: any
};

type JsonArrayChrono = ChronologicalData[];

export async function fetchChronologicalData({arrays, category, pub_category, exclude_pub_category}: {arrays: any[], category: NewsCategory | null, pub_category: PubCategory | null, exclude_pub_category: PubCategory | null}): Promise<JsonArrayChrono> {

    // Concatenate the array or arrays to an empty array
    const arrayConcat: JsonArrayChrono = [].concat.apply([], arrays)
    
    // Return a subset that ignores length and other non-data objects
    const subsetBasic = arrayConcat.filter((i) => i.start != undefined)

    // If filtering on a category type, further refine the subset
    if (category) {
        var subsetFinal = subsetBasic.filter((i) => i.category === category)
        if (pub_category) {
            var subsetFinal = subsetFinal.filter((i) => i.pub_category === pub_category)
            }
        if (exclude_pub_category) {
            var subsetFinal = subsetFinal.filter((i) => i.pub_category !== exclude_pub_category)
            }
    }
    else {
        var subsetFinal = subsetBasic
    }
    
    // Sort the filtered array by date ('start' property)
    return subsetFinal.sort((a, b) => b.start.localeCompare(a.start))
};

export type { JsonArrayChrono };